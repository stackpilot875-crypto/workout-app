# 🎨 NEO-BRUTALIST 2D DESIGN WITH CSS

## Complete Guide to Creating Flat, Editorial, Graphic User Interfaces

---

## Table of Contents

1. [Introduction](#introduction)
2. [Core Design Principles](#core-design-principles)
3. [Technique 1: Thick Outlines & Flat Panels](#technique-1-thick-outlines--flat-panels)
4. [Technique 2: Offset Shadows (Hard Shadow)](#technique-2-offset-shadows-hard-shadow)
5. [Technique 3: Red Accent Blocks](#technique-3-red-accent-blocks)
6. [Technique 4: Layered 2D Blocks](#technique-4-layered-2d-blocks)
7. [Technique 5: Editorial Typography](#technique-5-editorial-typography)
8. [Technique 6: Hard Graphic Dividers](#technique-6-hard-graphic-dividers)
9. [Technique 7: Tactile Buttons](#technique-7-tactile-buttons)
10. [Technique 8: Active Tab States](#technique-8-active-tab-states)
11. [Technique 9: Graphic Progress Indicators](#technique-9-graphic-progress-indicators)
12. [Technique 10: 2D Geometric Elements](#technique-10-2d-geometric-elements)
13. [Putting It All Together](#putting-it-all-together)
14. [Key Mental Model](#key-mental-model)

---

## Introduction

### What is Neo-Brutalism?

Neo-brutalist design is a **flat 2D graphic system** that feels like an editorial publication rather than a modern web application.

**Characteristics:**
- Flat surfaces (no 3D effects)
- Thick black outlines
- Hard shadows (no blur)
- Bold color blocks
- Strong visual hierarchy
- High contrast composition
- Intentional geometric spacing
- Printed/tactile appearance

### Why Use This Style?

- **Distinctive**: Stands out from generic modern dashboards
- **Scannable**: High contrast makes information clear
- **Memorable**: Bold graphic style creates strong brand presence
- **Accessible**: Clear outlines and high contrast aid readability
- **Modular**: Geometric approach scales easily
- **Tactile**: Feels solid and interactive despite being digital

### Visual Inspiration

Think of neo-brutalist design as:

```
POSTER DESIGN + EDITORIAL LAYOUT + GRAPHIC DESIGN + INTERACTIVE UI
```

Imagine a printed fitness magazine turned into an interactive website.

---

## Core Design Principles

### The Foundation

| Principle | Modern Design | Neo-Brutalist |
|-----------|---------------|---------------|
| **Borders** | Subtle, implied | Thick, prominent |
| **Shadows** | Soft blur (blur radius) | Hard offset (zero blur) |
| **Depth** | 3D perspective | 2D layered blocks |
| **Colors** | Muted, sophisticated | Bold, high contrast |
| **Corners** | Rounded, smooth | Sharp, geometric |
| **Typography** | Varied weights | Bold weights, capitals |
| **Spacing** | Precise, minimal | Generous, breathing room |
| **Interactions** | Fade, scale | Snap, shift |

### CSS Variables Foundation

Start every neo-brutalist project with these variables:

```css
:root {
    /* Base colors */
    --color-bg: #f5f5f0;           /* Off-white, not pure white */
    --color-fg: #000;              /* Pure black */
    --color-accent: #ff2b35;       /* Bold red */
    --color-accent-alt: #1e90ff;   /* Optional secondary accent */
    
    /* Neutral palette */
    --color-light: #e8e8e0;
    --color-medium: #a8a8a0;
    --color-dark: #333333;
    
    /* Borders and lines */
    --border-thick: 3px solid #000;
    --border-medium: 2px solid #000;
    --border-thin: 1px solid #000;
    
    /* Shadows */
    --shadow-sm: 2px 2px 0 0 #000;
    --shadow-md: 4px 4px 0 0 #000;
    --shadow-lg: 6px 6px 0 0 #000;
    --shadow-xl: 8px 8px 0 0 #000;
    
    /* Spacing */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
}

@media (prefers-reduced-motion: reduce) {
    :root {
        /* Disable transitions for motion-sensitive users */
    }
}
```

---

## Technique 1: Thick Outlines & Flat Panels

### The Principle

In neo-brutalist design, **borders are structural**, not decorative. They:
- Define every element's edges
- Create visual hierarchy through line weight
- Provide clear container boundaries
- Never fade or become subtle

### CSS Construction

#### Basic Flat Panel

```css
/* Simple panel with thick outline */
.panel {
    background: #f5f5f0;           /* Off-white base */
    border: 3px solid #000;        /* Thick black border */
    padding: 16px;
    /* NO border-radius or keep at 0 */
}
```

#### Nested Borders (Hierarchy)

```css
/* Main container */
.panel-main {
    background: #f5f5f0;
    border: 3px solid #000;        /* Thickest border */
    padding: 16px;
}

/* Secondary sections */
.panel-section {
    border: 2px solid #000;        /* Medium border */
    padding: 12px;
    margin-bottom: 8px;
}

/* Tertiary elements */
.panel-item {
    border: 1px solid #000;        /* Thin border */
    padding: 8px;
}
```

#### Variable Border Weights

```css
/* Create hierarchy with border thickness */
:root {
    --border-primary: 3px solid #000;
    --border-secondary: 2px solid #000;
    --border-tertiary: 1px solid #000;
}

.card-primary {
    border: var(--border-primary);
}

.card-secondary {
    border: var(--border-secondary);
}

.card-tertiary {
    border: var(--border-tertiary);
}
```

### Visual Result

```
Main Panel (3px)
┌─────────────────────────────┐
│  Section (2px)              │
│  ┌───────────────────────┐  │
│  │ Item (1px)            │  │
│  │ ┌─────────────────┐   │  │
│  │ │ Nested Item     │   │  │
│  │ └─────────────────┘   │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

### Adapting for IRONYX

```css
/* Workout card with border hierarchy */
.workout-card {
    background: #f5f5f0;
    border: 3px solid #000;
    padding: 16px;
}

.workout-day-title {
    border-bottom: 2px solid #000;
    padding-bottom: 8px;
    margin-bottom: 12px;
}

.exercise-row {
    border: 2px solid #000;
    padding: 8px;
    margin-bottom: 8px;
}

.exercise-detail {
    border-left: 1px solid #000;
    padding-left: 12px;
    margin-left: 8px;
}
```

---

## Technique 2: Offset Shadows (Hard Shadow)

### The Principle

Neo-brutalist shadows are **sharp black rectangles**, not blurred glows. They create:
- Depth without 3D perspective
- Printed/tactile appearance
- Strong visual drama
- Clarity through contrast

### Why NOT Blur Radius?

```css
/* ❌ Modern approach - Soft shadow */
box-shadow: 4px 4px 10px rgba(0,0,0,0.3);
/* Result: Realistic but ethereal, floating feeling */

/* ✅ Neo-brutalist approach - Hard shadow */
box-shadow: 4px 4px 0 0 #000;
/* Result: Graphic, printed, tactile feeling */
```

The syntax is: `box-shadow: offsetX offsetY blurRadius spreadRadius color;`

For hard shadows: `box-shadow: 4px 4px 0 0 #000;` (blur = 0, spread = 0)

### CSS Construction

#### Single Hard Shadow

```css
.card-shadow {
    background: #f5f5f0;
    border: 3px solid #000;
    box-shadow: 4px 4px 0 0 #000;  /* Offset down-right */
    padding: 16px;
}

/* Different shadow directions */
.shadow-down-right {
    box-shadow: 4px 4px 0 0 #000;
}

.shadow-down-left {
    box-shadow: -4px 4px 0 0 #000;
}

.shadow-up-right {
    box-shadow: 4px -4px 0 0 #000;
}

.shadow-up-left {
    box-shadow: -4px -4px 0 0 #000;
}
```

#### Multiple Shadow Layers

```css
/* Build depth with multiple shadows */
.card-layered {
    background: #f5f5f0;
    border: 3px solid #000;
    box-shadow: 
        4px 4px 0 0 #000,           /* First layer - opaque */
        8px 8px 0 0 rgba(0,0,0,0.5); /* Second layer - lighter */
}

/* More layers for dramatic effect */
.card-dramatic {
    box-shadow: 
        4px 4px 0 0 #000,
        8px 8px 0 0 #000,
        12px 12px 0 0 rgba(0,0,0,0.3);
}
```

#### Interactive Shadow Shift

```css
/* Shadow moves closer on hover (interactive feedback) */
.card-interactive {
    background: #f5f5f0;
    border: 3px solid #000;
    box-shadow: 4px 4px 0 0 #000;
    transition: all 100ms ease;
    cursor: pointer;
}

.card-interactive:hover {
    box-shadow: 2px 2px 0 0 #000;
    transform: translate(2px, 2px);  /* Move element closer too */
}

.card-interactive:active {
    box-shadow: 0 0 0 0 #000;        /* Shadow disappears when pressed */
    transform: translate(4px, 4px);
}
```

### Shadow Size Guide

```css
/* Small elements (buttons, badges) */
--shadow-sm: 2px 2px 0 0 #000;

/* Medium elements (cards, panels) */
--shadow-md: 4px 4px 0 0 #000;

/* Large elements (sections, modals) */
--shadow-lg: 6px 6px 0 0 #000;

/* Extra large (full-screen overlays) */
--shadow-xl: 8px 8px 0 0 #000;
```

### Adapting for IRONYX

```css
/* Exercise card with interactive shadow */
.exercise-card {
    background: #fff;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 0 #000;
    padding: 16px;
    margin-bottom: 16px;
    transition: all 100ms ease;
}

.exercise-card:hover {
    box-shadow: 3px 3px 0 0 #000;
    transform: translate(3px, 3px);
}

/* Completed exercise - lighter shadow */
.exercise-card.completed {
    box-shadow: 2px 2px 0 0 #ccc;
    opacity: 0.8;
}

/* Selected/active exercise - enhanced shadow */
.exercise-card.selected {
    box-shadow: 6px 6px 0 0 #ff2b35;  /* Red shadow */
    border-color: #ff2b35;
}
```

---

## Technique 3: Red Accent Blocks

### The Principle

In neo-brutalist design, red is **not a subtle accent**—it's a **bold, graphic color** that demands attention.

Red is used for:
- Primary actions (buttons, CTAs)
- Important information (alerts, highlights)
- Active states (selected items, tabs)
- Visual emphasis (headings, labels)

### Design Rules for Red

```css
/* Rule 1: Red always has high contrast */
.accent-red {
    background: #ff2b35;           /* Bold, vibrant red */
    color: #fff;                   /* White text */
    border: 3px solid #000;        /* Black outline */
}

/* Rule 2: Red is NEVER transparent or muted */
.accent-red-correct {
    background: #ff2b35;           /* Opaque red */
}

.accent-red-wrong {
    background: rgba(255, 43, 53, 0.3);  /* ❌ Too transparent */
    background: #ff6b7b;                 /* ❌ Too muted */
}

/* Rule 3: Red blocks have thick outlines */
.red-block {
    background: #ff2b35;
    border: 3px solid #000;        /* Always visible outline */
    padding: 12px;
}
```

### CSS Construction

#### Red Accent Panel

```css
.panel-red {
    background: #ff2b35;
    color: #fff;
    border: 3px solid #000;
    padding: 16px;
}

.panel-red-title {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 8px;
}
```

#### Red Button (Primary Action)

```css
.btn-primary {
    background: #ff2b35;
    color: #fff;
    border: 3px solid #000;
    padding: 12px 24px;
    font-weight: 700;
    font-size: 14px;
    box-shadow: 4px 4px 0 0 #000;
    cursor: pointer;
    transition: all 100ms ease;
}

.btn-primary:hover {
    box-shadow: 2px 2px 0 0 #000;
    transform: translate(2px, 2px);
}

.btn-primary:active {
    box-shadow: 0 0 0 0 #000;
    transform: translate(4px, 4px);
}
```

#### Red Notification/Alert

```css
.notification-red {
    background: #ff2b35;
    border: 3px solid #000;
    color: #fff;
    padding: 12px;
    font-weight: 700;
}

.notification-red-icon {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: #fff;
    color: #ff2b35;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    font-weight: 900;
}
```

#### Red Progress Bar

```css
.progress-bar {
    background: #f5f5f0;
    border: 3px solid #000;
    height: 24px;
    overflow: hidden;
}

.progress-bar-fill {
    background: #ff2b35;
    height: 100%;
    border-right: 3px solid #000;
    width: 0%;
    transition: width 300ms ease;
}
```

### Color Palette Consistency

```css
/* Primary colors */
:root {
    --red-primary: #ff2b35;
    --black: #000;
    --off-white: #f5f5f0;
}

/* Usage guide */
.button-primary { background: var(--red-primary); }
.button-secondary { background: var(--off-white); border: 3px solid var(--black); }
.accent { color: var(--red-primary); }
```

### Adapting for IRONYX

```css
/* IRONYX start workout button */
.btn-start {
    background: #ff2b35;
    color: #fff;
    border: 3px solid #000;
    padding: 16px 32px;
    font-weight: 900;
    font-size: 16px;
    box-shadow: 6px 6px 0 0 #000;
}

/* IRONYX workout completed badge */
.badge-completed {
    background: #ff2b35;
    color: #fff;
    border: 2px solid #000;
    display: inline-block;
    padding: 4px 12px;
    font-weight: 700;
    text-transform: uppercase;
}

/* Red highlight for important exercises */
.exercise-important {
    border-left: 8px solid #ff2b35;
    border: 3px solid #000;
    border-left: 8px solid #ff2b35;
}
```

---

## Technique 4: Layered 2D Blocks

### The Principle

Create visual depth using **stacked 2D rectangles**, not 3D perspective.

Think of design like **paper layers** that are slightly offset to show depth.

### CSS Construction

#### Simple Layered Card (box-shadow method)

```css
.card-layered-simple {
    position: relative;
    background: #f5f5f0;
    border: 3px solid #000;
    padding: 16px;
    box-shadow: 4px 4px 0 0 #000;  /* Shadow acts as "back layer" */
}
```

#### Visible Layers with ::before Pseudo-Element

```css
.card-layered-visible {
    position: relative;
    background: #f5f5f0;
    border: 3px solid #000;
    padding: 16px;
    z-index: 2;
}

/* ::before creates a visible second layer behind */
.card-layered-visible::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    right: -4px;
    bottom: -4px;
    background: #fff;               /* Visible layer color */
    border: 3px solid #000;
    z-index: -1;
}
```

#### Triple-Layer Effect (Maximum Depth)

```css
.card-triple-layer {
    position: relative;
    background: #f5f5f0;
    border: 3px solid #000;
    padding: 16px;
    margin: 12px;
    z-index: 3;
}

/* First layer behind (white) */
.card-triple-layer::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: 4px;
    bottom: 4px;
    background: #fff;
    border: 3px solid #000;
    z-index: 1;
}

/* Second layer behind (black) */
.card-triple-layer::after {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: 8px;
    bottom: 8px;
    background: #000;
    z-index: 0;
}
```

### Visual Layering Guide

```
Single layer (shadow only):
┌─────────┐
│ Content │
└─────────┘
    ■ (shadow behind)

Double layer (::before):
┌─────────┐
│ Content │
└─────────┘
  ┌─────────┐ (visible layer)
  └─────────┘

Triple layer (::before + ::after):
┌─────────┐
│ Content │
└─────────┘
  ┌─────────┐
  └─────────┘
    ┌─────────┐
    └─────────┘
```

### When to Use Each Method

```css
/* Light depth - use box-shadow only */
.card-light {
    box-shadow: 4px 4px 0 0 #000;
    /* Simple, minimal layers */
}

/* Medium depth - add ::before */
.card-medium {
    box-shadow: 4px 4px 0 0 #000;
    position: relative;
}

.card-medium::before {
    /* Visible second layer */
    content: '';
    position: absolute;
    /* positioning... */
}

/* Maximum depth - ::before + ::after */
.card-dramatic {
    /* All three layers visible */
}
```

### Adapting for IRONYX

```css
/* Layered workout panel */
.workout-panel {
    position: relative;
    background: #f5f5f0;
    border: 3px solid #000;
    padding: 20px;
    margin: 16px;
    z-index: 2;
}

.workout-panel::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: 4px;
    bottom: 4px;
    background: #fff;
    border: 3px solid #000;
    z-index: -1;
}

/* Less dramatic layering for smaller elements */
.exercise-card-light {
    background: #f5f5f0;
    border: 3px solid #000;
    box-shadow: 4px 4px 0 0 #000;  /* Shadow only, no ::before */
}
```

---

## Technique 5: Editorial Typography

### The Principle

Typography should follow **hierarchy through weight**, not just size.

Use:
- **Bold/900 weights** for emphasis
- **Capitals** for labels and importance
- **Generous line-height** for readability
- **Letter-spacing** for graphic impact

### CSS Construction

#### Typography Hierarchy

```css
/* Heading 1 - Maximum emphasis */
.h1 {
    font-size: 32px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -1px;
    line-height: 1.1;
    margin-bottom: 16px;
}

/* Heading 2 - Primary heading */
.h2 {
    font-size: 24px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 1.2;
    margin-bottom: 12px;
}

/* Heading 3 - Section heading */
.h3 {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: 8px;
}

/* Labels - Always bold and caps */
.label {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #333;
}

/* Body text - Regular weight */
.body {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    color: #333;
}

/* Small body text */
.body-small {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    color: #666;
}

/* Button text - Always bold */
.btn-text {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.25px;
}
```

#### Comparison: Modern vs Editorial

```
❌ Modern Hierarchy (size-based):
Large Regular    | Small Regular  | Tiny Regular
32px 400         | 14px 400       | 11px 400
(Subtle, hard to scan)

✅ Editorial Hierarchy (weight-based):
LARGE BOLD       | normal regular | SMALL CAPS BOLD
32px 900         | 14px 400       | 11px 700, uppercase
(Clear, scannable, graphic)
```

### Font Weight Strategy

```css
/* Base font stack */
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
                 Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Only use 2-3 weights for neo-brutalist design */
/* Prefer: 400 (regular), 700 (bold), 900 (extra bold) */

/* ❌ Avoid using 100, 300, 500, 600, 800 */
/* (Too many weights make design feel chaotic) */

/* ✅ Stick to: 400, 700, 900 */
.text-regular { font-weight: 400; }
.text-bold { font-weight: 700; }
.text-extra-bold { font-weight: 900; }
```

### Adapting for IRONYX

```css
/* IRONYX typography */
.ironyx-title {
    font-size: 28px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -0.5px;
    margin-bottom: 16px;
}

.ironyx-day-heading {
    font-size: 18px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.ironyx-exercise-name {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
}

.ironyx-exercise-label {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #666;
}

.ironyx-stat-number {
    font-size: 24px;
    font-weight: 900;
    color: #000;
}

.ironyx-stat-label {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: #666;
}
```

---

## Technique 6: Hard Graphic Dividers

### The Principle

Instead of subtle lines, use **bold, graphic dividers** that are integrated into the design.

Dividers should feel like **intentional design elements**, not just visual separators.

### CSS Construction

#### Simple Border Divider

```css
/* Basic divider */
.divider {
    border-top: 3px solid #000;
    margin: 16px 0;
}

.divider-red {
    border-top: 3px solid #ff2b35;
}

.divider-thick {
    border-top: 6px solid #000;
}
```

#### Divider with Label

```css
.divider-labeled {
    display: flex;
    align-items: center;
    margin: 20px 0;
    gap: 12px;
}

.divider-labeled::before,
.divider-labeled::after {
    content: '';
    flex: 1;
    height: 2px;
    background: #000;
}

.divider-labeled-text {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    white-space: nowrap;
}

/* Usage: */
/* <div class="divider-labeled">
     <span class="divider-labeled-text">OR</span>
   </div>
*/
```

#### Decorative Block Divider

```css
/* Solid block separator */
.divider-block {
    height: 20px;
    background: #000;
    margin: 24px 0;
    border: 2px solid #000;
}

/* Multiple blocks */
.divider-blocks {
    display: flex;
    gap: 4px;
    margin: 24px 0;
}

.divider-blocks > div {
    flex: 1;
    height: 12px;
    background: #000;
}
```

#### Red Section Divider

```css
/* Highlight section boundaries */
.section-divider-red {
    height: 8px;
    background: #ff2b35;
    border: 2px solid #000;
    margin: 20px 0;
}

/* Red divider with shadow */
.section-divider-red-shadow {
    height: 8px;
    background: #ff2b35;
    border: 2px solid #000;
    box-shadow: 3px 3px 0 0 #000;
}
```

### Divider Placement Patterns

```css
/* Between sections */
.section + .section {
    border-top: 3px solid #000;
    padding-top: 20px;
}

/* Under headings */
.heading {
    border-bottom: 3px solid #000;
    padding-bottom: 12px;
    margin-bottom: 16px;
}

/* Around important content */
.highlighted-section {
    border-top: 3px solid #ff2b35;
    border-bottom: 3px solid #ff2b35;
    padding: 16px 0;
}
```

### Adapting for IRONYX

```css
/* Section divider between workout days */
.day-divider {
    border-top: 3px solid #000;
    border-bottom: 1px solid #ccc;
    height: 12px;
    margin: 20px 0;
}

/* Important section marker */
.important-divider {
    height: 8px;
    background: #ff2b35;
    border: 2px solid #000;
    margin: 16px 0;
}

/* Exercise group separator */
.exercise-group-divider {
    border-top: 2px solid #000;
    margin: 16px 0;
    padding-top: 12px;
}
```

---

## Technique 7: Tactile Buttons

### The Principle

Buttons should feel **clickable and solid**, with feedback that shows they're interactive.

Use:
- Thick borders
- Offset shadows that shift on interaction
- No rounded corners (or minimal)
- Bold text

### CSS Construction

#### Base Tactile Button

```css
.btn {
    background: #f5f5f0;
    color: #000;
    border: 3px solid #000;
    padding: 12px 24px;
    font-weight: 700;
    font-size: 14px;
    box-shadow: 4px 4px 0 0 #000;
    cursor: pointer;
    transition: all 100ms ease;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}

/* Hover - shadow moves closer */
.btn:hover {
    box-shadow: 2px 2px 0 0 #000;
    transform: translate(2px, 2px);
}

/* Active/pressed - shadow disappears */
.btn:active {
    box-shadow: 0 0 0 0 #000;
    transform: translate(4px, 4px);
}

/* Disabled state */
.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

#### Primary Button (Red)

```css
.btn-primary {
    background: #ff2b35;
    color: #fff;
    border: 3px solid #000;
    padding: 12px 24px;
    font-weight: 700;
    box-shadow: 4px 4px 0 0 #000;
    transition: all 100ms ease;
}

.btn-primary:hover {
    box-shadow: 2px 2px 0 0 #000;
    transform: translate(2px, 2px);
}

.btn-primary:active {
    box-shadow: 0 0 0 0 #000;
    transform: translate(4px, 4px);
}
```

#### Secondary Button (Outline)

```css
.btn-secondary {
    background: transparent;
    color: #000;
    border: 3px solid #000;
    padding: 12px 24px;
    font-weight: 700;
    box-shadow: 4px 4px 0 0 #000;
    transition: all 100ms ease;
}

.btn-secondary:hover {
    background: #f5f5f0;
    box-shadow: 2px 2px 0 0 #000;
    transform: translate(2px, 2px);
}

.btn-secondary:active {
    box-shadow: 0 0 0 0 #000;
    transform: translate(4px, 4px);
}
```

#### Size Variants

```css
/* Large button */
.btn-large {
    padding: 16px 32px;
    font-size: 16px;
    box-shadow: 6px 6px 0 0 #000;
}

.btn-large:hover {
    box-shadow: 3px 3px 0 0 #000;
    transform: translate(3px, 3px);
}

.btn-large:active {
    box-shadow: 0 0 0 0 #000;
    transform: translate(6px, 6px);
}

/* Small button */
.btn-small {
    padding: 8px 12px;
    font-size: 12px;
    border: 2px solid #000;
    box-shadow: 2px 2px 0 0 #000;
}

.btn-small:hover {
    box-shadow: 1px 1px 0 0 #000;
    transform: translate(1px, 1px);
}

.btn-small:active {
    box-shadow: 0 0 0 0 #000;
    transform: translate(2px, 2px);
}
```

### Button State Visualization

```
NORMAL STATE:       HOVER STATE:        ACTIVE/PRESSED:
┌──────────┐        ┌──────────┐        ┌──────────┐
│  CLICK   │ ■■     │  CLICK   │ ■      │  CLICK   │
└──────────┘ ■■     └──────────┘ ■      └──────────┘
             ■■                   ■
(4px offset)       (2px offset)       (0px offset - "pressed")
```

### Adapting for IRONYX

```css
/* IRONYX start workout button */
.btn-start-workout {
    background: #ff2b35;
    color: #fff;
    border: 3px solid #000;
    padding: 16px 32px;
    font-weight: 900;
    font-size: 16px;
    text-transform: uppercase;
    box-shadow: 6px 6px 0 0 #000;
    transition: all 100ms ease;
}

.btn-start-workout:hover {
    box-shadow: 3px 3px 0 0 #000;
    transform: translate(3px, 3px);
}

/* Complete exercise button */
.btn-complete {
    background: #f5f5f0;
    color: #000;
    border: 3px solid #000;
    box-shadow: 4px 4px 0 0 #000;
}

.btn-complete.is-completed {
    background: #10b981;              /* Green when done */
    color: #fff;
    box-shadow: 2px 2px 0 0 #000;
}
```

---

## Technique 8: Active Tab States

### The Principle

Tabs need **strong visual distinction** between active and inactive states.

Use color inversion, shadow shifts, or border emphasis—not subtle changes.

### CSS Construction

#### Basic Tab Navigation

```css
/* Tab container */
.tabs {
    display: flex;
    border-bottom: 3px solid #000;
    gap: 2px;
}

/* Individual tab */
.tab {
    background: transparent;
    color: #000;
    border: 3px solid #000;
    border-bottom: none;               /* Connect to container border */
    padding: 12px 24px;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;
    margin-right: -2px;                /* Overlap borders */
    transition: all 150ms ease;
}

/* Hover state */
.tab:hover {
    background: #f5f5f0;
}

/* Active tab - filled with black */
.tab.active {
    background: #000;
    color: #fff;
    border: 3px solid #000;
}

/* Focus state for accessibility */
.tab:focus {
    outline: 2px dashed #ff2b35;
    outline-offset: -6px;
}
```

#### Alternative: Red Active Tab

```css
/* Active tab with red accent */
.tab.active-red {
    background: #ff2b35;
    color: #fff;
    border: 3px solid #000;
    box-shadow: 0 4px 0 0 #000;
}
```

#### Alternative: Bottom Border Emphasis

```css
/* Active highlighted with thick bottom border */
.tab.active-underline {
    background: #f5f5f0;
    color: #000;
    border: 3px solid #000;
    border-bottom: 6px solid #000;     /* Thick bottom emphasis */
}
```

### Tab Variations

```css
/* Segmented tabs (pill-like but hard-edged) */
.tabs-segmented {
    display: flex;
    gap: 0;
}

.tabs-segmented .tab {
    border-radius: 0;
    flex: 1;
}

.tabs-segmented .tab:first-child {
    border-right: none;
}

.tabs-segmented .tab.active {
    background: #000;
    color: #fff;
}

/* Vertical tabs */
.tabs-vertical {
    display: flex;
    flex-direction: column;
    border-right: 3px solid #000;
    gap: 2px;
}

.tabs-vertical .tab {
    border-right: none;
    border-bottom: 3px solid #000;
    text-align: left;
}
```

### Adapting for IRONYX

```css
/* IRONYX day navigation tabs */
.day-tabs {
    display: flex;
    border-bottom: 3px solid #000;
    gap: 2px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.day-tab {
    background: #f5f5f0;
    color: #000;
    border: 3px solid #000;
    border-bottom: none;
    padding: 12px 20px;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;
    white-space: nowrap;
    margin-right: -2px;
    transition: all 150ms ease;
}

.day-tab:hover:not(.active) {
    background: #e8e8e0;
}

/* Active day tab - red background */
.day-tab.active {
    background: #ff2b35;
    color: #fff;
    border: 3px solid #000;
    box-shadow: 0 4px 0 0 #000;
}

/* Mobile - stack tabs vertically on small screens */
@media (max-width: 480px) {
    .day-tabs {
        flex-direction: column;
        border-right: 3px solid #000;
        border-bottom: none;
    }
    
    .day-tab {
        border-right: none;
        border-bottom: 3px solid #000;
    }
}
```

---

## Technique 9: Graphic Progress Indicators

### The Principle

Progress should be shown as **solid fill blocks**, not animated gradient bars.

Think of it like a **segmented progress chart** you'd see in a printed report.

### CSS Construction

#### Segmented Progress Blocks

```css
/* Block-style progress bar */
.progress-blocks {
    display: flex;
    gap: 3px;
    padding: 8px;
    border: 3px solid #000;
    background: #f5f5f0;
}

.progress-block {
    flex: 1;
    height: 20px;
    background: #ccc;                  /* Inactive state */
    border: 1px solid #000;
    transition: background 200ms ease;
}

.progress-block.filled {
    background: #ff2b35;               /* Filled state */
    border: 1px solid #000;
}
```

#### Linear Fill Progress

```css
/* Simple linear progress bar */
.progress-bar {
    background: #f5f5f0;
    border: 3px solid #000;
    height: 24px;
    overflow: hidden;
    position: relative;
}

.progress-bar-fill {
    background: #ff2b35;
    height: 100%;
    border-right: 3px solid #000;
    width: 0%;
    transition: width 300ms ease;
}

/* With percentage label */
.progress-with-label {
    position: relative;
    background: #f5f5f0;
    border: 3px solid #000;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.progress-with-label::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: #ff2b35;
    border-right: 3px solid #000;
    width: var(--progress, 0%);
}

.progress-with-label-text {
    position: relative;
    z-index: 1;
    font-weight: 900;
    font-size: 14px;
}
```

#### Circular/Segmented Progress

```css
/* Circular progress dots */
.progress-dots {
    display: flex;
    gap: 8px;
    align-items: center;
}

.progress-dot {
    width: 12px;
    height: 12px;
    border: 2px solid #000;
    background: #f5f5f0;
    transition: background 150ms ease;
}

.progress-dot.complete {
    background: #ff2b35;
}

/* With check marks */
.progress-dot.complete::after {
    content: '✓';
    font-weight: 900;
    color: #fff;
    font-size: 8px;
}
```

### Dynamic Progress with CSS Variables

```css
/* Use CSS custom property for flexible progress */
.progress-dynamic {
    background: #f5f5f0;
    border: 3px solid #000;
    height: 24px;
    overflow: hidden;
}

.progress-dynamic-fill {
    background: #ff2b35;
    height: 100%;
    width: var(--progress-width, 0%);
    border-right: 3px solid #000;
    transition: width 300ms ease;
}

/* JavaScript: element.style.setProperty('--progress-width', '75%'); */
```

### Adapting for IRONYX

```css
/* IRONYX daily workout completion */
.workout-progress {
    background: #f5f5f0;
    border: 3px solid #000;
    height: 32px;
    margin: 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.workout-progress-fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: #ff2b35;
    border-right: 3px solid #000;
    width: var(--progress-percent, 0%);
    transition: width 300ms ease;
}

.workout-progress-text {
    position: relative;
    z-index: 1;
    font-weight: 900;
    font-size: 14px;
}

/* Exercise completion checklist */
.exercises-progress {
    display: flex;
    gap: 6px;
}

.exercise-progress-item {
    flex: 1;
    height: 20px;
    border: 2px solid #000;
    background: #f5f5f0;
    transition: background 100ms ease;
}

.exercise-progress-item.done {
    background: #ff2b35;
}
```

---

## Technique 10: 2D Geometric Elements

### The Principle

Use **simple, flat shapes** and icons that are graphic and clean.

Avoid detailed illustrations or curves—think **stencils and blocky forms**.

### CSS Construction

#### Simple Icon Boxes

```css
/* Basic icon container */
.icon-box {
    width: 32px;
    height: 32px;
    border: 2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 16px;
}

/* Filled icon */
.icon-box-filled {
    background: #ff2b35;
    color: #fff;
    border: 2px solid #000;
}

/* Icon with shadow */
.icon-box-shadow {
    box-shadow: 3px 3px 0 0 #000;
}

/* Different sizes */
.icon-xs { width: 20px; height: 20px; }
.icon-sm { width: 24px; height: 24px; }
.icon-md { width: 32px; height: 32px; }
.icon-lg { width: 48px; height: 48px; }
```

#### Unicode Symbols and Arrows

```css
/* Arrow buttons */
.arrow-up::before {
    content: '▲';
    font-weight: 900;
}

.arrow-down::before {
    content: '▼';
}

.arrow-left::before {
    content: '◀';
}

.arrow-right::before {
    content: '▶';
}

/* Checkmark */
.check::before {
    content: '✓';
    font-weight: 900;
    font-size: 18px;
}

/* Cross/X */
.cross::before {
    content: '✕';
    font-weight: 900;
}

/* Bullet points */
.bullet::before {
    content: '●';
    margin-right: 8px;
}
```

#### Badges and Labels

```css
/* Simple badge */
.badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #000;
    color: #fff;
    width: 24px;
    height: 24px;
    border: 2px solid #000;
    border-radius: 0;  /* Hard corners */
    font-weight: 900;
    font-size: 12px;
    line-height: 1;
}

/* Filled label badge */
.label-badge {
    display: inline-block;
    background: #ff2b35;
    color: #fff;
    padding: 4px 12px;
    border: 2px solid #000;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
}

/* Outlined label badge */
.label-badge-outline {
    display: inline-block;
    background: transparent;
    color: #000;
    border: 2px solid #000;
    padding: 4px 12px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
}
```

#### Decorative Corner Elements

```css
/* Corner accent (like a frame corner) */
.corner-accent {
    position: absolute;
    width: 16px;
    height: 16px;
    border: 2px solid #ff2b35;
}

.corner-accent.top-left {
    top: -2px;
    left: -2px;
    border-right: none;
    border-bottom: none;
}

.corner-accent.top-right {
    top: -2px;
    right: -2px;
    border-left: none;
    border-bottom: none;
}

.corner-accent.bottom-left {
    bottom: -2px;
    left: -2px;
    border-right: none;
    border-top: none;
}

.corner-accent.bottom-right {
    bottom: -2px;
    right: -2px;
    border-left: none;
    border-top: none;
}
```

#### Simple Line Elements

```css
/* Geometric divider lines */
.divider-line-thick {
    height: 8px;
    background: #000;
    border: 1px solid #000;
}

.divider-line-red {
    height: 6px;
    background: #ff2b35;
    border: 1px solid #000;
}

/* Grid pattern background (optional) */
.bg-grid {
    background-image: 
        linear-gradient(0deg, transparent 24%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.1) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.1) 76%, transparent 77%, transparent),
        linear-gradient(90deg, transparent 24%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.1) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.1) 76%, transparent 77%, transparent);
    background-size: 40px 40px;
}
```

### Inline SVG Icons

```html
<!-- Simple muscle icon -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M4 8h4m4 0h4m-4 0v8"/>
</svg>

<!-- Strength/weight icon -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="10" width="2" height="4"/>
    <rect x="4" y="8" width="16" height="8"/>
    <rect x="20" y="10" width="2" height="4"/>
</svg>

<!-- Rep counter icon -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="9"/>
    <text x="12" y="16" text-anchor="middle" font-weight="900">3</text>
</svg>
```

### Adapting for IRONYX

```css
/* IRONYX muscle group badges */
.muscle-badge {
    display: inline-block;
    background: #000;
    color: #fff;
    padding: 4px 8px;
    border: 2px solid #000;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 6px;
}

.muscle-badge.chest {
    background: #000;
}

.muscle-badge.back {
    background: #ff2b35;
}

/* Exercise icons */
.exercise-type-icon {
    width: 24px;
    height: 24px;
    border: 2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
}

/* Completion checkmark */
.completion-check {
    width: 20px;
    height: 20px;
    border: 2px solid #000;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
}

.completion-check.done {
    background: #ff2b35;
    color: #fff;
}
```

---

## Putting It All Together

### Complete Component Example: Exercise Card

```css
/* IRONYX Exercise Card - All techniques combined */
.exercise-card {
    /* Technique 1: Thick outline */
    background: #f5f5f0;
    border: 3px solid #000;
    padding: 16px;
    
    /* Technique 2: Hard shadow */
    box-shadow: 6px 6px 0 0 #000;
    
    /* Technique 4: Layering (optional) */
    position: relative;
    margin: 16px;
    
    /* Transitions for interaction */
    transition: all 100ms ease;
}

/* Hover interaction */
.exercise-card:hover {
    box-shadow: 3px 3px 0 0 #000;
    transform: translate(3px, 3px);
}

/* Technique 5: Typography hierarchy */
.exercise-card-title {
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 8px;
    
    /* Technique 6: Divider */
    border-bottom: 2px solid #000;
    padding-bottom: 8px;
}

/* Technique 9: Progress indicator */
.exercise-card-progress {
    background: #f5f5f0;
    border: 2px solid #000;
    height: 20px;
    margin: 12px 0;
    overflow: hidden;
}

.exercise-card-progress-fill {
    background: #ff2b35;
    height: 100%;
    width: var(--progress, 0%);
}

/* Technique 7: Tactile button */
.exercise-card-btn {
    background: #ff2b35;
    color: #fff;
    border: 3px solid #000;
    padding: 8px 16px;
    font-weight: 700;
    box-shadow: 3px 3px 0 0 #000;
    transition: all 100ms ease;
    margin-top: 12px;
}

.exercise-card-btn:hover {
    box-shadow: 2px 2px 0 0 #000;
    transform: translate(1px, 1px);
}

.exercise-card-btn:active {
    box-shadow: 0 0 0 0 #000;
    transform: translate(3px, 3px);
}

/* Completed state */
.exercise-card.completed {
    opacity: 0.7;
    box-shadow: 2px 2px 0 0 #ccc;
}

.exercise-card.completed .exercise-card-title {
    text-decoration: line-through;
    color: #999;
}
```

### HTML Structure

```html
<div class="exercise-card">
    <h3 class="exercise-card-title">Incline DB Press</h3>
    
    <div class="exercise-details">
        <p><strong>Sets:</strong> 3</p>
        <p><strong>Reps:</strong> 6–10</p>
        <p><strong>Rest:</strong> 90 sec</p>
    </div>
    
    <div class="exercise-card-progress">
        <div class="exercise-card-progress-fill" style="--progress: 67%"></div>
    </div>
    
    <button class="exercise-card-btn">Complete</button>
</div>
```

---

## Key Mental Model

### Think of Neo-Brutalism As:

```
┌─────────────────────────────────────┐
│  Traditional Modern UI              │
│  (Soft, floating, ethereal)         │
├─────────────────────────────────────┤
│ • Subtle shadows                    │
│ • Rounded corners everywhere        │
│ • Muted color palette               │
│ • Thin, delicate strokes            │
│ • Elements float in space           │
│ • Gradient fills                    │
│ • Hover: fade effect                │
│ • Smooth, long transitions          │
└─────────────────────────────────────┘

                  ↕

┌─────────────────────────────────────┐
│  Neo-Brutalist Design               │
│  (Graphic, printed, bold)           │
├─────────────────────────────────────┤
│ • Hard black rectangles             │
│ • Sharp 90° angles                  │
│ • Bold color blocks                 │
│ • Thick outlines                    │
│ • Layered stacked blocks            │
│ • Flat solid colors                 │
│ • Hover: shadow shifts closer       │
│ • Snappy, fast transitions          │
└─────────────────────────────────────┘
```

### CSS Mindset Shift

```
Modern:
    "How do I make this feel light and ethereal?"
    → Use blur, gradients, soft colors

Neo-Brutalist:
    "How do I make this feel bold and graphic?"
    → Use borders, hard shadows, solid colors
```

---

## Design Checklist

### Before Declaring Your Design Complete:

- ✅ **Borders**: Every element has a clear border or outline
- ✅ **Shadows**: Shadows are hard/offset, never soft blur
- ✅ **Colors**: High contrast, bold choices (black, white, red)
- ✅ **Typography**: Bold weights (700-900), capitals where appropriate
- ✅ **Spacing**: Generous, intentional gaps
- ✅ **Corners**: No excessive rounding (0-4px max)
- ✅ **Interactions**: Shadow and transform feedback
- ✅ **Hierarchy**: Clear distinction between states
- ✅ **Dividers**: Bold graphic separators, not subtle lines
- ✅ **Icons**: Geometric, flat, simple shapes

### Common Mistakes to Avoid

- ❌ Adding blur to shadows (use zero blur radius)
- ❌ Using many different border weights without reason
- ❌ Mixing muted and bold colors
- ❌ Over-rounding corners (keep mostly sharp)
- ❌ Subtle hover states (make them obvious)
- ❌ Too much whitespace without intention
- ❌ Using many font weights (stick to 3-4)
- ❌ Gradients (use flat colors)
- ❌ Transparency/opacity (use solid colors)
- ❌ Long, smooth animations (keep snappy)

---

## Next Steps

Once you've internalized these 10 techniques:

1. **Start simple**: Build a basic card with border + shadow
2. **Add hierarchy**: Use border weight variations
3. **Introduce color**: Add strategic red accents
4. **Build interactivity**: Implement button hover states
5. **Create layout**: Combine multiple components
6. **Test thoroughly**: Check all interaction states
7. **Iterate**: Refine based on feedback

### Your Turn

Use these techniques to build your **IRONYX fitness tracker** with:
- Bordered workout panels
- Hard-shadow exercise cards
- Red accent buttons and progress fills
- Bold editorial typography
- Tactile interactive states
- Graphic progress indicators

---

## Reference CSS Snippets

### Quick Copy-Paste Foundation

```css
/* Base colors */
:root {
    --black: #000;
    --off-white: #f5f5f0;
    --red: #ff2b35;
}

/* Reusable classes */
.panel {
    background: var(--off-white);
    border: 3px solid var(--black);
    padding: 16px;
    box-shadow: 4px 4px 0 0 var(--black);
}

.btn {
    background: var(--red);
    color: #fff;
    border: 3px solid var(--black);
    padding: 12px 24px;
    font-weight: 700;
    box-shadow: 4px 4px 0 0 var(--black);
    transition: all 100ms ease;
}

.btn:hover {
    box-shadow: 2px 2px 0 0 var(--black);
    transform: translate(2px, 2px);
}

.btn:active {
    box-shadow: 0 0 0 0 var(--black);
    transform: translate(4px, 4px);
}

.divider {
    border-top: 3px solid var(--black);
    margin: 16px 0;
}

.badge {
    background: var(--black);
    color: #fff;
    display: inline-block;
    padding: 4px 12px;
    border: 2px solid var(--black);
    font-weight: 700;
    font-size: 11px;
    text-transform: uppercase;
}
```

---

## Final Thoughts

Neo-brutalist design is about **intentionality and boldness**. Every border, every shadow, every color choice should have a reason.

The goal isn't to make something pretty—it's to make something **memorable, scannable, and interactive** through strong graphic design principles.

**Start experimenting. Build. Iterate. Make it bold.** 🎨

---

**Happy designing!** 

For questions or clarifications on any technique, refer to the specific section above.