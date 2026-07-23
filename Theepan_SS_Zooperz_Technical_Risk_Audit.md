# Zooperz Site Builder — Architecture, Security and Reliability Assessment

**Prepared by:** Theepan SS  
**Review type:** Technical risk, data integrity and production-readiness assessment  
**Repository reviewed:** `zooperz-site-builder-develop`  
**Review date:** 23 July 2026

## 1. Technical Overview

The repository uses an npm-workspace monorepo with four logical packages:

- `contracts` for shared schemas and branded IDs,
- `design-system` for tokens,
- `merchant-admin` for the website-builder application,
- `storefront` for the public shop runtime.

The design shows several sound engineering decisions: repository interfaces isolate persistence, React Query manages server state, Zustand manages editor state, routes are lazy loaded, permissions are expressed as capabilities, and the editor includes revision-aware autosave and conflict handling.

The main production risk is not component organization. It is the gap between the architecture described by the types and the runtime actually wired by the application. Authentication, persistence, publishing, catalogue fallback, cart trust, and tests still contain development shortcuts that would be unsafe in a live commerce system.

## 2. Critical Security Findings

### A. Authentication can be bypassed through localStorage — Critical

The login page contains hardcoded credentials and displays them on screen. After login, the application stores only an email in `localStorage`. On reload, any stored object containing an `email` value is converted into an OWNER session without server validation, expiry, signature, or token check.

**Evidence:**  
`LoginPage.tsx:11–14`, `113–130`  
`App.tsx:8–29`

An attacker with browser access or an XSS path could set:

```js
localStorage.setItem("zooperz_auth", '{"email":"attacker@example.com"}')
```

and receive OWNER capabilities on the next load.

**Required fix:** integrate the host application’s authenticated session, use secure server-issued tokens/cookies, validate merchant membership server-side, implement logout/expiry, and remove development credentials from production builds.

### B. Users can promote themselves to Owner — Critical

The Settings screen exposes an “Active Test Role” selector to every current role. `setRole` directly changes the local user object. A READ_ONLY user can select OWNER and immediately gain edit, publish, rollback, domain, media, catalogue, and order permissions in the frontend.

**Evidence:**  
`SettingsManagement.tsx:83–97`  
`SessionContext.tsx:82–99`

Even after hiding this selector, frontend permission checks are not security boundaries. Every repository/API mutation must enforce authorization on the server using authenticated merchant and role data.

### C. Production authentication configuration is declared but not connected — High

`WebsiteBuilderModuleProps` contains a `tokenProvider`, but it is not consumed elsewhere in the repository. The root `App` always instantiates `InMemorySiteBuilderRepository`, so the normal application path does not use authenticated HTTP persistence.

**Evidence:**  
`WebsiteBuilderConfigProvider.tsx:11–18`  
`App.tsx:3–8`, `45–50`

**Required fix:** construct `HttpSiteBuilderRepository` from a real API base URL and token provider at the integration boundary; prohibit the in-memory repository in production builds.

## 3. Data Integrity and Reliability Findings

### A. React Query key collision can return the wrong data shape — Critical

`useChecklist()` and `usePublishValidation()` both use `siteBuilderKeys.checklist()`, even though one returns `ChecklistItem[]` and the other returns `{ valid, errors }`.

React Query considers them the same resource. Depending on which screen loads first and cache freshness, the other screen can receive incompatible cached data or skip its own request.

**Evidence:**  
`useSiteBuilderQueries.ts:109–121`, `558–569`  
`queryKeys.ts:3–9`

**Fix:** add a distinct key such as `publishValidation()` and invalidate it after page, navigation, theme, media, or SEO changes.

### B. Commerce totals trust browser-controlled product data — Critical

The cart persists entire product objects, including price and stock, in localStorage. Checkout totals are calculated directly from this stored price. There is no server refresh or authoritative order-price calculation in the checkout path.

**Evidence:**  
`cartStorage.ts:5–13`  
`cartReducer.ts:18–27`  
`CheckoutPage.tsx:4`

A production order must send only product IDs, variant IDs, and quantities. The server must re-read current price, tax, availability, limits, delivery eligibility, and discounts before creating the order.

### C. Catalogue failure silently becomes fake inventory — High

`R2CatalogDataSource.getProducts()` returns a hardcoded mock catalogue on non-2xx responses, malformed payloads, timeouts, aborts, or any other exception. In production this can show fictional products, prices, and availability during a CDN outage.

The normalizer also uses `Boolean(obj.inStock)`, so the string `"false"` becomes `true`. It accepts any numeric price, including negative, infinite, or `NaN`.

**Evidence:**  
`catalogDataSource.ts:124–150`

**Fix:** validate with a strict Zod schema; preserve abort errors; show a catalogue-unavailable state; use last-known-good data only if it is versioned, timestamped, and clearly marked stale.

### D. Product request errors are not handled — Medium

The product route calls `getProduct(...).then(...).finally(...)` without a catch. A rejecting implementation can produce an unhandled promise rejection rather than a controlled error state.

**Evidence:**  
`StorefrontRouter.tsx:28–41`

**Fix:** track loading, not-found, aborted, and failed states separately.

### E. Catalogue abstractions are duplicated and partially empty — Medium

The storefront contains a complete `catalogDataSource.ts`, plus:

- `data/CatalogDataSource.ts` with an empty interface,
- `data/R2CatalogDataSource.ts` with an empty class,
- another in-memory data source with different fixture values.

This creates multiple possible imports and increases the risk of implementing against a stub by mistake.

**Fix:** keep one canonical interface and implementations under one folder, then remove or complete obsolete files.

## 4. Publishing and Persistence Risks

The UI simulates the publish pipeline using timers after only the job-creation call. It does not use the repository’s job-status endpoint. The in-memory `createPublishJob` also does not add a new release to release history. Consequently, the UI state, job state, and release history can disagree.

The in-memory repository stores data only in module memory. Refreshing the application resets repository state, even though the interface may have shown “saved” or “published.”

**Evidence:**  
`PublishingManagement.tsx:53–87`  
`InMemorySiteBuilderRepository.ts:401–443`  
`App.tsx:7`

**Fix:** persist through the HTTP repository, poll by job ID, use idempotency keys supplied by the server contract, and treat ACTIVE only as a backend-confirmed terminal status.

## 5. Test and Delivery Quality

The repository contains 39 test files, but 13 storefront test files only assert `expect(true).toBe(true)`. This includes Cart, Checkout, Search, Product, persistence, WhatsApp, semantic HTML, storefront states, and bundle budget.

The bundle-budget test says the output was verified but performs no file-size measurement. The Playwright tests only verify the page title or that the body is visible; the direct editor test can pass even when the login page prevents editor access.

There is also no visible CI workflow in the supplied repository. The README refers to `docs/` and `.agents/`, but both are excluded/missing, while `REPO_MAP.md` describes an older Phase 1 state and says tests are pending despite extensive later code.

**Evidence:**  
`packages/storefront/src/__tests__/*`  
`e2e/editorFlow.spec.ts:3–12`  
`.gitignore`; `README.md`; `REPO_MAP.md`

**Required test improvements:**

1. Replace placeholder tests with user-behaviour assertions.
2. Test login, role denial, checkout failure/success, stale price, stock loss, publishing failure, and query-key isolation.
3. Make E2E login explicitly and verify editor controls, persistence, reload, and published output.
4. Measure generated JS/CSS gzip sizes in CI.
5. Add dependency audit, lint, typecheck, unit, accessibility, and Playwright jobs.
6. Update documentation in the same pull request as architecture changes.

## 6. Production Hardening Plan

### Phase 1 — Security boundary

- Replace localStorage authentication.
- Remove client role switching.
- Enforce permission and merchant isolation in backend endpoints.
- Wire the HTTP repository and token provider.

### Phase 2 — Trusted commerce and publishing

- Reprice and revalidate cart server-side.
- Remove mock fallback from production catalogue.
- Separate query keys.
- Poll real publish jobs and persist release history.

### Phase 3 — Quality gates

- Consolidate duplicate data-source modules.
- Replace placeholder tests.
- Add CI, accessibility checks, bundle budgets, observability, and error reporting.
- Synchronize README, repository map, and architecture documents.

## 7. Final Assessment

The codebase has a good modular direction and enough abstractions to become production-grade, but its current security and data-trust model is suitable only for development. The most urgent fixes are authenticated server authorization, query-cache separation, authoritative checkout pricing, and real publishing-state verification.

**Architecture quality:** Good foundation  
**Security readiness:** Development only  
**Production recommendation:** Do not expose publicly until critical authentication and data-integrity controls are completed.

## Review Note

This was a direct static source-code inspection. Automated build results were not used as defect evidence because dependencies were not included in the supplied ZIP and could not be fully restored in the review sandbox.
