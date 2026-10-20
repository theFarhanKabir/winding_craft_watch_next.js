# Winding Craft frontend

Frontend-only storefront demo built with Next.js 16.4, React and TypeScript (App Router).

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Run `npm run lint`, `npx tsc --noEmit` and `npm run build` for checks.

## Demo content and owner setup

- Sample product data is centralized in `lib/products.ts`. Product images are distinct Unsplash placeholders; replace them with approved product photos and confirm each sample specification, price, condition and stock status before launch.
- Editable but unconfirmed commercial values and contact placeholders are in `lib/config.ts`.
- Homepage feedback is intentionally a placeholder because no approved customer messages were supplied.
- Oswald, Crimson Pro and DM Sans use `next/font/google` with local fallbacks.
- Cart and comparison data stay in browser storage. Checkout and service/support forms simulate interaction without transmitting or retaining personal data.
- `lib/analytics.ts` defines an event interface and a no-op tracker. No analytics integration is active.
- No database, API, live payment service, courier integration or account system is included.
