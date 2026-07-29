# Skill: Integrate Headless CMS

Use this skill when fetching, binding, and caching data from a Headless CMS (Sanity, Payload, Storyblok, Hygraph).

## 1. When to Use
- Connecting page layouts or sections to dynamic CMS fields.
- Setting up static generation (ISR) and real-time previews for editors.

## 2. Required Inputs
- Target CMS instance access.
- CMS document schemas.
- Visual component to display the data.
- Caching and revalidation requirements.

## 3. Workflow
1. **Define Schema**: Set up or review the CMS fields (e.g., text, images, arrays) in the CMS dashboard or local config.
2. **Draft Queries**: Write GROQ or GraphQL queries. Filter for required fields to keep payloads minimal as defined in [rules/cms.md](file:///home/chris/beyondfitness/beyond-fitness/rules/cms.md).
3. **Generate Types**: Run the type generation script to create static TypeScript interfaces from the CMS schemas.
4. **Create Fetch Services**: Implement fetch calls inside a dedicated service layer (e.g., `services/cms/`). Include caching parameters (`next: { tags: [...] }`).
5. **Setup Draft Mode**: Wrap the query logic with preview checks to load draft data when Draft Mode is active.
6. **Create Revalidation Endpoints**: Write a Next.js API route that handles incoming CMS webhooks to trigger revalidation.
7. **Bind to Components**: Pass fetch outputs to target UI components. Use safety checks (e.g., optional chaining) to prevent crashes when fields are null.

## 4. Expected Output
- CMS queries file.
- Generated TypeScript types.
- Data fetching utility function with revalidation tags.
- Revalidation API handler route.
- Interactive Draft Mode preview components.

## 5. Quality Checklist
- Data queries are strictly separated from UI visual layouts.
- Caching rules match the page refresh frequency goals in [rules/cms.md](file:///home/chris/beyondfitness/beyond-fitness/rules/cms.md).
- Images use Next.js dynamic image assets with responsive dimensions.
- Component handles missing/null CMS fields gracefully.

## 6. Completion Checklist
- Page content updates correctly when draft preview is turned on.
- Node.js build compiles without schema type warnings.
- CMS Webhooks successfully clear caches.
- Code is committed following [rules/git.md](file:///home/chris/beyondfitness/beyond-fitness/rules/git.md).
