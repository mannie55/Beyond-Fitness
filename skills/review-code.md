# Skill: Review Code Quality

Use this skill before staging commits or requesting branch merges to ensure codebase standards are met.

## 1. When to Use
- Pre-commit code validation steps.
- Code review checks on foreign pull requests.

## 2. Required Inputs
- Git diff of the proposed changes.
- Reference rules in the `/rules` directory.

## 3. Workflow
1. **Verify Scope**: Confirm changes remain strictly inside the task scope. Look for unsolicited refactoring or changes in unrelated files as banned in [AGENTS.md](file:///home/chris/beyondfitness/beyond-fitness/AGENTS.md).
2. **Review Architecture**: Check that changes obey the services-first layout. Check that boundaries are respected and contracts are used.
3. **Verify Standards**:
   - Check [rules/frontend.md](file:///home/chris/beyondfitness/beyond-fitness/rules/frontend.md) for Next.js, React, and TypeScript rules.
   - Check [rules/ui.md](file:///home/chris/beyondfitness/beyond-fitness/rules/ui.md) for styling tokens and units (rem vs px, no hardcoded colors).
   - Check [rules/animation.md](file:///home/chris/beyondfitness/beyond-fitness/rules/animation.md) for cleanup logic.
4. **Audit Accessibility**: Verify semantic markup, alt text, form labeling, and outline visibility settings.
5. **Check Testing**: Confirm that matching unit test files exist for modifications and that the regression test suite passes per [rules/testing.md](file:///home/chris/beyondfitness/beyond-fitness/rules/testing.md).

## 4. Expected Output
- Code validation notes.
- Corrected code files if defects are discovered.

## 5. Quality Checklist
- Code is DRY and contains no duplicate helper functions.
- Zero TypeScript warnings or `any` types.
- Minimum change budget was respected.
- Visual elements are untouched if the task was logic-only (and vice versa).

## 6. Completion Checklist
- Verify that the local test suite runs without errors.
- Confirm there are no compilation warnings.
- Changes are committed following [rules/git.md](file:///home/chris/beyondfitness/beyond-fitness/rules/git.md).
