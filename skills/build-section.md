# Skill: Build Page Section

Use this skill when building page sections (e.g., Hero, Features, Testimonials) from designs or requirements.

## 1. When to Use
- Creating a major block of content on a page.
- Implementing responsive layout sections that arrange child components.

## 2. Required Inputs
- Design specifications (Figma links or wireframes).
- Content copy and assets.
- Parent page context.

## 3. Workflow
1. **Analyze Design**:
   - If a Figma URL is provided, extract the `fileKey` and `node-id` (if present).
   - Fetch design layouts and contents using the Figma MCP tool `get_figma_data` with the file key and node ID.
   - If image assets or icons are needed, download them to standard directories (e.g., `public/images/`) using `download_figma_images`.
   - Identify the layout structure (e.g., column count, grid alignment) and list needed child components based on the fetched data.
2. **Setup Tokens**: Read existing design system tokens in [rules/ui.md](file:///home/chris/beyondfitness/beyond-fitness/rules/ui.md).
3. **Structure Markup**: Create a semantic HTML container (e.g., `<section>`) with an appropriate ID.
4. **Implement Layout**: Use CSS Grid or Flexbox. Apply mobile-first styling classes.
5. **Add Children**: Place components inside the structure and map content props.
6. **Apply Responsive Rules**: Add desktop breakpoints (`md:`, `lg:`) to structure columns and paddings.
7. **Accessibility Check**: Ensure heading tags (`<h2>`, `<h3>`) follow correct semantic order.

## 4. Expected Output
- A responsive React component representing the page section.
- Section styling integrated into the page template.

## 5. Quality Checklist
- Section vertical padding matches the desktop/mobile scale defined in [rules/ui.md](file:///home/chris/beyondfitness/beyond-fitness/rules/ui.md).
- Layout handles copy length variations without breaking.
- Semantic HTML tags are correct.
- All image elements use `next/image` per [rules/frontend.md](file:///home/chris/beyondfitness/beyond-fitness/rules/frontend.md).

## 6. Completion Checklist
- Section renders correctly at mobile (320px), tablet (768px), and desktop (1280px) widths.
- Accessibility audits show correct heading hierarchy and alt tags.
- Code is committed according to [rules/git.md](file:///home/chris/beyondfitness/beyond-fitness/rules/git.md).
