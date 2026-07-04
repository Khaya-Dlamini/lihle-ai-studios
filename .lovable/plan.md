## Hero — laptop mockup with live "code" and CTA buttons

Redesign `src/routes/index.tsx` hero into a two-column composition inspired by the reference:

- **Left / top**: existing "Modern websites built smarter with AI." headline + subcopy, moved to sit near the center-left.
- **Center-bottom**: a large stylized laptop illustration built in pure CSS/SVG (no image) tilted slightly. Screen shows a fake code editor:
  - Faux window chrome (3 dots + tab labeled `hero.tsx`)
  - Line numbers + syntax-highlighted JSX snippet (green keywords, muted comments, orange strings) written in monospace
  - Two of the "code lines" are actually real `<Link>` components styled to look like inline JSX/function calls but rendered as bright, high-contrast CTA pills — `<BookAProject />` → `/book` and `<ViewMyWork />` → `/portfolio`. They sit inside the code block so they read as code but pop with primary green background + subtle glow so they call to action.
- Keep hero background but darken slightly so laptop stands out. Remove the separate BevelLink button row (the CTAs now live on the laptop).
- Mobile: laptop scales down and sits below the headline; CTAs remain tappable.

## Navbar — single glass shell around nav + book button

`src/components/site/SiteHeader.tsx`:
- Wrap the nav pill AND the "Book a Project" button inside one rounded-full glass container (`border backdrop-blur-xl` shell). Logo and mobile menu icon stay outside.
- Book button stays green (`bg-primary`), rounded-full, `h-9`, sitting flush inside the glass shell on the right with a small gap from the nav links.
- Navbar remains `fixed` (already is) — no behavior change.

## Green cards — graphic-designer treatment

Replace the flat `surface-charcoal` look on the About Me card and the "Ready to launch" CTA card (`src/routes/index.tsx`) with a layered composition:
- Charcoal base + subtle SVG grid overlay + soft primary radial glow in one corner + a diagonal primary accent stripe + faint noise
- Keep palette (charcoal + primary green); no new colors added.

## Card shapes — beveled cut-corners across the site

Reuse the hero `BevelLink` clip-path polygon as a shared card shape for:
- About Me stat cards (`src/routes/index.tsx`)
- "What we do" cards (`src/routes/index.tsx`)
- "Recent Projects" article cards (`src/routes/index.tsx`)
- Service cards on `src/routes/services.tsx`

Each card gets the cut-corner clip-path, a thin primary hairline border, and a matching cut-corner icon tile.

## Icon refresh (lucide-react)

- About Me stats: `Award` → `Sparkles`, `Rocket` → `Layers`, `Users` → `HeartHandshake`
- What We Do: `Bot` → `Wand2`, `Zap` → `Gauge`, `Search` → `BadgeDollarSign`
- Services page: swap current icons for more distinctive lucide equivalents (e.g. `Palette`, `Code2`, `LineChart`, `Rocket`, `Search`, `Sparkles` depending on which services are listed)

## Footer

`src/components/site/SiteFooter.tsx`: remove the "Built with React, TypeScript & AI." line. Keep the copyright line only.

## Padding tightening

- About Me section: `py-14 md:py-20` → `pt-14 pb-6 md:pt-16 md:pb-8`
- "What we do" section: reduce bottom padding so it flows into Recent Projects with less blank space (`pb-6` → `pb-2 md:pb-4`)

## Technical notes

- Laptop + code editor is pure JSX/Tailwind/SVG — no new dependencies, no images. CTAs inside the code block are real `<Link>` components from `@tanstack/react-router`, styled to look like syntax-highlighted JSX tokens but with primary background + glow so they read as buttons.
- Shared beveled clip-path lives as an inline class string reused across the four card locations; no util file changes.
- Font/color tokens untouched.

## Not changing
- Fonts, color palette, routes, page copy (aside from footer line removal), or business logic.
