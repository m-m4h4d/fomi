# Build Brief: Fomi AI Content Generation Page (Next.js)

## Context

I'm completing a frontend technical assessment for **Tarum**, a startup building **Fomi**, an AI-powered image/video generation platform (similar in spirit to Midjourney, Krea, or Higgsfield). I need you to build a fully responsive, production-quality Next.js web page that replicates the attached design mockup (`fomi-design-mockup.png`) and meets every requirement below. Treat this as a real deliverable: clean architecture, reusable components, and polish matter as much as functional correctness.

Reference inspiration (do not copy, just use for UX patterns if something in the mockup is ambiguous): higgsfield.ai/generate, krea.ai/image, openart.ai, magnific.com.

## Tech Stack (non-negotiable)

- **Framework:** Next.js (latest stable, App Router)
- **Language:** JavaScript (no TypeScript)
- **Styling:** Tailwind CSS + CSS Modules (use Tailwind for utility/layout work, CSS Modules for any component needing scoped custom styles — e.g. gradients, custom shadows, or anything Tailwind can't express cleanly)
- **Images:** `next/image` everywhere — no raw `<img>` tags
- **Version control:** Git, with meaningful, conventional commit messages made incrementally as you build (not one giant final commit)

## Page Layout — Build to Match the Mockup Exactly

The mockup shows an AI image generation studio with these regions. Implement each as its own component:

1. **Top navbar** — Fomi "F" logo (top-left), a centered pill-shaped tab/segment control (appears to indicate an active section), a row of icon nav items (home, image, video, magic-wand/edit, folder), and on the right: a "Gallery" button, a "Support" button, a dark-mode toggle icon, and a circular user avatar.

2. **History strip** (top, below navbar) — a horizontally scrollable row of thumbnail images representing past generations, with a "History / View All" label/card pinned at the left edge before the scrollable thumbnails.

3. **Left control panel** (sticky/fixed width sidebar below the history strip) —
   - An "Image / Video" segmented toggle
   - A large textarea: "Describe your imaginations to be converted to piece of art..."
   - A primary "Generate" button (pill-shaped, accent color, with a sparkle icon)
   - A row of dropdowns/selects: number of images, aspect ratio (e.g. "1:1"), and "Model: Name"
   - An "Advance" collapsible dropdown section
   - A "Styles" collapsible dropdown section
   - This entire panel sits on a soft peach/pink background card, distinct from the page background

4. **Center prompt/result detail panel** — a card showing the full text prompt that was used for the currently highlighted result (e.g. a long descriptive paragraph), with a small "Model" tag/badge in the bottom-right corner of the card.

5. **Right results grid** — a responsive grid (4 columns on desktop) of generated portrait images, displayed as tall image cards with rounded corners.

Match spacing, corner radii, font weights, and the warm neutral/peach color palette (off-white background, soft peach/cream panel, coral/salmon accent for the primary button and active states, dark near-black text) as closely as possible from the reference image.

## Component Architecture

Break this into reusable components, at minimum:
- `Navbar`
- `HistoryStrip` + `HistoryThumbnail`
- `GenerationPanel` (left sidebar) containing `ModeToggle`, `PromptInput`, `GenerateButton`, `OptionSelect` (reusable for # images / aspect ratio / model), `CollapsibleSection` (reusable for Advance + Styles)
- `PromptDetailCard` (center panel)
- `ResultsGrid` + `ResultCard`
- Shared UI primitives as needed (`Button`, `Dropdown`, `Badge`)

Use props to make components data-driven rather than hardcoding content inline, so the grid/history/prompt content all flow from the dummy API below.

## Dummy API (Required)

Build a mock backend using Next.js Route Handlers (`app/api/.../route.js`):

- `GET /api/generations` — returns a JSON array of mock generation results (mix of images and videos), each with at least: `id`, `type` ("image" | "video"), `url`, `thumbnailUrl`, `prompt`, `model`, `createdAt`. Use royalty-free placeholder image URLs (e.g. Picsum/Unsplash source URLs) or local placeholder assets you generate/include in `/public`.
- `POST /api/generate` — accepts a JSON body `{ prompt, type, numImages, aspectRatio, model }`, simulates a short delay (`setTimeout`/artificial latency), and returns a fake newly "generated" set of results in the same shape as above.
- Use this API to populate the History strip and Results grid on page load (via a fetch in a server component or `useEffect`), and wire the "Generate" button to call `POST /api/generate` and render a loading state, then display new results.

## Responsiveness (Required — test all of these)

- **Mobile (320px+):** stack vertically — navbar collapses to essentials (hamburger/icon row), history strip remains horizontally scrollable, generation panel becomes a full-width block (consider making it collapsible/bottom-sheet style or simply stacked above the results), results grid drops to 1–2 columns.
- **Tablet:** results grid at 2–3 columns, generation panel can move to a top block or narrow sidebar.
- **Desktop:** matches the mockup layout (sidebar + grid).
- **Large screens:** grid expands proportionally, no awkward excess whitespace, content has a sensible `max-width` container.
- **No horizontal scrolling** at any breakpoint (except the intentionally horizontally-scrollable history strip).
- Use a mobile-first Tailwind approach (`sm:`, `md:`, `lg:`, `xl:` breakpoints).

## Code Quality Expectations

- Clean, readable, consistently named files/components (PascalCase components, camelCase functions/variables, kebab-case file names if you prefer that convention — just be consistent)
- No dead code, unused imports, or leftover boilerplate from `create-next-app`
- Componentize anything reused more than once (selects, buttons, cards)
- Add a `.eslintrc` / use Next.js's default lint config and make sure `next lint` passes clean

## Performance & Accessibility

- All images via `next/image` with appropriate `width`/`height`/`fill` and `alt` text (meaningful alt text, not "image1.png")
- Use semantic HTML (`<nav>`, `<main>`, `<aside>`, `<section>`, `<button>` not `<div onClick>`)
- Form elements (textarea, selects) need associated `<label>`s (visually hidden if the design doesn't show one)
- Maintain readable color contrast, especially text on the peach panel and the coral button
- Avoid unnecessary client-side state/re-renders — keep server components where no interactivity is needed, mark interactive pieces `"use client"` deliberately

## Deliverables I Need From You

1. A working Next.js project in this repo, runnable locally with `npm install && npm run dev`
2. A clear `README.md` explaining: project structure, how to run it, what the dummy API does, and any design decisions/assumptions you made where the mockup was ambiguous
3. Confirm in the README (or a `RESPONSIVE_TESTING.md`) that you tested at 320px, tablet (~768px), desktop (~1280px), and large screen (~1536px+) widths — describe what you checked
4. Git history with incremental, meaningful commits (init → layout → components → API → responsiveness → polish, roughly)

## Stretch Goals (only after everything above is solid)

- Dark mode (the mockup has a moon icon in the navbar — wire it up with a real theme toggle, e.g. Tailwind `dark:` classes + a context or `next-themes`)
- Smooth transitions/animations on hover states, the Generate loading state, and image grid entrance
- Pixel-perfect spacing match to the reference image

## How I Want You to Work

1. First, scaffold the Next.js app and folder structure, and show me the plan/file tree before writing all component code.
2. Build layout/navigation shell first, then the left generation panel, then the center prompt card, then the results grid, then the history strip.
3. Wire up the dummy API routes and connect them to the UI.
4. Then do a responsiveness pass across all breakpoints.
5. Finally, write the README and do a cleanup/lint pass.
6. Commit at each major milestone with a clear message.

Let me know if anything in the mockup is ambiguous rather than guessing silently — flag it and tell me the assumption you're going with.
