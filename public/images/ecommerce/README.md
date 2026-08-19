# Ecommerce case study images

This folder is a placeholder structure for real product/brand photography once
it exists. The current ecommerce case studies (Atelier Casa, Noiré Skin,
Archive / 01, Omni / Commerce OS) render entirely with CSS-drawn graphics —
`.p-swatch`, `.social-tile`, `.cc-visual` etc. in `app/globals.css` — matching
how the rest of the existing site (including the construction case studies)
has no photography either.

When real imagery is ready, drop files into the relevant brand folder, e.g.:

```
public/images/ecommerce/atelier-casa/arc-table-lamp.jpg
public/images/ecommerce/atelier-casa/homepage-hero.jpg
```

Then swap the relevant CSS placeholder block for a Next.js `<Image />` in:

- `components/ProductCard.tsx` — replace `.p-swatch` div
- `components/SocialGrid.tsx` — replace `.social-tile` div
- `components/CommerceCaseStudyCard.tsx` — replace `.cc-visual` div

No code changes are needed anywhere else — each component only renders a
single placeholder block per item, so this is a contained, low-risk swap.
