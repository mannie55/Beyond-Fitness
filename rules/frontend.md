# Frontend Development Standards

This document defines permanent standards for frontend code. All code must adhere to these patterns.

## 1. Next.js Conventions
- **App Router**: Use the App Router structure. All routes must live within the `app` directory.
- **Server Components first**: Set all components as Server Components by default.
- **Client Components**: Add the `"use client"` directive only when using React hooks (e.g., `useState`, `useEffect`, `useContext`), browser-only APIs, or event listeners. Keep client components as leaf nodes at the bottom of the component tree.
- **Data Fetching**: Fetch data in Server Components or dedicated data access layers. Pass raw data down to Client Components as props. Do not perform direct API calls inside Client Components if they can be fetched during server rendering.

## 2. TypeScript Guidelines
- **Strict Mode**: Maintain strict type safety. The use of `any` is prohibited.
- **Explicit Types**: Define types or interfaces for all component props, API request/response payloads, and helper function signatures.
- **Data Validation**: Validate dynamic external inputs (e.g., API payloads, search parameters) using validation schemas (e.g., Zod) before casting or using the data.
- **No Type Assertions**: Avoid type assertions (e.g., `as TargetType`) unless resolving third-party library typing limitations. Use type guards instead.

## 3. Routing and Navigation
- **Next.js Link**: Always use `next/link` for internal navigation to preserve client-side routing.
- **Dynamic Segments**: Use dynamic segments `[slug]` or catch-all segments `[[...slug]]` cleanly.
- **Navigation Hooks**: Use hooks like `usePathname` and `useSearchParams` inside Client Components only. Avoid accessing window history APIs directly.

## 4. Accessibility (a11y)
- **Semantic HTML**: Build layouts using semantic elements (e.g., `<main>`, `<header>`, `<footer>`, `<section>`, `<article>`, `<nav>`).
- **Focus States**: Do not disable focus states. Using `outline: none` without providing an alternative focus style is prohibited.
- **Form Controls**: Every input element must have an associated `<label>` or appropriate `aria-label` / `aria-labelledby` attributes.
- **Aria Attributes**: Use standard `aria-*` roles and properties for custom interactive UI elements (e.g., modal dialogues, dropdown menus).

## 5. Performance
- **Image Optimization**: Always use `next/image` for images. Define explicit `width` and `height`, or use `fill` with a styled parent container. Avoid using raw `<img>` tags.
- **Font Loading**: Load all fonts using `next/font`. External font links to Google Fonts or other external CDN servers are prohibited.
- **Cumulative Layout Shift (CLS)**: Reserve spaces for dynamic content to avoid layout shifts. Set heights on placeholders or skeletons.

## 6. Styling Integration
- **Design Tokens**: Read styles, colors, and layout configurations from CSS variables defined in [global.css](file:///home/chris/beyondfitness/beyond-fitness/app/globals.css) or equivalent global stylesheets.
- **Tailwind CSS**: Write classes using utility classes configured in `tailwind.config.ts`.
- **Inline Styles**: Avoid inline style attributes except for truly dynamic values, such as CSS variables updated through JavaScript.
