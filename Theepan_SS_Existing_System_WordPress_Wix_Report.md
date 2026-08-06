# EXISTING SYSTEM STUDY

## Technical and Operational Study of WordPress and Wix Website Development

**Project Title:** Analysis of Existing CMS and Cloud Website-Building Solutions  
**Prepared By:** Theepan SS  
**Date:** 25 July 2026  

---

## 1. Purpose of the Study

This study examines WordPress and Wix as two different models for delivering websites.

WordPress follows a **self-managed CMS model**. The software is open source, the site owner chooses the server, and additional capabilities are added through themes, plugins, APIs, and custom code.

Wix follows a **software-as-a-service model**. The editor, hosting, publishing pipeline, platform security, applications, and business dashboard are delivered as one managed service.

The objective is to evaluate how these systems handle website creation, administration, security, deployment, performance, expansion, and long-term maintenance.

---

## 2. System Model A: WordPress

### 2.1 Working Principle

A browser request reaches the hosting server. WordPress processes the requested route using PHP, retrieves content and settings from MySQL or MariaDB, applies theme templates and plugin behaviour, and returns the generated page. Caching or a CDN may serve previously generated content more quickly.

The administration dashboard is used to create pages, publish posts, upload media, manage users, configure plugins, and update the website.

### 2.2 Main Subsystems

- WordPress core
- Administration dashboard
- Theme and block-template system
- Plugin and hook system
- Media library
- User and role management
- Database layer
- REST API
- Update mechanism
- Permalinks and routing
- Comments and content workflow

### 2.3 Technical Strengths

- Open-source code can be inspected and modified.
- Themes and plugins support modular development.
- Developers can create custom post types, fields, roles, APIs, and workflows.
- The REST API enables connection with mobile applications or separate frontends.
- Hosting can be selected according to budget, location, security, or performance.
- Database and files can be backed up and migrated.
- The platform can be used as a traditional CMS or a headless content system.

### 2.4 Operational Risks

- Unsupported plugins can become security liabilities.
- Updates require regression testing on customized websites.
- Backup, restoration, logging, monitoring, and firewall configuration must be planned.
- Shared hosting can reduce performance during traffic spikes.
- Incorrectly configured caching may show outdated pages or break dynamic functions.
- The quality of the final system depends greatly on the selected theme, plugins, and hosting.

---

## 3. System Model B: Wix

### 3.1 Working Principle

The user creates a website inside the Wix platform using AI, a template, or visual editing tools. The site is stored and published through Wix-managed infrastructure. Core hosting, certificates, platform updates, and delivery are handled by the service.

Business functions such as ecommerce, bookings, forms, customer management, marketing, and analytics are configured from the Wix dashboard. Developers can use Wix data, Velo APIs, and the newer Wix JavaScript SDK for supported custom behaviour.

### 3.2 Main Subsystems

- Wix visual editor and AI creation tools
- Template and responsive-layout system
- Managed hosting and CDN
- Wix CMS collections
- App Market and business applications
- Ecommerce, booking, forms, and marketing modules
- SEO and analytics tools
- Velo/Wix SDK custom-development layer
- Central administration dashboard
- Domain, publishing, and subscription management

### 3.3 Technical Strengths

- Infrastructure setup is largely removed from the user.
- Publishing, SSL, hosting, and platform updates are integrated.
- Standard business features can be deployed quickly.
- Visual editing reduces dependence on a developer for ordinary content changes.
- Wix provides APIs and JavaScript tools for supported custom functionality.
- A consistent platform reduces many plugin-version and server-configuration problems.
- AI-assisted design can accelerate the first version of a website.

### 3.4 Operational Risks

- The business depends on the platform’s features, pricing, APIs, and policies.
- Complete server and database control is not available in the same way as self-hosting.
- Exporting content does not necessarily recreate the full design and behaviour elsewhere.
- Advanced custom requirements may not fit available platform capabilities.
- Subscription and application costs continue for as long as the site remains on the service.
- Developers need to understand Wix-specific APIs and execution limits.

---

## 4. Architectural Comparison

| Technical Factor | WordPress | Wix |
|---|---|---|
| Delivery model | Downloadable open-source software | Managed cloud service |
| Server access | Available according to hosting plan | Abstracted by platform |
| Database access | Direct or through WordPress APIs | Through Wix CMS/data APIs |
| Core updates | Managed by owner or host | Managed by Wix |
| Extension model | Plugins, themes, hooks, custom PHP/JS | Apps, Velo, Wix SDK/APIs |
| Deployment | Host-specific process | Publish through Wix |
| Backup approach | Owner or managed host | Mainly platform managed |
| Failure responsibility | Shared among owner, host, theme and plugins | Primarily platform for infrastructure |
| Portability | High when dependencies are documented | Lower because design and features are platform-specific |
| Development freedom | Very high | High within supported APIs |
| Technical administration | Moderate to high | Low to moderate |

---

## 5. Administrative Workflows

### 5.1 WordPress Administration Workflow

```text
Server and domain preparation
          ↓
WordPress installation
          ↓
Administrator and security configuration
          ↓
Theme selection or development
          ↓
Plugin evaluation and installation
          ↓
Content and user-role setup
          ↓
Performance, backup and SEO configuration
          ↓
Staging test
          ↓
Production deployment
          ↓
Continuous updates and monitoring
```

### 5.2 Wix Administration Workflow

```text
Account and workspace creation
          ↓
AI-generated site or template selection
          ↓
Page and responsive design
          ↓
CMS and business application configuration
          ↓
SEO and analytics setup
          ↓
Plan and domain selection
          ↓
Preview and publish
          ↓
Dashboard-based content and business management
          ↓
Platform-managed updates
```

---

## 6. Security and Maintenance Comparison

### 6.1 WordPress

Security is a shared responsibility. WordPress core, themes, plugins, PHP, database software, and the hosting environment must be maintained. Recommended practices include:

- strong authentication and least-privilege roles,
- timely updates,
- trusted plugins and themes,
- automated backups,
- staging before major updates,
- web-application firewall and malware monitoring,
- HTTPS,
- activity logging,
- and recovery testing.

### 6.2 Wix

Wix manages the underlying hosting platform and core updates. The site owner is still responsible for:

- account security,
- staff permissions,
- domain ownership,
- customer-data handling,
- application access,
- payment settings,
- and safe use of custom code.

Managed infrastructure reduces server-maintenance effort, but it does not remove the need for governance and access control.

---

## 7. Performance and Scalability

### 7.1 WordPress Performance Factors

WordPress performance depends on:

- hosting resources,
- database size,
- theme quality,
- number and quality of plugins,
- image optimization,
- page caching,
- object caching,
- CDN use,
- and query efficiency.

It can scale well, but scaling requires deliberate architecture and monitoring.

### 7.2 Wix Performance Factors

Wix provides managed hosting and content delivery. The user has less responsibility for server tuning, but also less low-level control. Performance is mainly influenced by page design, media size, animations, third-party scripts, applications, and the capabilities of the selected Wix solution.

---

## 8. Cost Model

### 8.1 WordPress Cost Components

- Domain registration
- Hosting
- Premium themes or plugins
- Development
- Security and backup services
- Maintenance
- Future upgrades

The WordPress software may be free, but the completed website has operational costs.

### 8.2 Wix Cost Components

- Subscription plan
- Domain
- Premium business or ecommerce requirements
- Paid applications
- Payment-processing charges
- Custom development where needed

Wix offers predictable bundled plans, but the recurring cost is linked to continued platform use.

---

## 9. Limitations of Current Existing Systems

### WordPress

- Extension quality is inconsistent.
- A plugin-heavy system can become difficult to maintain.
- Misconfiguration can expose security or performance weaknesses.
- Non-technical users may depend on developers for incidents and upgrades.
- Complex customizations can make future updates expensive.

### Wix

- Platform lock-in affects migration.
- Server-level customization is restricted.
- Some custom integrations may not be supported.
- Advanced functionality can require platform-specific development.
- Changes in plan pricing or platform policy affect the customer.

---

## 10. Proposed Improvement Opportunities

A future website-building system can learn from both products by combining:

1. Wix-like visual simplicity with WordPress-like portability.
2. Managed security updates with transparent version history.
3. A controlled extension marketplace with permission and quality checks.
4. Exportable content, design tokens, assets, and structured site data.
5. Visual editing plus developer APIs.
6. Automated backup, rollback, staging, and publishing validation.
7. Clear performance budgets and accessibility checks before publishing.
8. Role-based approval for content, domains, ecommerce, and deployment.
9. AI assistance that explains and previews every generated change.
10. One-click migration without losing page structure or SEO information.

---

## 11. Existing-System Architecture Diagram

```text
                          Website User
                               │
                               ▼
                       Browser / Mobile
                               │
                 ┌─────────────┴─────────────┐
                 ▼                           ▼
       WordPress Deployment             Wix Platform
                 │                           │
       Web Server / PHP              Managed Cloud / CDN
                 │                           │
        Core + Theme + Plugins       Editor + Apps + CMS
                 │                           │
       MySQL / MariaDB                Managed Data Services
                 │                           │
        Owner-managed Ops             Wix-managed Platform Ops
```

---

## 12. Final Evaluation

WordPress provides greater control, portability, and development freedom. It is suitable for organizations willing to manage hosting, updates, security, and technical complexity in exchange for customization.

Wix provides faster implementation and lower infrastructure responsibility. It is suitable for small businesses, professionals, and teams that prefer integrated tools and managed maintenance.

From a technical perspective, the selection should be based on ownership requirements, development complexity, migration needs, internal skills, compliance, expected traffic, and lifecycle cost—not only on which editor appears easier during initial setup.

---

## References

1. WordPress.org — Features: https://wordpress.org/about/features/
2. WordPress.org — Hosting WordPress: https://wordpress.org/documentation/article/hosting-wordpress/
3. WordPress.org — Download and technical recommendations: https://wordpress.org/download/
4. WordPress Developer Resources: https://developer.wordpress.org/
5. Wix Website Builder: https://www.wix.com/
6. Wix Drag-and-Drop Builder: https://www.wix.com/builder/drag-and-drop
7. Wix Velo API Documentation: https://dev.wix.com/docs/velo
8. Wix Developer Documentation: https://dev.wix.com/docs/develop-websites/
