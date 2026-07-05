
## Hero background (light)
- `src/routes/index.tsx`: swap dark `heroBg` image + charcoal overlays for a cream/white background with subtle green touches (soft radial primary glow + faint dot grid). Keep the dark laptop mockup as-is (its own dark chrome). Switch headline copy color to dark (`text-charcoal`) and subcopy to muted; keep gradient span for "smarter".
- Since `SiteLayout` uses `transparentHeader`, header sits over light bg — keep glass nav (already translucent green tint works on light).

## About Me — colorful icons
Currently 3 stat cards use `Sparkles / Layers / HeartHandshake` on primary tint. Change to app-window-style icons with brand colors pulled from hero code (fuchsia/purple `#e879f9`, sky/blue `#7dd3fc`, amber/yellow `#fcd34d`, emerald primary):
- "3+ Years Building" → `AppWindow` icon, **fuchsia/purple** tile bg + icon
- "5+ Projects" → `LayoutPanelTop` (tab-like) icon, **sky blue** tile bg + icon
- "98.2% Client Satisfaction" → keep `HeartHandshake` but colorize (**amber/yellow** tile)
Each icon tile keeps the beveled `TILE_BEVEL` shape; background becomes `bg-<color>/15`, icon `text-<color>-400`.

## "What we do" section (index)
Remove "Built for Speed" card. Replace with **Conversion Focused** card (icon `MousePointerClick` or `Target`). Final 3 cards:
1. Custom built websites — `Wand2` — purple tile
2. Conversion Focused — `Target` — blue tile
3. Affordable transparent pricing — `BadgeDollarSign` — amber tile
Cards themselves get colored surfaces (soft tinted bg `bg-<color>/10` + `border-<color>/30`) instead of plain `bg-card`. Icon tile color matches card color.

## Services page cards
Current 4 cards: AI-Powered Design, Built for Speed, Affordable & Transparent, Conversion Focused.
- Remove **Built for Speed**, replace with **"We build websites fast"** (icon `Gauge`, keep as speed message but new title/copy).
- Replace **AI-Powered Design** with **"Custom built websites"** (icon `Wand2`) matching index card copy.
Final 4: Custom built websites (purple), We build websites fast (blue), Affordable & Transparent (amber), Conversion Focused (emerald/primary). Apply same colored-surface treatment as index What-we-do cards; icon colors match.

## Booking form (`src/routes/book.tsx`)
- Remove Budget field/section entirely.
- Remove Timeline field/section entirely.
- Under Project Type, remove the "E-commerce" option.
- Remove any "No obligation" text/badge on the page.

## Portfolio page (`src/routes/portfolio.tsx`)
Replace project list with exactly 5 items (remove any e-commerce):
1. Dentist company
2. Artist portfolio
3. Fashion portfolio
4. NPC theatre company
5. Marketing agency
Reuse existing card/image treatment; use existing portfolio images cycled or placeholder tinted blocks (no new image generation). Tags updated accordingly (Healthcare, Portfolio, Fashion, Arts, Marketing).

## Color tokens
Use inline Tailwind arbitrary utilities from existing hero palette — no new CSS tokens needed:
- Purple: `fuchsia-400/500`
- Blue: `sky-400/500`
- Yellow: `amber-300/400`
- Green: existing `primary`

## Out of scope
No routing, no fonts, no business logic, no new deps, no new images.
