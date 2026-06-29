---
name: Essentialis
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#bfcdff'
  on-tertiary: '#082b72'
  tertiary-container: '#97b0ff'
  on-tertiary-container: '#254188'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#27438a'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  mono-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  xs: 0.5rem
  sm: 1rem
  md: 2rem
  lg: 4rem
  xl: 8rem
  gutter: 24px
  margin: max(5vw, 24px)
  container-max: 1280px
---

## Brand & Style

The design system is anchored in the concept of "Precision Elegance." As a consultancy focused on quality and process improvement, the visual language must reflect rigorous analysis balanced with executive-level sophistication. The brand personality is authoritative yet approachable, prioritizing clarity and high-value density over decorative fluff.

The aesthetic follows a **Premium Modern** approach, blending elements of **Minimalism** with subtle **Glassmorphism**. It utilizes a deep, immersive dark mode to reduce visual noise and emphasize content. The emotional response should be one of immediate trust, calm efficiency, and the feeling of entering a high-end, curated professional space. Key visual drivers include expansive whitespace (negative space), razor-sharp typography, and purposeful use of light-source-driven gradients.

## Colors

The palette is a sophisticated "Midnight & Metal" scheme. 

- **Primary (Refined Gold):** Used sparingly for high-impact calls to action, success states, and premium highlights. It signifies quality and the "gold standard" of consultancy.
- **Secondary (Electric Indigo):** Used for interactive elements, data visualization accents, and subtle background glows to provide a modern, "tech-forward" edge.
- **Neutrals (Deep Charcoal & Slate):** The foundation of the UI. Backgrounds use a near-black Navy (`#020617`) to provide depth, while surfaces use a slightly lighter Slate (`#0F172A`) to establish hierarchy.
- **Gradients:** Utilize the Gold gradient for primary buttons to simulate a metallic finish. Use the Indigo Glow as a background atmospheric element to prevent the dark mode from feeling flat.

## Typography

The typography strategy focuses on a hierarchy of modern Swiss-inspired sans-serifs.

- **Headlines:** Plus Jakarta Sans provides a contemporary, high-end feel with its clean geometry and slight warmth. Display styles use tight tracking to emphasize a bold, editorial look.
- **Body:** Inter is the workhorse for readability. Its neutral character ensures that long-form process documentation or reports remain legible.
- **Labels & Data:** Geist (Monospaced/Technical) is used for metadata, labels, and analytical figures, reinforcing the "process and precision" aspect of the brand.

Always maintain high contrast between headings (White) and body text (Slate-300) to ensure the dark mode remains accessible.

## Layout & Spacing

This design system employs a **Fixed-Fluid Hybrid** grid. 
- **Desktop:** A 12-column grid with a maximum container width of 1280px. This prevents line lengths from becoming too long on wide monitors, maintaining a professional "report" feel.
- **Spacing Philosophy:** We use a generous 8px base unit. To reflect a premium consultancy vibe, we "over-space" vertical sections (using `xl` spacing) to give content room to breathe.
- **Alignment:** All text-heavy components should be left-aligned to mimic professional documentation. Center-alignment is reserved only for high-level hero sections.
- **Gutters:** Consistent 24px gutters ensure that data-heavy dashboards don't feel cluttered.

## Elevation & Depth

In this dark-themed system, depth is communicated through **Tonal Layering** and **Luminescence** rather than heavy shadows.

1.  **Level 0 (Floor):** The darkest color (`#020617`). Used for the main application background.
2.  **Level 1 (Card/Section):** A slightly lighter slate (`#0F172A`). Used for secondary containers.
3.  **Level 2 (Overlay/Modal):** Use a semi-transparent blur (20px) with a 1px thin border (`rgba(255,255,255,0.1)`) to create a glass effect.
4.  **Shadows:** Use extremely soft, "Ambient Glows" instead of black shadows. For example, a floating card might have a `0 20px 40px rgba(0,0,0,0.4)` shadow paired with a subtle Indigo outer glow to lift it from the background.
5.  **Borders:** Use thin, low-opacity borders (Slate-800) to define sections without adding visual weight.

## Shapes

The shape language is **Soft and Structural**. We avoid the playfulness of fully rounded "pill" shapes and the harshness of sharp 0px corners.

- **Standard Elements:** Buttons and Input fields use a 0.25rem (4px) radius to maintain a professional, sharp-edged look.
- **Containers:** Cards and Modals use a 0.75rem (12px) radius (`rounded-xl`) to provide a subtle modern touch that softens the large layout blocks.
- **Icons:** Use thin-stroke (1.5pt) linear icons with slightly rounded caps to match the typography's weight.

## Components

- **Buttons:** Primary buttons use the Gold Gradient with black text for maximum contrast. Secondary buttons are "Ghost" style (transparent with a Slate-700 border) with white text.
- **Input Fields:** Use a dark-fill background (`#1E293B`) with a 1px border. On focus, the border transitions to Primary Gold with a subtle outer glow.
- **Cards:** Feature a 1px top-border in a slightly lighter shade than the card itself to simulate a "rim light" effect.
- **Chips:** Small, monochromatic tags using the `mono-sm` font style. Use Indigo for "In-Progress" and Gold for "Optimized" status.
- **Process Trackers:** A custom vertical stepper component using thin lines and Indigo "glow" nodes to visualize client process improvements.
- **Data Visuals:** Charts should use a limited palette of Indigo, Gold, and Slate-400, avoiding the "rainbow" effect of standard dashboard tools to maintain the premium aesthetic.