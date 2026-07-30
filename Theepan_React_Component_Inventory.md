# Component Inventory — Theepan SS

## Page structure

The SPA uses one route and divides the page into two independent reference systems.
A numbered editorial label introduces each system before every component is rendered.

## Reference 1: Gymshark

| Sequence | Component | Responsibility | State/props |
|---|---|---|---|
| 1 | `PromoTicker` | Urgency, member and fulfilment messages | `messages[]` |
| 2 | `PerformanceHeader` | Audience/category navigation and utility actions | `links`, `bagCount` |
| 3 | `ImpactHero` | High-energy campaign and three shopping paths | `campaign`, `actions[]` |
| 4 | `ActivityCategoryRail` | Lift/run/condition intent cards | `categories[]` |
| 5 | `AudienceToggle` | Women/men shelf context | `audience`, `onChange` |
| 6 | `ProductDropGrid` | Technical product cards and quick add | `products[]`, `bagCount` |
| 7 | `TrainingEditorial` | Community/content continuation | `title`, `artLabel` |
| 8 | `AppMembershipBanner` | App/loyalty cross-channel CTA | `copy`, `cta` |

These logical units are contained in
`src/components/gymshark/GymsharkShowcase.jsx` for a compact review.

## Reference 2: Rains

| Sequence | Component | Responsibility | State/props |
|---|---|---|---|
| 1 | `UtilityPromiseBar` | Shipping, warranty and returns proof | `promises[]` |
| 2 | `EditorialHeader` | Minimal category navigation | `links` |
| 3 | `SeasonCampaignHero` | Collection title, campaign copy and dual CTA | `season`, `title`, `actions[]` |
| 4 | `CampaignGrid` | Asymmetric collection/editorial blocks | `campaigns[]` |
| 5 | `UseCaseProductStory` | Product detail organised by real use | `features[]`, `art[]` |
| 6 | `RetailUniverseStory` | Physical-store/brand-universe content | `title`, `cta` |
| 7 | `ServiceAccordion` | Shipping, warranty and returns detail | `openItem`, `onToggle` |
| 8 | `EditorialNewsletter` | Minimal email capture | `onSubmit` |

## Shared system

- `PlaceholderFrame`: geometric placeholder artwork in several aspect ratios.
- `ReferenceLabel`: numbered editorial introduction for each reference.
