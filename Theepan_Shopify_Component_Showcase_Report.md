# Shopify Storefront Component Showcase Report

## UI Component Analysis of Rains (International) & Mokobara (Indian)

**Prepared By:** Theepan SS  
**Technology:** React + Vite  
**Internship Task:** Shopify Reference Component Showcase  
**Date:** August 2026

---

# Table of Contents
1. Introduction
2. Objectives
3. Selected Websites
4. Comparative Analysis
5. Component Inventory
6. UI Flow
7. React Architecture
8. Technologies
9. Deliverables
10. Conclusion

---

# 1. Introduction

This report analyzes two Shopify-powered storefronts—Rains and Mokobara—to identify reusable UI components that can be recreated in a React + Vite Single Page Application (SPA). The focus is on layout structure, spacing, responsiveness, and reusable component design using placeholder images.

# 2. Objectives

- Research one International and one Indian Shopify storefront.
- Extract reusable homepage components.
- Recreate the layouts as React components.
- Use placeholder images instead of brand assets.
- Deploy the SPA on GitHub Pages.

# 3. Selected Websites

| Website | Type | Reason |
|---|---|---|
| Rains | International | Editorial layout, premium fashion design, modular homepage |
| Mokobara | Indian | Modern travel store, rich product cards, category-based navigation |

# 4. Comparative Analysis

| Feature | Rains | Mokobara |
|---|---|---|
| Design Style | Minimal Editorial | Premium Travel |
| Navigation | Clean & Minimal | Product-focused |
| Hero | Large Campaign Banner | Lifestyle Banner |
| Product Display | Editorial Cards | Product Grid |
| CTA | Minimal | Promotional |
| Mobile UX | Excellent | Excellent |

# 5. Component Inventory

## Rains
| Order | Component | Purpose |
|---:|---|---|
|1|Promo Bar|Announcements|
|2|Navbar|Navigation|
|3|Editorial Hero|Landing section|
|4|Collection Grid|Featured collections|
|5|Editorial Cards|Brand stories|
|6|Product Carousel|Products|
|7|Newsletter|Subscription|
|8|Footer|Links|

## Mokobara
| Order | Component | Purpose |
|---:|---|---|
|1|Offer Bar|Promotions|
|2|Navbar|Navigation|
|3|Travel Hero|Main banner|
|4|Category Tiles|Collections|
|5|Product Grid|Products|
|6|Benefits Section|Features|
|7|Reviews|Customer feedback|
|8|Newsletter|Subscription|
|9|Footer|Links|

# 6. UI Flow

```text
Landing Page
  |
  +-- Rains Components
  |    |- Promo Bar
  |    |- Hero
  |    |- Collections
  |    |- Products
  |    `- Footer
  |
  `-- Mokobara Components
       |- Hero
       |- Categories
       |- Products
       |- Reviews
       `- Footer
```

# 7. React Architecture

```text
src/
 ├── components/
 │   ├── rains/
 │   └── mokobara/
 ├── App.jsx
 ├── main.jsx
 └── styles/
```

Recommended Libraries:
- React
- Vite
- React Icons
- Framer Motion
- CSS Modules

# 8. Deliverables

- Approved reference URLs
- Component inventory
- React + Vite SPA
- GitHub repository
- GitHub Pages deployment

# 9. Conclusion

Rains and Mokobara provide different but complementary design patterns. Rains emphasizes editorial storytelling and minimalism, while Mokobara focuses on premium travel commerce and product discovery. Together they offer an excellent foundation for building reusable React components.

# References

- https://www.rains.com/
- https://mokobara.com/
- https://react.dev/
- https://vite.dev/
