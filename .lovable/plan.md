## Changes

### Header / Logo sizing
- `src/components/site/Logo.tsx`: bump `md` from `h-12` to `h-[4.5rem]` (~1.5×). Update `lg`/`xl` proportionally.
- `src/components/site/SiteHeader.tsx`:
  - Make the "Book a Project" button match the nav pill height (`h-11`, rounded-full, same vertical padding as nav pill = `py-1.5` container + link `py-1.5`).
  - Keep logo at current size prop but it will inherit the new larger baseline.
- `src/components/site/SiteFooter.tsx`: footer logo also grows proportionally via Logo scale.

### Hero (`src/routes/index.tsx`)
- Increase headline sizes one step: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` → `text-5xl sm:text-6xl md:text-7xl lg:text-8xl`.
- Replace hero background: generate a new premium graphic-designer style image (abstract editorial composition, green/charcoal, geometric shapes + subtle grid, no photo) saved to `src/assets/hero-bg.jpg` via imagegen.

### "What we do" section
- Remove the subtitle "One focus, done exceptionally well."

### "Recent work" section
- Remove eyebrow "Recent work".
- Rename heading "Selected projects" → "Recent Projects".

### New About section on Home (after hero)
Inspired by uploaded reference (image 2): dark charcoal card with rounded avatar tile, name + role, "Available for projects" dot indicator, intro paragraph, and 3 stat cards (3+ Years Building, 20+ Projects Shipped, 100% Client Satisfaction).
- Upload user photo (`user-uploads://WhatsApp_Image_2025-07-03_at_15.47.59.jpeg`) via `lovable-assets` → `src/assets/lihle-portrait.jpg.asset.json`.
- Use portrait in the avatar tile (replaces the tea/coffee icon in the inspo).
- Keep palette on-brand: charcoal surface, primary green accents for stat icons and dot.

### Remove About page
- Delete `src/routes/about.tsx` (route auto-regenerates).
- Remove `/about` link from `SiteHeader.tsx` nav array and `SiteFooter.tsx` Explore list.
- Remove `/about` entry from `src/routes/sitemap[.]xml.ts` if present.

### Reduce top padding on inner pages
- `src/routes/services.tsx`, `src/routes/portfolio.tsx`, `src/routes/contact.tsx`, `src/routes/book.tsx`: reduce the first section's top padding (e.g. `pt-32` → `pt-24`, or hero-style header padding trimmed) so content sits close under the fixed navbar. `SiteLayout` already adds `pt-20` for non-overlay pages — trim page-level top padding to `pt-4`/`pt-6`.

### SEO
- Update root `__root.tsx` nav-related structured data if it references About.
- Update sitemap to drop `/about`.

## Not changing
- Colors, fonts, routing framework, other page content untouched.
