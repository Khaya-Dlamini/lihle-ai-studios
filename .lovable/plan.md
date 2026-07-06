# Plan

## 1. Hero background — coffee shop

- Generate one image (`src/assets/hero-coffeeshop.jpg`) via `imagegen`: empty coffee shop interior, white walls, green plants, framed artwork on wall, angled toward a large window with warm morning sunlight streaming in, no people, cozy premium aesthetic. Upload via `lovable-assets`.
- In `src/routes/index.tsx` hero: replace current cream/dot-grid background with the coffee-shop image as a full-bleed background (`bg-cover bg-center`), keep the laptop mockup untouched, add a soft white/cream scrim so the headline stays readable. Headline stays dark (`text-charcoal`).

## 2. New green palette (from image 1 — deep forest + emerald mint)

- Edit `src/styles.css` tokens:
  - `--primary`: deep forest green (approx `oklch(0.32 0.06 155)` — matches the dark bg in image 1)
  - `--primary-glow` / accent green: bright emerald mint (approx `oklch(0.78 0.14 160)` — matches the "Book a Project" button pill)
  - `--primary-foreground`: dark forest so mint button text stays legible
- All existing `bg-primary`, `text-primary`, `shadow-glow`, `text-gradient` usages update automatically.

## 3. Real brand icons (footer + contact page)

- Add `simple-icons` via `bun add simple-icons` (SVG paths for real GitHub, Instagram, LinkedIn, X, WhatsApp, Gmail logos, etc.) OR inline the specific SVG paths in a small `BrandIcon` component under `src/components/site/BrandIcon.tsx`. Prefer inline SVG component — no dep, exact control.
- `src/components/site/SiteFooter.tsx`: swap lucide social icons for `BrandIcon` variants (filled real logos).
- `src/routes/contact.tsx`: same swap for the contact method icons (email, phone/whatsapp, socials) — filled brand marks, not outlines.

## 4. Full-width (edge-to-edge) sections

- **About Me** (`src/routes/index.tsx`): remove the `max-w-4xl` card wrapper + `graphic-card` bevel. Make it a full-width section with the same dark charcoal background it currently has, portrait + copy + 3 stats laid out inside `container-page` but the surface spans full viewport width.
- **Ready to launch** CTA (`src/routes/index.tsx`): remove `max-w-xl` card + bevel + glows. Make it a full-width band with plain solid `bg-primary` (new deep-forest green). Keep the beveled button (`TILE_BEVEL`) and copy "Ready to launch something exceptional?" + "Start Your Project"; adjust text colors to `text-primary-foreground` / cream on the green.

## 5. Editorial section labels (image 2 style: `— // what we do`)

Create small reusable `<SectionEyebrow>` component (or inline pattern) that renders: a short horizontal line, then `// label` in mono lowercase, matching image 2.
Apply to:

- `index.tsx`: "what we do", 
- `services.tsx`: "services"
- `portfolio.tsx`: "portfolio"
- `contact.tsx`: "contact"
- `book.tsx`: "book a project"
Use `font-mono`, muted green line + `text-primary` label.

## 6. Portfolio sync + image swaps

- Upload user-provided reference images (image 3 artist, image 4 pot-of-moving-arts, image 5 lumen dental) via `lovable-assets` from `/mnt/user-uploads/`. Save pointers under `src/assets/portfolio-artist.jpg.asset.json`, `src/assets/portfolio-pot-arts.jpg.asset.json`, `src/assets/portfolio-lumen.jpg.asset.json`.
- Generate 2 new images via `imagegen` for fashion portfolio and marketing agency (no user reference provided): `portfolio-fashion.jpg`, `portfolio-marketing.jpg`.
- `src/routes/portfolio.tsx` projects list (5 entries) becomes:
  1. Lumen Dental (Healthcare) — image 5
  2. Studio Mabaso (Artist Portfolio) — image 3
  3. Atelier Nine (Fashion Portfolio) — generated fashion image
  4. Pot of Moving Arts (NPC / Arts) — image 4
  5. Northline Marketing (Marketing Agency) — generated marketing image
- `src/routes/index.tsx` Recent Projects section: replace current 2 cards with the exact same 5 entries (or first 2 featured — see question below) so home matches portfolio. Currently only Artist Portfolio + Lumen Dental are explicitly requested for Recent, so plan is: Recent = [Artist Portfolio (image 3), Lumen Dental (image 5)].

## Out of scope

No routing changes, no new deps beyond optional icon lib (leaning inline SVG, no dep), no business logic changes, no font swap.

## Open question

Your message got cut off at "then". Anything else to add? Also: should the Recent Projects section on the home page show all 5 portfolio items, or keep just the 2 you called out (Artist Portfolio + Lumen Dental)? ((yes just 2 not 5 ))