# Shopify Storefront Analysis and Technical Component Plan — Theepan SS

## 1. Proposed references

- **International:** Gymshark — https://www.gymshark.com/
- **Indian:** Mokobara — https://mokobara.com/

Both are confirmed Shopify/Shopify Plus merchants through official Shopify case studies.

## 2. Analysis perspective

This submission studies **high-energy performance commerce versus colour-led travel utility**. Gymshark prioritizes activity, technical product choice and community. Mokobara prioritizes luggage size, travel use, collections, colour, sale clarity, loyalty and store continuity.

## 3. Gymshark analysis

### UI/UX and design

- Strong campaign headlines and high-contrast CTAs produce immediate energy.
- Product language includes activity, fit and collection context.
- New arrivals, bestsellers and product drops encourage repeated visits.
- Training content and membership extend the experience beyond a transaction.

### Navigation

Women, Men and Accessories are supported by deeper groups for clothing, collections, activities, colours, guides and loyalty. This is useful for both known-product and activity-led shopping.

### Performance

Large campaign media and extensive product grids are the main risk. Production should use responsive images, lazy loading, route/data pagination and deferred reviews/analytics. This report does not claim an unmeasured Lighthouse score.

### Responsiveness and customer experience

Mobile must preserve Women, Men and Accessories as immediate choices. Filters should open in an accessible sheet and applied filters should remain visible. Technical product information must not become unreadably small.

## 4. Mokobara analysis

### UI/UX and design

- The catalogue is organised by luggage size, collection, use and highlights.
- Bright colour naming and swatches are central to product identity.
- Bestsellers show sale price, struck-through price and multiple colours.
- Luggage, backpacks, totes, accessories and wallets are available from a compact navigation system.
- Loyalty and physical stores support repeat and omnichannel shopping.

### Navigation

Mokobara’s navigation supports By Size, By Collection and By Use, which is particularly suitable for travel products. Search uses category-specific language such as luggage and backpacks.

### Performance

Colour-rich cards can multiply image requests. A production system should lazy-load alternate colours, reserve aspect ratios, fetch product data in pages and avoid loading all swatch images before interaction.

### Responsiveness and customer experience

Collection cards reduce from four to two to one column. Size comparison becomes a stacked guide. Colour swatches maintain touch-friendly targets. Sale price, original price and selected colour remain visible together.

## 5. Combined design concept: “Train / Travel”

The unified experience begins with Gymshark-style urgency and activity navigation, then applies Mokobara’s size, capacity and colour decision tools.

### Combined section order

1. Project masthead
2. Gymshark promo bar and navigation
3. Performance campaign hero
4. Activity cards
5. Audience toggle and product drop grid
6. Training/community editorial
7. App/membership banner
8. Mokobara sale bar and travel navigation
9. Colour-led travel hero
10. Size/use collection grid
11. Bestseller luggage grid with swatches
12. Luggage-size comparison
13. Loyalty banner
14. Store-locator story
15. Newsletter close

## 6. React component/library recommendations

| Feature | Recommended implementation | Engineering reason |
|---|---|---|
| Menus, accordions, dialog and filter sheet | Radix UI Primitives | Accessible keyboard behaviour with unstyled components |
| Product rail | Embla Carousel React | Touch-friendly and dependency-light |
| Remote collection and product data | TanStack Query | Cache keys, cancellation, pagination and errors |
| Filter state | URLSearchParams + reducer | Shareable collection state and predictable updates |
| Cross-section bag/UI state | Zustand | Small scalable state store when shared state is needed |
| Forms and validation | React Hook Form + Zod | Efficient forms and safe payloads |
| Variants | class-variance-authority | Maintainable visual variants for product labels and buttons |
| Animation | Motion selectively | Useful for campaign transitions, with reduced-motion handling |
| Testing | Vitest + Testing Library + Playwright + axe-core | Unit, interaction, responsive and accessibility testing |

The showcase intentionally uses React and CSS only, because the task requires a static one-page component demonstration rather than a production store.

## 7. Sources

- Gymshark storefront: https://www.gymshark.com/
- Shopify Gymshark case study: https://www.shopify.com/uk/case-studies/gymshark
- Mokobara storefront: https://mokobara.com/
- Shopify Mokobara case study: https://www.shopify.com/de/case-studies/mokobara
