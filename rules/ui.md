# UI and Design System Standards

This document defines standards for layout, styling, typography, and spacing. All visual work must align with these directives.

## 1. Spacing System
- **Scale**: Use the rem-based spacing scale for all padding, margins, and gaps.
  - Scale values: `0.25rem` (4px), `0.5rem` (8px), `0.75rem` (12px), `1rem` (16px), `1.5rem` (24px), `2rem` (32px), `3rem` (48px), `4rem` (64px), `6rem` (96px), `8rem` (128px).
  - Do not use arbitrary spacing values.
- **Section Spacing**: Maintain consistent vertical padding for page sections:
  - Mobile sections: `3rem` to `4rem` padding-top and padding-bottom.
  - Desktop sections: `6rem` to `8rem` padding-top and padding-bottom.

## 2. Typography
- **Font Sizes**: Set font sizes using rem units relative to the root font-size.
- **Line-Height**: Use unitless numbers for line-height (e.g., `1.4`, `1.5`, `1.6`) to ensure correct inheritance. Never use pixels or rems for line-height.
- **Typeface Limit**: Do not use more than two font families on a page: one for display/headings and one for body copy.
- **Font Scaling**: Use a typographic ratio (e.g., 1.25 Major Third or 1.333 Perfect Fourth) to define hierarchy.

## 3. Design Tokens
- **CSS Variables**: Define all primitive and semantic tokens in the root stylesheet as custom CSS properties.
- **Semantic Mapping**: Map primitive variables to semantic functions:
  - Example: Map `--blue-600` (primitive) to `--color-button-primary` (semantic).
  - Components must reference semantic variables instead of primitive colors.
- **Hardcoded Colors**: Hex codes or raw RGB colors inside component files are prohibited.

## 4. Grids and Layouts
- **CSS Grid**: Use CSS Grid for two-dimensional layouts (e.g., page layouts, dashboards, photo grids).
- **Flexbox**: Use Flexbox for one-dimensional layouts (e.g., button groups, header bars, lists).
- **Content Width Limit**: Set a maximum content width token (e.g., `72rem` or `80rem`) on content containers. Do not let text lines extend across the full viewport width.

## 5. Responsive Design
- **Mobile-First**: Write mobile styles as the default layout. Layer larger screen layouts using `min-width` media queries.
- **No max-width media queries**: Avoid using `max-width` queries to handle device sizes. Keep layout styles additive.
- **Fluid Layouts**: Use percentages, grid columns, or flex-wrap to let layouts adjust naturally before a breakpoint triggers.
