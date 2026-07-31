# Headless CMS Integration Standards

This document defines standards for connecting, querying, and managing data from Headless CMS platforms (Sanity, Payload, Storyblok, Hygraph).

## 1. Schema Philosophy
- **Separation of Concerns**: Separate CMS schemas from the visual presentation layer. Schemas must represent raw data structures, not layout choices.
- **Component Correspondence**: When using block-based CMS structures (like Sanity block content or Storyblok components), match each block to a reusable UI component.
- **Content Validation**: Set validation constraints (e.g., required fields, string limits, image dimensions) in the CMS schema to ensure data consistency before it reaches the frontend.

## 2. Queries and Typing
- **Type Generation**: Generate static TypeScript types from the CMS schema (e.g., using Sanity TypeGen or GraphQL Code Generator). Do not write manual interfaces for CMS payloads.
- **Surgical Queries**: Fetch only the fields needed for the target component. Avoid wildcard queries (e.g., select all fields) to minimize payload sizes.
- **Query Organization**: Group queries in a central file within the service directory (e.g., `services/cms/queries.ts`). Never write raw query strings inline inside UI components.

## 3. Caching and Incremental Static Regeneration (ISR)
- **Tag-Based Revalidation**: Use Next.js fetch tags or path-based revalidation (`revalidateTag`, `revalidatePath`) for on-demand caching updates.
- **Cache Controls**: Define revalidation times explicitly. Avoid caching infinite responses for content that changes frequently.
- **Webhooks**: Configure secure webhooks in the CMS to trigger revalidation endpoints in Next.js when content changes.

## 4. Draft Mode and Live Preview
- **Draft Mode API**: Implement Next.js Draft Mode to display draft content in real time. Use a secure token verification mechanism for draft paths.
- **Preview Clients**: Toggle between a production client (which queries published content with caching) and a preview client (which queries draft data without caching) based on whether draft mode is active.
- **Live Preview Scripts**: Load preview scripts (e.g., Sanity Live Content API or Storyblok Bridge) only when Draft Mode is active.

## 5. Reusable Query Patterns
- **Page Data Pattern**: Standard query pattern to fetch a single page document by its slug.
- **Layout/Global Data Pattern**: Standard query pattern to fetch global site settings, navigation menus, and footers.
- **Localized Query Pattern**: Query structure that handles translation fields based on the locale code parameter.
