# DESIGN.md — Fomi (Tarum) AI Generation Studio

## Brief for Google Stitch

This is a design generation brief for a 48-hour UI/UX challenge from Tarum, the startup behind **Fomi**, an AI image/video generation platform. The deliverable is a Figma-ready, high-fidelity, responsive UI. Use this document to drive Stitch — either paste the whole thing as context, or use the individual "Screen Prompts" below one at a time if Stitch performs better with focused single-screen prompts.

---

## 1. Product Context

Fomi is a premium AI creative platform for text-to-image, text-to-video, image-to-video, editing, style transfer, and upscaling. Users range from casual creators to professional designers, marketers, filmmakers, and agencies. Most arrive with a creative goal, not a technical one — they want to type an idea, see it become art fast, and explore variations without needing prompt-engineering skill. Competitors to study in spirit (not copy): Higgsfield, Krea, Leonardo.ai, Magnific/Freepik AI.

The product should feel like a hybrid of a creative studio, an AI playground, and a professional content tool — premium, fast, inspiring, and never intimidating, even though it secretly contains a lot of advanced power-user controls.

## 2. Design Direction

- **Aesthetic:** Premium, modern, dark-mode-dominant interface (a deep near-black or charcoal base, not pure #000) that reduces eye strain and makes generated imagery the visual hero of every screen. Avoid generic SaaS-dashboard blue. Lean into a confident, slightly futuristic creative-tool feel — think "AI atelier," not "enterprise admin panel."
- **Accent color:** One bold, electric accent (acid green, hot magenta, or vivid coral all fit the genre — pick one and use it sparingly and consistently for primary actions, active states, and focus rings) against the dark neutral base.
- **Typography:** A clean modern sans-serif (e.g., Inter, Geist, or similar geometric grotesk) with a clear type scale — large confident display type for the hero headline, a restrained mid-scale for UI labels, and a smaller monospace or technical-feeling font optionally used for numeric parameter values (seed, guidance scale) to signal precision/power-user territory.
- **Spacing:** Strict spacing scale (e.g., 4/8px base grid) — generous padding around the canvas/viewport so generated content always feels like the star, tighter, denser spacing inside control panels and parameter rows.
- **Imagery:** Generated image/video previews should always appear in rounded-corner cards with subtle elevation (soft shadow or 1px hairline border on dark backgrounds, not heavy drop shadows).

## 3. Screens to Generate

### Screen A — Hero / Landing Page *(Bonus, worth up to 35 pts — prioritize this for maximum score)*

**Goal:** Instantly communicate creative possibility, showcase exceptional output quality, and push the visitor toward starting a generation immediately.

**Stitch prompt:**
> Design a dark-mode, premium landing page hero section for "Fomi," an AI image and video generation platform. Full-bleed dark background. Large, bold headline communicating "turn imagination into stunning visuals instantly" (rewrite this into a punchier 4-8 word headline). Subheadline describing speed and quality in one short sentence. A prominent prompt input field directly in the hero ("Describe a scene, character, or style...") with a glowing accent-colored "Generate" button beside or below it, so visitors can start creating with zero clicks of friction. Below or beside the headline, an asymmetric collage/grid of 4-6 high-quality AI-generated image and video thumbnails (varied aspect ratios — portrait, landscape, square) with subtle hover lift animation, representing the range of styles the platform can produce. Top navigation bar: logo on the left, links for Image / Video / Templates / Pricing in the center, "Login" and a high-contrast "Start Creating" CTA button on the right. Include a thin marquee or logo strip beneath the fold suggesting trust/usage (e.g., "Used by 50,000+ creators" style social proof). Overall mood: cinematic, confident, futuristic, premium — not corporate.

### Screen B — Image Generation Workspace *(Core deliverable, worth 75 of the 100 base pts — this is the screen most heavily scored)*

**Goal:** One unified screen — prompt input, advanced controls tucked into progressive-disclosure side panels, a large central canvas showing the active/result image, a visible loading/queue state, and a history gallery that auto-saves every generation.

**Stitch prompt:**
> Design a dark-mode, high-fidelity AI image generation workspace for "Fomi." Layout: a slim top navigation bar (logo, Image/Video mode toggle, account avatar, theme toggle). Below it, a wide horizontal history/asset gallery strip of small rounded thumbnail cards representing past generations, horizontally scrollable, with a "History" label pinned at the left edge. Main content area below splits into three zones: (1) LEFT — a fixed-width prompt console panel on a slightly elevated dark surface containing a large multi-line prompt textarea with placeholder "Describe your imagination...", a prominent pill-shaped accent-colored "Generate" button with a sparkle/lightning icon, and a row of compact dropdown chips for the most-used settings (aspect ratio, number of outputs, model name) sitting directly under the textarea for fast access. Below those, two collapsible "Advanced" and "Styles" accordion sections (collapsed by default) that expand to reveal deeper controls: negative prompt textarea, guidance scale slider, seed number input with a "randomize" dice icon, and a scrollable grid of style preset thumbnails (e.g. cinematic, anime, photoreal, 3D render) shown as small square cards with labels. (2) CENTER — a large canvas/viewport area, vertically centered, displaying the active generated image at a large prominent size with rounded corners and a soft border; below it a slim toolbar with icon buttons for download, upscale, edit, share, and regenerate variation. Include a visual "generating" state mock: a shimmering skeleton/placeholder card with a circular progress indicator and the text "Creating your vision..." to represent the loading/queue state. (3) RIGHT or below the canvas — a grid of 4 generated variation thumbnails from the same prompt, clickable to swap into the main canvas, with a small badge showing which model/style was used. Maintain strong visual hierarchy: the canvas and generated imagery should dominate visually; control panels should feel calm, organized, and never cluttered, using progressive disclosure for anything not essential to a first-time user.

## 4. Component-Level Detail (reference while refining Stitch output)

- **Prompt console:** textarea expands slightly on focus; character count optional; "Enhance prompt" AI-assist icon button inline (ties to the "Prompt Enhancement and AI Assistance" core feature).
- **Parameter chips/dropdowns:** aspect ratio, # of images, and model selector should be one-tap visible (not hidden behind "Advanced") since they're used on nearly every generation. Negative prompt, guidance scale, and seed belong inside "Advanced" since they're power-user territory.
- **Style presets:** small thumbnail-driven grid, not a plain text dropdown — visual discovery matters more than text labels here per the brief's "easy discovery of styles, themes, templates" priority.
- **History gallery:** every completed generation auto-appends here; hovering a thumbnail should show a quick-action overlay (download / reuse prompt / delete).
- **Loading/queue state:** show this explicitly as one of the Stitch outputs — a shimmer/skeleton card with a progress ring and short reassuring copy, occupying the same slot the final image will appear in, so the layout doesn't jump.

## 5. Micro-Interaction States (write these up as an annotation/callout next to the relevant component in Figma — required for the Micro-Interaction Framework scoring criterion)

**Primary "Generate" button:**

- Default: solid accent fill, white/near-black label text for contrast, sparkle icon
- Hover: slight brightness increase + subtle scale-up (1.02x) + soft glow shadow in accent color
- Active/pressed: scale down slightly (0.98x), glow intensifies momentarily
- Focus (keyboard): visible accent-colored focus ring with sufficient offset for accessibility
- Disabled (empty prompt): reduced opacity (~40%), no hover/active response, cursor not-allowed
- Loading: label swaps to a spinner + "Generating..." text, button becomes non-interactive, subtle pulsing glow to signal active processing

**Parameter sliders (e.g. guidance scale):**

- Default: thin track, accent-colored fill up to current value, circular handle
- Hover: handle scales up slightly, tooltip appears showing exact numeric value
- Dragging/active: handle grows further, track fill animates live, value tooltip follows cursor
- Focus (keyboard): handle gets visible focus ring, arrow keys nudge value by fixed increments
- Disabled: track and handle desaturated/greyed, tooltip suppressed

## 6. Responsive Notes

Primary deliverable is desktop/web, but note in Figma how the workspace adapts at a tablet breakpoint: the left prompt console can collapse into a bottom sheet or slide-over drawer triggered by a floating "Create" button, keeping the canvas as the dominant element on smaller viewports. Mention this adaptation briefly in frames or as an annotation even if you don't fully design every breakpoint.

## 7. Suggested Workflow in Stitch

1. Generate Screen A (Hero) first since it's the highest-value bonus item (35 pts) and a strong portfolio piece.
2. Generate Screen B (Workspace) next — this is the core 75-point screen, so iterate on it the most: regenerate/refine the canvas-to-panel ratio, color contrast, and the advanced-controls accordion until it feels uncluttered.
3. Once both screens look right, export/sync to Figma, then manually add the micro-interaction annotations from Section 5 as callout notes or a small interaction-states frame, since Stitch won't natively express hover/focus/disabled states — those need to be shown as separate static variants or annotated callouts in Figma.
4. Set Figma sharing permissions to "Anyone with the link can view or comment" before submitting.

## 8. UX & Aesthetic Explainer (separate written deliverable, max 300 words — not for Stitch, write this yourself after the design is final)

Use this outline to stay under the word limit:

- 1 sentence: overall aesthetic direction and why it fits a creative AI tool (premium dark mode reduces eye strain, makes generated content the visual hero)
- 2-3 sentences: typographic scale reasoning (display type for inspiration/hero, restrained UI type for controls, optional monospace for numeric precision values)
- 2-3 sentences: spatial/grid decisions (base spacing unit, canvas-to-panel space ratio, why progressive disclosure was used for advanced parameters)
- 2-3 sentences: how the color/layout system resolves the prompt-to-creation workflow specifically (one-tap access to common settings, visible loading state preventing perceived dead time, history gallery removing fear of losing work)
