# Skill: Fix Bug

Use this skill when diagnosing, replicating, and fixing issues in the application.

## 1. When to Use
- Repairing errors, logic bugs, visual regressions, or accessibility defects.
- Implementing patches for recurring issues.

## 2. Required Inputs
- Bug description and replication instructions.
- System error logs or stack traces.
- Source code of the affected components.

## 3. Workflow
1. **Replicate Locally**: Follow the instructions to trigger the error in the local development context.
2. **Write Failing Test**: Create an automated test in the relevant test suite (Vitest/Jest) that fails due to this specific issue as required by [rules/testing.md](file:///home/chris/beyondfitness/beyond-fitness/rules/testing.md).
3. **Trace Root Cause**: Inspect variables, review functions, and trace execution paths to locate the source of the failure.
4. **Implement Surgical Fix**: Write the minimum amount of code required to fix the bug. Do not make unrelated styling updates or refactors unless requested.
5. **Verify Fix**: Run the new regression test. Verify it passes successfully.
6. **Check Regressions**: Run the full project test suite to verify no other functionality was broken by the change.
7. **Document Cause**: Write a brief description of the root cause in the commit message or issue ticket.

## 4. Expected Output
- Corrected code files.
- Automated regression test file.
- Bug resolution summary.

## 5. Quality Checklist
- Bug is completely resolved under all replication conditions.
- Test verifies the specific error condition and prevents future regressions.
- Change budget is minimized to isolate changes.
- CSS styling or HTML structure is preserved if the bug was logic-only.

## 6. Completion Checklist
- Project build runs without compilation issues.
- All unit tests and regression tests pass.
- Code is committed following [rules/git.md](file:///home/chris/beyondfitness/beyond-fitness/rules/git.md).
