 # KodNest Premium Build System

A premium SaaS design system for serious B2C products. Calm, intentional, coherent, and confident—built to avoid the noise of flashy trends and hackathon aesthetics.

---

## Design Philosophy

- **Calm**: No visual shouting. Limited color palette, restrained motion, clean surfaces.
- **Intentional**: Every element serves a purpose—no decorative clutter or random variations.
- **Coherent**: One visual language across pages and components. Same tokens, same patterns.
- **Confident**: Strong typography, clear hierarchy, and decisive use of accent color.

Not flashy. Not playful. No gradients, no glassmorphism, no neon, no animation noise.

---

## Color System

- **Canvas**
  - `Canvas / Base`: `#F7F6F3` (off‑white) — page background and large surfaces.

- **Inks (max 4 colors total)**
  - `Ink / Primary`: `#111111` — primary text and key icons.
  - `Ink / Accent`: `#8B0000` — primary actions, highlights, links.
  - `Ink / Success`: `#3E6B4F` — muted green for success text, borders, and icons.
  - `Ink / Warning`: `#B27A1A` — muted amber for warnings and non-destructive alerts.

- **Derived tones**
  - Borders: same ink colors at ~10–15% opacity.
  - Muted text: primary ink at 60–80% opacity.
  - Disabled: relevant ink at ~30–40% opacity.

No additional hues, no gradients, and no special-case colors beyond these.

---

## Typography

- **Families**
  - **Headings (serif)**: `"Georgia", "Times New Roman", serif`
  - **Body (sans-serif)**: `"Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif`

- **Scale**
  - `H1 / Page`: 32–36px, weight 600, line-height ~1.2
  - `H2 / Section`: 24px, weight 500–600, line-height ~1.3
  - `H3 / Label`: 18–20px, weight 500, line-height ~1.4
  - `Body`: 16–18px, weight 400, line-height 1.6–1.8
  - `Caption`: 13–14px, weight 400, line-height 1.4–1.5

- **Rules**
  - Context headers always use `H1 / Page` serif.
  - Max text width for long-form content: **720px**.
  - No decorative fonts, no arbitrary sizes between defined steps.

---

## Spacing & Layout

Global spacing scale (used everywhere):

- `Space-1`: 8px
- `Space-2`: 16px
- `Space-3`: 24px
- `Space-4`: 40px
- `Space-5`: 64px

Rules:

- No ad-hoc values like 10px, 12px, 32px, etc.
- Outer page padding: 40–64px.
- Card padding: 16–24px.
- Gaps between sections: 24–40px.
- Inline gaps between controls: 8–16px.

Radius & borders:

- Border radius: **4px** consistently across buttons, inputs, cards.
- Border width: **1px**.
- Borders use primary ink at low opacity (10–15%). No drop shadows.

---

## Global Page Structure

Every page follows the same structure:

1. **Top Bar**
2. **Context Header**
3. **Primary Workspace (70%) + Secondary Panel (30%)**
4. **Proof Footer** (persistent at the bottom)

### Top Bar

- Height: 64px on `Canvas / Base`.
- Horizontal padding: `Space-4` (40px).
- Layout:
  - **Left**: Project name (e.g. “KodNest Premium Build System”), body sans 16–18px, medium, `Ink / Primary`.
  - **Center**: Progress indicator, `Step X / Y`, small body or caption, `Ink / Primary` at ~80% opacity.
  - **Right**: Status badge (`Not Started`, `In Progress`, `Shipped`).

Status badge:

- Pill with 4px radius, 8px vertical and 16px horizontal padding.
- Border: 1px, ink at ~15% opacity.
- Text: 14px, medium.
- Colors:
  - **Not Started**: primary ink at 70% opacity, neutral border.
  - **In Progress**: accent text, accent border at ~30% opacity.
  - **Shipped**: success text, success border at ~40% opacity.

### Context Header

- Sits below the Top Bar with `Space-3` (24px) separation.
- **Headline**: `H1 / Page` serif, `Ink / Primary`, one line, direct and descriptive.
- **Subtext**: body sans 16px, `Ink / Primary` at ~80% opacity, one sentence explaining the purpose.
- Max width: 720px.
- Spacing:
  - Headline → Subtext: `Space-1` (8px).
  - Subtext → main content row: `Space-3` (24px).

### Primary Workspace (70%)

- Max layout width: ~1200–1280px centered.
- Primary column occupies ~70% width.
- Organized as a vertical stack of cards:
  - Card padding: `Space-3` (24px).
  - Card gap: `Space-3` (24px).

Cards:

- Background: `Canvas / Base`.
- Border: 1px, primary ink at ~10–12% opacity.
- Radius: 4px.
- Internal spacing:
  - Title → content: `Space-2` (16px).
  - Field groups: `Space-2` to `Space-3` vertically.
- No shadows.

### Secondary Panel (30%)

- Right-hand column, ~30% width, top-aligned with primary workspace.
- Contains, in order:
  1. Step explanation (short heading + short body).
  2. Copyable prompt box.
  3. Action buttons stack.

Step explanation:

- Title: small heading 18–20px, `Ink / Primary`.
- Body: 14–16px, `Ink / Primary` at ~80% opacity.
- Spacing between title and body: `Space-2` (16px).

Copyable prompt box:

- Background: canvas.
- Border: 1px, `Ink / Primary` at ~15% opacity.
- Radius: 4px.
- Padding: `Space-2` (16px).
- Typography: body sans (or monospace) 14–16px.

Buttons (vertical stack, calm):

- Order:
  1. Copy
  2. Build in Lovable
  3. It Worked
  4. Error
  5. Add Screenshot
- Gap between buttons: `Space-1` (8px).

---

## Proof Footer

Persistent bottom section used to capture evidence of completion.

- Background: canvas, with a top border (1px, primary ink at ~15% opacity).
- Padding: `Space-2` vertical, `Space-4` horizontal.
- Items:
  - `□ UI Built`
  - `□ Logic Working`
  - `□ Test Passed`
  - `□ Deployed`

Each checklist item:

- A checkbox + label, and a required proof input (short text or small textarea).
- Checkbox: 16px square, border 1px, primary ink at ~40% opacity, radius 2–4px.
- Checked state: fill success ink, checkmark in canvas color.
- Proof input: small input (200–280px wide) using the global input pattern.
- A checkbox cannot be considered complete without non-empty proof input.

---

## Components

### Buttons

Common traits:

- Radius: 4px.
- Padding: `Space-1` (8px) vertical, `Space-2` (16px) horizontal.
- Font: body sans 14–16px, medium weight.
- Layout: inline-flex, center aligned, 8px gap for icons when present.
- Transitions: color and border-color only, 150–200ms `ease-in-out`.

Primary button:

- Background: `Ink / Accent` (`#8B0000`).
- Text: canvas (`#F7F6F3`).
- Border: none or same color as background.
- Hover: slight darken of background (~5–8%).
- Active: slightly further darken.
- Disabled: accent at 30–40% opacity, text reduced contrast, no hover effect.

Secondary button:

- Background: transparent.
- Text: `Ink / Accent`.
- Border: 1px, `Ink / Accent` at ~60% opacity.
- Hover: background accent at ~6–8% opacity.
- Active: border accent at ~80% opacity.
- Disabled: text and border at ~30–40% opacity.

### Inputs

Applies to text fields, textareas, selects, and proof inputs.

- Height: 40px for single-line.
- Padding: `Space-2` (16px) horizontal.
- Border: 1px, primary ink at ~20% opacity.
- Background: canvas.
- Radius: 4px.
- Font: body sans 14–16px.

States:

- **Focus**: border switches to accent at ~80–100% opacity; no outer glow; transition 150–200ms.
- **Error**: border accent or warning at ~80% opacity, helper text 13–14px in warning color.
- **Disabled**: border at ~10% opacity; text and placeholder at ~50–60% opacity; no hover.

### Cards & Sections

- Card:
  - Background: canvas.
  - Border: 1px, primary ink at ~10–12% opacity.
  - Radius: 4px.
  - Padding: `Space-3` (24px).
  - Internal gap: `Space-2` (16px).

- Optional section dividers inside cards:
  - 1px line using primary ink at ~8–10% opacity.
  - Section titles use `H3 / Label`.

### Status Badges

- Reused pattern from Top Bar anywhere status is needed.
- Same radius, padding, font, and color mapping.

### Checklist Items

- Checkbox: 16px square, 1px border, radius 2–4px.
- Checked state: success fill with canvas checkmark.
- Proof input: global input style, width 200–280px, optionally auto-expands when focused.

---

## Interaction Rules

- All transitions: **150–200ms**, `ease-in-out`.
- Applied to:
  - Button background and border color changes.
  - Input focus border changes.
  - Simple show/hide (e.g., accordions) with height/opacity tweaks.
- No bounce, parallax, or decorative animation; no constant motion.

---

## Error & Empty States

### Error States

Principles:

- Explain what went wrong.
- Explain how to fix it.
- Never blame the user.

Inline form error:

- Input uses error border and small helper text below.
- Example: “This field is required. Enter a name for this build to continue.”

Non-blocking warning banner:

- Card or strip on canvas background.
- Border-left 3–4px in warning color.
- Body text in primary ink with neutral, directive tone.
- Optional secondary-style “Learn more” button.

Blocking error panel (rare, for hard failures):

- Card with warning-colored border.
- Title: concise (e.g. “We couldn’t save your changes.”).
- Body: what happened and what to try next.
- Actions: primary to retry, secondary to view details or contact support.

### Empty States

- Calm and directive, never dead.
- Pattern:
  - Title: e.g. “No builds configured yet”.
  - Body: 1–2 lines explaining what goes here.
  - Primary button: next action (e.g. “Create Your First Build”).
  - Optional secondary: documentation or templates.
- Any illustration, if used, must be single-color line work using existing inks only.

---

## Implementation Tokens (Reference)

These tokens can be mapped directly into CSS variables, Tailwind, or a design tool:

```css
:root {
  /* Color: canvas + 4 inks */
  --kpb-color-canvas-base: #F7F6F3;
  --kpb-color-ink-primary: #111111;
  --kpb-color-ink-accent: #8B0000;
  --kpb-color-ink-success: #3E6B4F;
  --kpb-color-ink-warning: #B27A1A;

  /* Spacing */
  --kpb-space-1: 8px;
  --kpb-space-2: 16px;
  --kpb-space-3: 24px;
  --kpb-space-4: 40px;
  --kpb-space-5: 64px;

  /* Radius & borders */
  --kpb-radius-sm: 4px;
  --kpb-border-width: 1px;

  /* Motion */
  --kpb-transition-fast: 150ms ease-in-out;
  --kpb-transition-base: 180ms ease-in-out;
}
```

---

## Scope

This repository currently defines **only** the design system for the KodNest Premium Build System:

- Visual language
- Layout shell
- Component patterns
- Interaction rules

No product features or business logic are implemented yet.

