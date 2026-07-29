# Skill: SEO Optimization

Use this skill when optimizing pages for search engines and social share visibility.

## 1. When to Use
- Building new landing pages or dynamic content templates.
- Resolving SEO defects, index issues, or social card display issues.

## 2. Required Inputs
- Target keywords.
- Descriptive page title and summary text.
- Visual social preview assets (OpenGraph images).
- Content structural outline.

## 3. Workflow
1. **Configure Metadata**: Use Next.js Metadata API exports (static `metadata` object or dynamic `generateMetadata` function).
2. **Populate Meta Tags**:
   - Title: Max 60 characters.
   - Description: Max 160 characters.
   - Canonical URL: Explicit path link.
3. **Setup Social Cards**: Configure `openGraph` and `twitter` parameters. Specify image dimensions, titles, descriptions, and formats.
4. **Enforce Hierarchy**: Audit heading structures to confirm exactly one `<h1>` exists. Group content sections with `<h2>` and subsections with `<h3>`.
5. **Add Structured Data**: Generate JSON-LD schemas (e.g., Article, Product, Organization) and insert them using `<script type="application/ld+json">` tags.
6. **Include Alt Attributes**: Provide descriptions for all image assets per [rules/frontend.md](file:///home/chris/beyondfitness/beyond-fitness/rules/frontend.md).

## 4. Expected Output
- Next.js page or layout with configured metadata.
- JSON-LD Structured Data configuration.
- Correct semantic heading layout.

## 5. Quality Checklist
- Title and description lengths match target guidelines.
- Social share image links point to absolute, resolved assets.
- Heading hierarchy does not skip levels (e.g., going from `<h1>` directly to `<h4>`).
- Content avoids duplication and includes a clean sitemap entry.

## 6. Completion Checklist
- Preview page metadata with checking tools.
- Verify that structured data parses without warnings.
- Code is committed following [rules/git.md](file:///home/chris/beyondfitness/beyond-fitness/rules/git.md).
