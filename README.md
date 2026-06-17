# Fomi AI Content Generation Page

A Next.js application replicating the Fomi AI Content Generation Studio mockup. Tarum Frontend developer technical assessment. Responsive AI content generation webpage for Fomi.art

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

This project uses the Next.js App Router (JavaScript) and Tailwind CSS with standard component organization:

- `app/` - Next.js routing, layouts, and pages.
- `app/api/generations/route.js` - Mock GET API returning static initial generations.
- `app/api/generate/route.js` - Mock POST API returning newly generated content.
- `components/` - UI components split by feature:
  - `layout/` - Shell components (`Navbar.jsx`).
  - `history/` - Top sliding thumbnail strip (`HistoryStrip.jsx`, `HistoryThumbnail.jsx`).
  - `control-panel/` - Left configuration sidebar (`GenerationPanel.jsx`, etc.).
  - `results/` - Right side display (`PromptDetailCard.jsx`, `ResultsGrid.jsx`, `ResultCard.jsx`).
  - `ui/` - Reusable primitives (`Button.jsx`, `Badge.jsx`).

## Mock API

- **GET `/api/generations`**: Returns an initial set of mock image/video generations to populate the studio on load.
- **POST `/api/generate`**: Simulates a 2-second processing delay and returns a new set of mock generations matching the requested `numImages` and type. The returned objects are prepended to the client-side state.

## Design Decisions & Assumptions

1. **Icons**: I used `lucide-react` for clean, scalable SVG icons that match the mockup's line-art style (e.g., spark, folder, image, video).
2. **Avatars/Placeholders**: Used Unsplash Source for high-quality, royalty-free placeholder generation images.
3. **Data Fetching**: The initial data load uses server-side data from the mock route to avoid a client-side flash of empty content. Subsequent interactions use client-side fetches.
4. **CSS Grid vs Flexbox**: I opted for a hybrid layout. The main shell is a Flex layout to allow the sidebar to stick cleanly, while the results grid uses CSS Grid for responsive columns.
5. **Typescript**: The Next.js boilerplate generated TypeScript by default, which I cleaned up and reverted to pure JavaScript `.jsx` to strictly follow the prompt requirements.

## Responsiveness Testing

I have explicitly styled and verified the layout across the following breakpoints using Tailwind utilities and Chrome DevTools:

- **Mobile (320px - 640px)**
  - The Navbar collapses non-essential buttons and logo text.
  - The Control Panel (sidebar) stacks on top of the Results Grid (`flex-col`).
  - The Results Grid collapses to a single column (`grid-cols-1`).
  - The History strip is horizontally scrollable with hidden scrollbars for clean swiping.
- **Tablet (~768px)**
  - The Results Grid expands to 2 columns (`md:grid-cols-3`).
  - Navigation elements re-appear appropriately.
- **Desktop (~1280px)**
  - Layout transitions to the core design: Left sidebar (`w-[340px]`) alongside the main content area (`lg:flex-row`).
  - Results grid adjusts to 3 columns.
- **Large Screens (~1536px+)**
  - Content container is constrained (`max-w-[1600px]`) and centered to avoid awkward stretching.
  - Results Grid expands to 4 columns (`xl:grid-cols-4`).
