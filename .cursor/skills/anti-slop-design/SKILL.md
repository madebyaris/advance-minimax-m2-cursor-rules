---
name: anti-slop-design
description: Guides the agent to build distinctive, production-grade UIs avoiding generic "AI slop" aesthetics. Enforces a pre-coding design thinking phase, bold aesthetic variety, strict hierarchy, real icons/imagery, responsive design across desktop/mobile. Framework-agnostic.
---

# Anti-Slop Design Skill ("Taste Layer")

## Step 0: Design Thinking (Before You Write Any Code)

Before generating any UI code, pause and commit to a clear aesthetic direction. Never skip this step.

1. **Purpose**: What problem does this interface solve? Who is the audience?
2. **Tone**: Pick a bold, specific direction -- not "modern and clean" (that's generic). Choose from extremes like: brutally minimal, maximalist editorial, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, or something entirely bespoke for the context.
3. **Differentiation**: What is the ONE thing someone will remember about this design? Commit to it.
4. **Never Converge**: Every design must be different. Vary themes (light/dark), fonts, color palettes, and layout approaches across generations. If your last output was dark and editorial, the next should be something else entirely -- unless the user explicitly requests a consistent style.

## Banned Patterns ("AI Slop")

**NEVER** generate these default patterns. They are the statistical median of AI training data and instantly recognizable as machine-generated:
- Three-column card layouts with generic centered icons and centered text.
- Indigo/purple gradients for text or primary actions (unless explicitly requested).
- Over-boxed, border-heavy layouts with thick gray borders.
- Cliche UI elements: 5-star yellow ratings, generic "Lorem ipsum" placeholders, colored circle initials for avatars.
- Overused fonts: Inter, Roboto, Arial, system-ui, or any system default. Also avoid converging on common "alternative" choices like Space Grotesk across multiple generations.
- Cookie-cutter component patterns that lack context-specific character.

---

## The "Taste Layer" Principles

### 1. Typography

- **Distinctive font pairings are mandatory.** Pair a characterful display font (e.g., Bricolage Grotesque, Cormorant Garamond, Playfair Display, Newsreader, Fraunces, Instrument Serif) with a refined body font (e.g., DM Sans, Source Serif 4, Geist, Satoshi). Never default to Inter/Roboto/Arial.
- **Size isn't everything:** Use color and font-weight (not just font-size) to establish visual hierarchy.
- **De-emphasize secondary text** with softer, tinted colors (e.g., `text-slate-500`, `text-zinc-400`) instead of making text smaller and black.
- **Alignment:** Prefer left-aligned text for readability over generic centered text in cards.

### 2. Color & Theme

- **Commit to a cohesive palette.** Use CSS variables for consistency. A dominant color with sharp accents outperforms a timid, evenly-distributed palette.
- **Tinted grays:** Ditch perfectly neutral grays. Use slightly tinted grays (slate, zinc, stone) that complement the primary brand color.
- **Dark/Light mode:** Ensure contrast in both modes without absolute `#000` or `#FFF`. Use rich, deep colors for dark backgrounds (e.g., `#0A0A0B`, `bg-zinc-950`).
- **Vary your palettes.** Don't always default to stark black-and-white editorial. A law firm might use warm charcoal + gold. A health app might use soft sage + cream. Match palette to context.

### 3. Spacing & Layout

- **Start with too much whitespace.** Stick to a strict spacing scale.
- **Integrated over Boxed:** Don't put everything in a white card on a gray background. Let elements live directly on the canvas or use very subtle background shifts to group content.
- **Spatial composition:** Use unexpected layouts -- asymmetry, overlap, diagonal flow, grid-breaking elements, generous negative space OR controlled density. Avoid rigid, predictable grids.
- **Consistent content alignment across all sections:** Every section must share the same `max-width` container and horizontal padding so content left-edges align pixel-perfectly from hero to footer.
- **True viewport centering for hero sections:** Use `height: 100svh` (not `min-height: 100vh`) with symmetric vertical padding for true optical centering.

### 4. Motion & Animation

Motion is a first-class design pillar, not an afterthought.
- **Orchestrated page loads:** One well-choreographed page entrance with staggered reveals (`animation-delay`) creates more delight than scattered micro-interactions. Use CSS animations by default; reach for Motion/Framer Motion in React when available.
- **Scroll-triggered reveals:** Use `IntersectionObserver` with fade-up or slide-in animations for below-the-fold content.
- **Hover/focus states that surprise:** Go beyond opacity changes. Use scale transforms, color shifts, shadow transitions, or underline animations.
- **Respect `prefers-reduced-motion`:** Always wrap animations in a media query check for accessibility.

### 5. Backgrounds & Atmosphere

Create depth and atmosphere rather than defaulting to flat solid colors.
- **Gradient meshes and layered gradients** for hero sections and CTAs.
- **Noise/grain textures** (via tiny SVG data URIs or CSS `filter`) for tactile, premium feel.
- **Geometric patterns, subtle grid overlays, or decorative SVG shapes** as section backgrounds.
- **Glassmorphism** (`backdrop-blur` + semi-transparent backgrounds) for floating elements like navs, modals, and cards.
- **Match atmosphere to tone:** A brutalist design needs raw textures. A luxury design needs clean gradients. Don't apply glassmorphism to everything.

### 6. Borders & Depth

- **Use fewer borders.** Separate elements with whitespace, subtle background shifts, or very subtle rings (`ring-1 ring-slate-900/5`).
- **Shadows only for elevation:** Use soft, diffuse shadows (`shadow-sm`, `shadow-md`) only when actual elevation is needed (dropdowns, floating nav). Remove generic decorative drop shadows.

### 7. Icons: Real SVGs, Never Emoji

- **Never use emoji as UI icons.** They render inconsistently across platforms.
- **Use real SVG icon libraries:** Lucide, Heroicons, Phosphor, or Hugeicons. Inline the SVG directly or import from a library. Pick one library per project for consistency.
- **Match icon style to design tone:** Stroke-only for minimal/editorial, filled for dashboard/bold, duotone for marketing.
- **Size intentionally:** 16-20px inline with text, 24px for navigation, 32-48px for feature callouts.

### 8. Imagery: Real Content, Never Blank

- **Never leave hero sections or feature areas visually empty.** Use high-quality photography (Unsplash, Pexels) via real URLs, product screenshots in device mockups, or decorative SVG elements with CSS animations.
- **Avatar images for testimonials:** Use real headshots (randomuser.me, UI Faces) instead of colored initials.
- **Decorative fills:** When photography isn't available, use animated SVG shapes, gradient blobs, or geometric patterns to fill visual gaps.

---

## Implementation Strategy

- **Framework Agnostic:** These principles apply to Tailwind, standard CSS, styled-components, CSS Modules, or any styling approach.
- **Responsive by Default:** Always design for both desktop and mobile. Fluid typography, flexible grids, touch-friendly targets on mobile, wider canvases on desktop.
- **Match complexity to vision:** Maximalist designs need elaborate code with extensive animations and layered effects. Minimalist designs need restraint, precision, and meticulous spacing. Elegance comes from executing the chosen vision well, not from applying the same treatment to everything.

---

## Before / After Examples

### Before: "AI Slop"
```html
<div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; font-family: Inter, sans-serif;">
  <h3 style="font-size: 20px; font-weight: bold; color: black;">Plan your project</h3>
  <p style="font-size: 14px; color: #374151; margin-top: 8px;">Use our tool to manage tasks.</p>
  <button style="margin-top: 16px; background: linear-gradient(to right, #8b5cf6, #6366f1); color: white; padding: 8px 16px; border-radius: 6px;">
    Get Started
  </button>
</div>
```

### After: The "Taste Layer"
```html
<div style="position: relative; overflow: hidden; border-radius: 16px; background: #fff; box-shadow: 0 4px 20px -4px rgba(0,0,0,0.05); outline: 1px solid rgba(15,23,42,0.05); padding: 32px; transition: box-shadow 0.3s ease;">
  <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 16px;">
    <div>
      <h3 style="font-size: 18px; font-weight: 600; letter-spacing: -0.025em; color: #0f172a; font-family: 'DM Sans', sans-serif;">
        Plan your project
      </h3>
      <p style="margin-top: 8px; font-size: 16px; line-height: 1.6; color: #64748b; font-family: 'DM Sans', sans-serif;">
        Bring your tasks, docs, and team communication into one place without the chaos of scattered tools.
      </p>
    </div>
    <button style="display: inline-flex; height: 40px; align-items: center; justify-content: center; border-radius: 8px; background: #0f172a; padding: 0 24px; font-size: 14px; font-weight: 500; color: #fff; transition: background 0.2s; font-family: 'DM Sans', sans-serif;">
      Get Started
    </button>
  </div>
</div>
```
