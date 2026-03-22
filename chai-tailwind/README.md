# ChaiTailwind CSS

A lightweight, utility-first CSS-in-JS framework for rapid UI development. Style your elements using simple `chai-` prefixed class names that are dynamically converted to inline CSS.

## Overview

ChaiTailwind provides a comprehensive set of utility classes that style HTML elements without writing custom CSS. It features both **static utilities** (predefined styles) and **dynamic utilities** (parameterized styles with values).

## Getting Started

### Basic Usage

Add the `chai-` prefix to any utility class name in your HTML:

```html
<div class="chai-bg-blue-500 chai-p-4 chai-rounded-lg">Hello World</div>
```

The `script.js` automatically applies styles from `styler.js` to all elements with `chai-` classes.

### How It Works

1. **HTML Classes**: Add `chai-` prefixed classes to elements
2. **Script Processing**: `script.js` detects `chai-` classes on page load and mutations
3. **Styling Engine**: `styler.js` converts class names to CSS properties
4. **Inline Styles**: Computed styles are applied directly to elements

---

## Utilities Reference

### Colors (Text)

Text color utilities. Use `chai-` prefix followed by color name and intensity.

- **Red**: `chai-red-100`, `chai-red-500`, `chai-red-900`
- **Orange**: `chai-orange-100`, `chai-orange-500`, `chai-orange-900`
- **Green**: `chai-green-100`, `chai-green-500`, `chai-green-900`
- **Blue**: `chai-blue-100`, `chai-blue-500`, `chai-blue-900`
- **Pink**: `chai-pink-100`, `chai-pink-500`, `chai-pink-900`
- **Gray**: `chai-gray-100`, `chai-gray-500`, `chai-gray-900`
- **Yellow**: `chai-yellow-100`, `chai-yellow-500`
- **Purple**: `chai-purple-100`, `chai-purple-500`
- **Indigo**: `chai-indigo-100`, `chai-indigo-500`
- **Cyan**: `chai-cyan-100`, `chai-cyan-500`
- **Teal**: `chai-teal-100`, `chai-teal-500`

**Example:**

```html
<p class="chai-blue-500">Blue text</p>
<span class="chai-green-900">Dark green text</span>
```

---

### Background Colors

Background color utilities. Prefix with `chai-bg-`.

- **Colors**: Same color names as text colors (e.g., `chai-bg-red-500`, `chai-bg-blue-100`)
- **White**: `chai-bg-white`

**Example:**

```html
<div class="chai-bg-blue-500 chai-p-4">Blue background</div>
```

---

### Gradients

Predefined gradient backgrounds.

| Class                    | Direction    | Colors         |
| ------------------------ | ------------ | -------------- |
| `chai-bg-gradient-to-r`  | Right        | Blue → Purple  |
| `chai-bg-gradient-to-b`  | Bottom       | Green → Yellow |
| `chai-bg-gradient-to-br` | Bottom Right | Red → Blue     |

**Example:**

```html
<div class="chai-bg-gradient-to-r chai-p-8">Gradient background</div>
```

---

### Display & Layout

#### Display Properties

- `chai-inline` - `display: inline`
- `chai-block` - `display: block`
- `chai-inline-block` - `display: inline-block`
- `chai-hidden` - `display: none`
- `chai-flex` - `display: flex`
- `chai-inline-flex` - `display: inline-flex`
- `chai-grid` - `display: grid`
- `chai-inline-grid` - `display: inline-grid`

#### Flexbox Direction

- `chai-flex-row` - Row direction (default)
- `chai-flex-row-reverse` - Row reversed
- `chai-flex-col` - Column direction
- `chai-flex-col-reverse` - Column reversed

#### Flex Wrapping

- `chai-flex-wrap` - Wrap items
- `chai-flex-nowrap` - No wrapping (default)
- `chai-flex-wrap-reverse` - Wrap reversed

#### Justify Content (Main Axis)

- `chai-justify-start` - `flex-start`
- `chai-justify-end` - `flex-end`
- `chai-justify-center` - `center`
- `chai-justify-between` - `space-between`
- `chai-justify-around` - `space-around`
- `chai-justify-evenly` - `space-evenly`

#### Align Items (Cross Axis)

- `chai-items-start` - `flex-start`
- `chai-items-end` - `flex-end`
- `chai-items-center` - `center`
- `chai-items-baseline` - `baseline`
- `chai-items-stretch` - `stretch` (default)

**Example:**

```html
<div class="chai-flex chai-flex-row chai-justify-center chai-items-center">
  <div>Centered content</div>
</div>
```

---

### Positioning

#### Position Types

- `chai-static` - `position: static` (default)
- `chai-relative` - `position: relative`
- `chai-absolute` - `position: absolute`
- `chai-fixed` - `position: fixed`
- `chai-sticky` - `position: sticky`

#### Position Offsets

- **Top**: `chai-top-0`, `chai-top-4` (16px), `chai-top-8` (32px)
- **Left**: `chai-left-0`, `chai-left-4` (16px), `chai-left-8` (32px)
- **Right**: `chai-right-0`, `chai-right-4` (16px)
- **Bottom**: `chai-bottom-0`, `chai-bottom-4` (16px)

**Example:**

```html
<div class="chai-relative chai-bg-yellow-100 chai-p-4">
  Parent
  <div class="chai-absolute chai-top-0 chai-left-0 chai-bg-red-500">
    Absolute child
  </div>
</div>
```

---

### Spacing

#### Padding

Dynamic padding utilities (multiples of 4px). Format: `chai-p{side}-{value}`

- `chai-p-{n}` - All sides: `4n` px
- `chai-pt-{n}` - Top
- `chai-pb-{n}` - Bottom
- `chai-pl-{n}` - Left
- `chai-pr-{n}` - Right

**Examples:**

- `chai-p-5` → 20px padding
- `chai-p-10` → 40px padding
- `chai-pt-4` → 16px top padding
- `chai-mb-3` → 12px bottom margin

#### Margin

- `chai-m-{n}` - All sides: `4n` px
- `chai-mt-{n}` - Top
- `chai-mb-{n}` - Bottom
- `chai-ml-{n}` - Left
- `chai-mr-{n}` - Right

**Example:**

```html
<div class="chai-p-5 chai-m-10">Spaced element</div>
```

---

### Borders

#### Border Colors

All color utilities from Colors section (e.g., `chai-border-blue-500`, `chai-border-red-100`)

#### Border Styles

- `chai-border-solid`
- `chai-border-dashed`
- `chai-border-dotted`
- `chai-border-double`
- `chai-border-hidden`
- `chai-border-none`

#### Border Width

- `chai-border-0` - 0px
- `chai-border-2` - 2px
- `chai-border-4` - 4px
- `chai-border-8` - 8px

#### Border Radius

- `chai-rounded-xs` - 0.125rem
- `chai-rounded-sm` - 0.25rem
- `chai-rounded-md` - 0.375rem
- `chai-rounded-lg` - 0.5rem
- `chai-rounded-xl` - 0.75rem
- `chai-rounded-none` - 0
- `chai-rounded-full` - 9999px (circle)
- `chai-rounded-{n}` - Dynamic: `n` px

**Example:**

```html
<div
  class="chai-border-2 chai-border-solid chai-border-blue-500 chai-rounded-lg chai-p-4"
>
  Bordered box
</div>
```

---

### Shadows

#### Box Shadows

- `chai-shadow-sm` - Small shadow
- `chai-shadow-md` - Medium shadow
- `chai-shadow-lg` - Large shadow
- `chai-shadow-xl` - Extra large shadow
- `chai-shadow-2xl` - 2x large shadow
- `chai-shadow-none` - No shadow

#### Text Shadows

- `chai-text-shadow-xs` - Extra small
- `chai-text-shadow-sm` - Small
- `chai-text-shadow-md` - Medium
- `chai-text-shadow-lg` - Large
- `chai-text-shadow-none` - No shadow

**Example:**

```html
<div class="chai-shadow-lg chai-p-4">Elevated box</div>
<p class="chai-text-shadow-md">Text with shadow</p>
```

---

### Typography

#### Text Alignment

- `chai-text-left` - Left aligned
- `chai-text-center` - Center aligned
- `chai-text-right` - Right aligned

#### Font Weight

- `chai-font-light` - 300
- `chai-font-normal` - 400 (default)
- `chai-font-medium` - 500
- `chai-font-semibold` - 600
- `chai-font-bold` - 700
- `chai-font-extrabold` - 800

#### Text Transform

- `chai-uppercase` - All caps
- `chai-lowercase` - All lowercase
- `chai-capitalize` - Capitalize

#### Text Decoration

- `chai-underline` - Underline
- `chai-line-through` - Strikethrough
- `chai-no-underline` - None

#### Font Size (Dynamic)

- `chai-fs-{n}` - Font size: `n` px

**Examples:**

```html
<h1 class="chai-fs-32 chai-font-bold chai-text-center">Heading</h1>
<p class="chai-fs-14 chai-uppercase chai-text-gray-500">Small caps</p>
```

---

### Buttons

#### Button Style

- `chai-button` - Default button styling (orange background, white text)

Apply color utilities to override:

```html
<button class="chai-button">Default Button</button>
<button class="chai-button chai-bg-blue-500">Blue Button</button>
<button class="chai-button chai-bg-red-500">Red Button</button>
```

---

### Transforms

#### Scale

- `chai-scale-90` - Scale to 90%
- `chai-scale-100` - Scale to 100% (normal)
- `chai-scale-110` - Scale to 110%

#### Rotate

- `chai-rotate-45` - Rotate 45°
- `chai-rotate-90` - Rotate 90°
- `chai-rotate-45` (with minus) - Rotate -45°

#### Opacity

- `chai-opacity-25` - 25% opacity
- `chai-opacity-50` - 50% opacity
- `chai-opacity-75` - 75% opacity
- `chai-opacity-100` - 100% opacity (opaque)

**Example:**

```html
<div class="chai-scale-110 chai-opacity-75">Scaled and transparent</div>
```

---

### Z-Index

Layer elements with stacking context.

- `chai-z-0`, `chai-z-10`, `chai-z-20`, `chai-z-30`, `chai-z-40`, `chai-z-50`

**Example:**

```html
<div class="chai-z-10">Behind</div>
<div class="chai-z-50">In front</div>
```

---

### Sizing

#### Width & Height

Dynamic sizing utilities:

- `chai-w-{n}` - Width: `n` px
- `chai-h-{n}` - Height: `n` px
- `chai-w-full` - Width: 100%
- `chai-h-full` - Height: 100%
- `chai-min-h-screen` - Min height: 100vh

**Example:**

```html
<div class="chai-w-200 chai-h-100 chai-bg-blue-500"></div>
<div class="chai-w-full chai-min-h-screen">Full screen</div>
```

---

### Box Model

- `chai-box-border` - `box-sizing: border-box` (include border/padding in width)
- `chai-box-content` - `box-sizing: content-box` (exclude from width)

---

### Cursor

Controls mouse cursor appearance.

- `chai-cursor-pointer` - Pointer hand
- `chai-cursor-default` - Default arrow
- `chai-cursor-not-allowed` - Prohibited
- `chai-cursor-text` - Text selection
- `chai-cursor-move` - Move/drag

**Example:**

```html
<div class="chai-cursor-pointer">Clickable area</div>
```

---

### Visibility & Overflow

#### Visibility

- `chai-visible` - `visibility: visible` (takes up space)
- `chai-invisible` - `visibility: hidden` (hidden but takes space)

#### Overflow

- `chai-overflow-hidden` - Clip overflow
- `chai-overflow-visible` - Show overflow (default)
- `chai-overflow-scroll` - Scrollable

---

### Selection

- `chai-select-none` - Prevent text selection
- `chai-select-text` - Allow text selection
- `chai-select-all` - Select all text

---

### Whitespace & Lists

#### Whitespace

- `chai-whitespace-normal` - Normal wrapping
- `chai-whitespace-nowrap` - No wrapping
- `chai-whitespace-pre` - Preserve whitespace

#### List Style

- `chai-list-none` - No bullets
- `chai-list-disc` - Bullet points
- `chai-list-decimal` - Numbered list

**Example:**

```html
<ul class="chai-list-none">
  <li>Item without bullet</li>
</ul>
```

---

### Outline

- `chai-outline-none` - No outline
- `chai-outline-black` - Black outline
- `chai-outline-white` - White outline

---

### Grid

#### Grid Display

- `chai-grid` - `display: grid`
- `chai-inline-grid` - `display: inline-grid`

#### Grid Columns (Dynamic)

- `chai-grid-cols-{n}` - Create `n` columns

**Example:**

```html
<div class="chai-grid chai-grid-cols-3">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

---

### Gap (Dynamic)

Space between flex/grid items.

- `chai-gap-{n}` - Gap: `4n` px

**Example:**

```html
<div class="chai-flex chai-gap-4">
  <div>Item with 16px gap</div>
</div>
```

---

## Dynamic Utilities

Dynamic utilities accept numeric or string parameters. Format: `chai-{key}-{value}`

| Key                    | Parameter | Result              | Example                        |
| ---------------------- | --------- | ------------------- | ------------------------------ |
| `p`                    | number    | `4n` px padding     | `chai-p-5` → 20px              |
| `m`                    | number    | `4n` px margin      | `chai-m-3` → 12px              |
| `pt`, `pb`, `pl`, `pr` | number    | Directional padding | `chai-pt-8` → 32px             |
| `mt`, `mb`, `ml`, `mr` | number    | Directional margin  | `chai-mb-2` → 8px              |
| `text`                 | hex/color | Text color          | `chai-text-#ff0000`            |
| `bg`                   | hex/color | Background color    | `chai-bg-#00ff00`              |
| `fs`                   | number    | Font size (px)      | `chai-fs-18` → 18px            |
| `rounded`              | number    | Border radius (px)  | `chai-rounded-12` → 12px       |
| `w`                    | number    | Width (px)          | `chai-w-256` → 256px           |
| `h`                    | number    | Height (px)         | `chai-h-100` → 100px           |
| `gap`                  | number    | Gap (4n px)         | `chai-gap-3` → 12px            |
| `grid-cols`            | number    | Grid columns        | `chai-grid-cols-4` → 4 columns |

**Examples:**

```html
<!-- Custom padding -->
<div class="chai-p-20">80px padding (4 × 20)</div>

<!-- Custom colors -->
<div class="chai-text-#ff6b6b">Custom red text</div>
<div class="chai-bg-#e0e0e0">Custom gray background</div>

<!-- Custom sizes -->
<div class="chai-fs-24">24px font</div>
<div class="chai-w-500">500px width</div>
<div class="chai-rounded-16">16px corners</div>
```

---

## Combining Utilities

Compose multiple utilities to build complex layouts:

```html
<!-- Card design -->
<div class="chai-bg-white chai-rounded-lg chai-shadow-lg chai-p-6 chai-mb-4">
  <h2 class="chai-fs-24 chai-font-bold chai-mb-4">Card Title</h2>
  <p class="chai-text-gray-600 chai-mb-4">Description text</p>
  <button class="chai-button chai-bg-blue-500">Action</button>
</div>

<!-- Responsive grid -->
<div class="chai-grid chai-grid-cols-3 chai-gap-4">
  <div class="chai-bg-red-500 chai-p-8 chai-rounded-lg">Box 1</div>
  <div class="chai-bg-green-500 chai-p-8 chai-rounded-lg">Box 2</div>
  <div class="chai-bg-blue-500 chai-p-8 chai-rounded-lg">Box 3</div>
</div>

<!-- Centered content -->
<div
  class="chai-flex chai-flex-col chai-justify-center chai-items-center chai-min-h-screen chai-bg-gradient-to-r"
>
  <h1 class="chai-fs-48 chai-font-bold chai-white">Centered Title</h1>
</div>
```

---

## File Structure

```
chai-tailwind/
├── index.html      - Demo page with examples
├── script.js       - Applies styles on load and mutations
├── styler.js       - Core styling engine (exports styler function)
├── chai.css        - Optional base styles (if needed)
└── README.md       - This documentation
```

---

## How the Engine Works

### 1. Class Detection

When HTML loads or DOM changes, `script.js` finds all elements with `chai-` prefixed classes.

### 2. Style Lookup

For each class, `styler(className)` is called:

- **Static styles**: Direct lookup (e.g., `chai-button`, `chai-flex`)
- **Dynamic styles**: Parse key-value (e.g., `chai-p-5` → key: `p`, value: `5`)

### 3. CSS Application

Computed styles are applied as inline CSS:

```javascript
element.style.padding = "20px"; // Result of chai-p-5
element.style.display = "flex"; // Result of chai-flex
```

### 4. Class Removal

Original `chai-` classes are removed to keep DOM clean.

---

## Tips & Best Practices

1. **Combine utilities** - Layer multiple classes for complex designs
2. **Use sensible defaults** - Start with common sizes (multiples of 4px)
3. **Maintain consistency** - Stick to the color palette
4. **Test in browser** - View live in `index.html` with local server
5. **Avoid inline styles** - Use only `chai-` classes for styling
6. **Responsive design** - Use flexbox and grid for flexible layouts

---

## Example: Full Layout

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My App</title>
  </head>
  <body class="chai-bg-gray-100 chai-font-normal">
    <!-- Header -->
    <header class="chai-bg-blue-500 chai-text-white chai-p-6">
      <h1 class="chai-fs-32 chai-font-bold">My Application</h1>
    </header>

    <!-- Main Content -->
    <main class="chai-p-6 chai-max-w-1200 chai-mx-auto">
      <!-- Grid of cards -->
      <div class="chai-grid chai-grid-cols-3 chai-gap-6">
        <div class="chai-bg-white chai-rounded-lg chai-shadow-lg chai-p-6">
          <h2 class="chai-fs-20 chai-font-bold chai-mb-4">Card 1</h2>
          <p class="chai-text-gray-600 chai-mb-4">Content goes here</p>
          <button class="chai-button chai-bg-green-500">Learn More</button>
        </div>
        <!-- More cards... -->
      </div>
    </main>

    <!-- Footer -->
    <footer
      class="chai-bg-gray-900 chai-text-white chai-p-8 chai-text-center chai-mt-8"
    >
      <p>© 2024 My Application</p>
    </footer>

    <script type="module" src="script.js"></script>
  </body>
</html>
```

---

**Happy styling with ChaiTailwind! 🎨**
