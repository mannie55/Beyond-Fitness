# Skill: Build Reusable Component

Use this skill when creating low-level, reusable components (e.g., buttons, inputs, cards, dialogs).

## 1. When to Use
- Adding UI components to the shared design system.
- Refactoring repeating elements into a single reusable component.

## 2. Required Inputs
- Component functionality requirements.
- Target props and event handlers.
- Design specifications (states: default, hover, active, focus, disabled).

## 3. Workflow
1. **Search Existing**: Scan the component library to confirm the component does not already exist.
2. **Define Props**: Write a clear TypeScript interface for props. Restrict props to 5 or fewer.
3. **Draft markup**: Write semantic HTML structures.
4. **Style Component**: Use Tailwind utility classes. Reference semantic tokens from [rules/ui.md](file:///home/chris/beyondfitness/beyond-fitness/rules/ui.md). Do not use inline styles.
5. **State Management**: Keep state local. If interactive, implement accessible handlers.
6. **Focus States**: Add explicit keyboard focus states (`focus-visible:outline-...`).
7. **Write Tests**: Create unit tests verifying rendering, user interactions, and prop updates per [rules/testing.md](file:///home/chris/beyondfitness/beyond-fitness/rules/testing.md).

## 4. Expected Output
- Reusable component file (e.g., `components/ui/Button.tsx`).
- Type definition exports.
- Component test file (e.g., `components/ui/__tests__/Button.test.tsx`).

## 5. Quality Checklist
- Component does not import or depend on global layout styling.
- Interactive controls are reachable via tab key.
- Contrast ratio meets accessibility standards defined in [rules/ui.md](file:///home/chris/beyondfitness/beyond-fitness/rules/ui.md).
- Zero typescript errors.

## 6. Completion Checklist
- Unit tests pass without failures.
- Component displays and operates correctly in all target states.
- Code is committed following [rules/git.md](file:///home/chris/beyondfitness/beyond-fitness/rules/git.md).
