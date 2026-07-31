# Skill: Build Form

Use this skill when building form elements, validation schemas, and submission handlers.

## 1. When to Use
- Implementing user inputs (e.g., contact forms, search inputs, sign-ups).
- Setting up validation rules and dynamic form state.

## 2. Required Inputs
- List of form fields and types.
- Validation criteria (required values, string patterns, email formats).
- Submission endpoints or Server Actions.
- Designs for success and error screens.

## 3. Workflow
1. **Design Markup**: Write a semantic `<form>` structure with associated `<label>`, `<input>`, and `<button>` controls.
2. **Define Schema**: Create a validation schema (e.g., Zod) specifying rules for each field.
3. **Form Management**: Use state managers (e.g., `react-hook-form`) to bind fields and manage submission cycles.
4. **Implement Validation**: Display inline error messages. Link errors to target inputs using the `aria-describedby` attribute.
5. **Handle Submission**: Block click events on the submit button while submission is pending. Use Server Actions or API fetch handlers.
6. **Focus Management**: Move keyboard focus to the first invalid field if validation fails on submit.
7. **Write Tests**: Implement unit tests for validation helpers and form submit behaviors per [rules/testing.md](file:///home/chris/beyondfitness/beyond-fitness/rules/testing.md).

## 4. Expected Output
- React Form Component.
- Zod validation schema file.
- Form testing suite.
- API submission route or Server Action.

## 5. Quality Checklist
- Fields have labels and focus outlines per [rules/frontend.md](file:///home/chris/beyondfitness/beyond-fitness/rules/frontend.md).
- Form blocks submissions while fetching or if inputs fail validation.
- All errors are clear and keyboard accessible.
- Submission errors handle server failures gracefully.

## 6. Completion Checklist
- Verify validation rules with correct and incorrect inputs.
- Keyboard navigation flows logically from top to bottom.
- Form unit tests pass.
- Code is committed following [rules/git.md](file:///home/chris/beyondfitness/beyond-fitness/rules/git.md).
