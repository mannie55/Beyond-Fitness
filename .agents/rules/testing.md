# Testing and Evaluation Standards

This document defines testing and evaluation standards. All code changes must pass the required tests.

## 1. Unit Testing
- **Scope**: Write unit tests for core utilities, state selectors, form validation logic, helper functions, and custom React hooks.
- **Testing Framework**: Use Vitest or Jest.
- **Component Tests**: Use React Testing Library to test key interactive behaviors. Do not test static presentation components that only receive props and render UI.
- **Mocking**: Mock external API calls, third-party libraries, and CMS clients. Keep unit tests independent of external networks.

## 2. Regression Testing
- **Bug Fix Protocol**: Every bug fix must include a test that recreates the bug. The test must fail before the fix and pass after the fix.
- **Test Integrity**: Do not delete existing tests to resolve failures. If a test fails due to a deliberate change, update the test code to match the new behavior.

## 3. Evaluation (Eval) Suites
- **LLM Evaluators**: When integrating AI generation features, build an evaluation suite that tests output quality using static or model-graded criteria.
- **Pass Threshold**: Define a minimum pass threshold (e.g., 90% correctness rate) for non-deterministic evaluators.
- **Test Set Location**: Store evaluation prompts and reference data sets in the `/evals` directory.

## 4. Completion Requirements
- **Local Validation**: Run the local gate tests before proposing any changes. All tests must be passing.
- **Commit Gate**: Hook test runners into pre-commit scripts to prevent commits when tests fail. Never run commit commands with `--no-verify`.
