# Component Inventory — Theepan SS

## SPA order

1. Project masthead
2. Gymshark reference label and component system
3. Mokobara reference label and component system
4. Disclaimer/footer

Every section is rendered on the single `/` route.

## International reference: Gymshark

| Page order | Component/section | Reusable props or state |
|---:|---|---|
| 1 | `PromoTicker` | `messages[]` |
| 2 | `PerformanceHeader` | `links`, `bagCount` |
| 3 | `ImpactHero` | `campaign`, `actions[]`, `artLabel` |
| 4 | `ActivityCategoryRail` | `categories[]` |
| 5 | `AudienceToggle` | `audience`, `onChange` |
| 6 | `ProductDropGrid` | `products[]`, `bagCount`, `onQuickAdd` |
| 7 | `TrainingEditorial` | `title`, `copy`, `artLabel` |
| 8 | `AppMembershipBanner` | `title`, `copy`, `cta` |

Rendered from `src/components/gymshark/GymsharkShowcase.jsx`.

## Indian reference: Mokobara

| Page order | Component/section | Reusable props or state |
|---:|---|---|
| 1 | `SaleAnnouncement` | `message` |
| 2 | `TravelHeader` | `links`, `menuOpen`, `onMenuToggle` |
| 3 | `ColourCampaignHero` | `title`, `actions[]`, `artLabel` |
| 4 | `TravelCollectionGrid` | `collections[]` |
| 5 | `BestsellerLuggageGrid` | `products[]` |
| 6 | `LuggageCard` | `name`, `capacity`, `price`, `oldPrice`, `colours`, `onAdd` |
| 7 | `SizeComparison` | `sizes[]`, `selectedSize` |
| 8 | `LoyaltyBanner` | `benefits[]`, `cta` |
| 9 | `StoreLocatorStory` | `title`, `copy`, `artLabel` |
| 10 | `NewsletterFooter` | `onSubmit` |

Rendered from `src/components/mokobara/MokobaraShowcase.jsx`.

## Shared

- `PlaceholderFrame({ label, mode, shape })`
- `ReferenceLabel({ index, reference, thesis })`

## Inventory verification

- [x] Every item is visible on `/`.
- [x] Imagery is placeholder-only.
- [x] Copy is original/paraphrased.
- [x] No backend cart or payment logic is included.
