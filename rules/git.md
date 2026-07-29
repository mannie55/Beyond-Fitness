# Git and Version Control Standards

This document defines standards for git workflows, commit messages, and repository hygiene.

## 1. Branching Strategy
- **Feature Branches**: Create a dedicated branch for every new feature or bug fix. Name branches based on the scope:
  - `feat/feature-name` for new additions.
  - `fix/bug-name` for fixes.
  - `docs/doc-updates` for documentation changes.
- **Main Branch**: Keep the main branch stable. Direct pushes to the main branch are prohibited on shared repositories.

## 2. Commit Rules
- **Proactive Commits**: Commit changes after completing each distinct subtask. Do not bundle multiple unrelated features into a single massive commit.
- **Secrets Prevention**: Never commit API keys, private tokens, or environmental variables. Check the `.gitignore` configuration before staging files.
- **Binaries and Weights**: Do not commit compiled outputs, large asset binaries, or AI weights to the repository. Use Git LFS or external cloud storage.

## 3. Commit Message Format
- **Conventional Commits**: Format commit messages using the conventional commit style:
  - Format: `<type>(scope): <description>`
  - Types: `feat` (new feature), `fix` (bug fix), `docs` (documentation), `style` (formatting/css changes), `refactor` (code reorganization), `test` (adding/updating tests), `chore` (build tasks/dependencies).
  - Example: `feat(cms): add content fetch hook for homepage hero`
- **Body**: Provide detailed explanations for complex changes in the commit body when necessary.

## 4. PR Expectations
- **Description**: Document what changes were made, how they were tested, and what issue they resolve.
- **CI Checks**: Ensure that all automated tests, linting scripts, and build processes pass before requesting a review.
