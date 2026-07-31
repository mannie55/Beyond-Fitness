# Git and Version Control Standards

This document defines the git workflow, commit strategy, and repository hygiene for all development work.

---

# 1. Core Philosophy

Git exists to capture meaningful progress, not typing activity.

A commit should represent a complete, working unit of work that can be understood, tested, reverted, or reviewed independently.

Favor fewer, high-quality commits over many small checkpoint commits.

A feature that required twenty prompts should still become one or two logical commits if it represents one cohesive change.

---

# 2. Branching Strategy

Every new feature, bug fix, or refactor should be developed on its own branch.

Branch naming:

- `feat/feature-name`
- `fix/bug-name`
- `refactor/component-name`
- `docs/update-name`
- `test/component-name`

Examples:

```text
feat/pricing-page
feat/cms-integration
fix/mobile-navigation
refactor/hero-animation
```

Keep `main` stable and production-ready.

Never develop directly on `main` unless working in a personal repository where the user explicitly requests it.

---

# 3. Commit Strategy

## Commit by Outcome, Not by Prompt

The number of user prompts should never determine the number of commits.

Instead, commit when a logical unit of work is complete.

Examples of logical units:

- Complete homepage hero
- Finish CMS integration
- Complete authentication flow
- Finish pricing page
- Resolve mobile navigation bug
- Complete animation system

Avoid committing intermediate edits.

---

## Do NOT Commit For

- Renaming variables
- Adjusting spacing
- Fixing one lint error
- Updating imports
- Temporary debugging
- Work that is still being iterated on
- Every assistant response

These changes belong inside the eventual feature commit.

---

## Commit When

Create a commit only when ALL of the following are true:

- Requested work is complete
- Feature or fix behaves correctly
- Build succeeds
- Lint passes
- Tests pass (where applicable)
- No temporary code remains

If work is still actively evolving, continue editing instead of committing.

---

# 4. Work-in-Progress (WIP)

Avoid WIP commits by default.

Create a WIP commit only when:

- Switching to another task
- Ending the work session
- Creating a recovery point before a risky refactor
- Explicitly requested by the user

Format:

```text
wip: refactor homepage sections
```

WIP commits should never be merged into production.

---

# 5. Push Strategy

A commit does NOT automatically require a push.

Push only when:

- The feature is complete
- A bug fix is complete
- A PR is ready
- The user explicitly requests a push
- Work needs to be backed up before context switching

Multiple commits may be pushed together.

---

# 6. Commit Message Format

Use Conventional Commits.

Format:

```text
<type>(scope): description
```

Types:

- feat
- fix
- refactor
- docs
- style
- test
- chore

Examples:

```text
feat(hero): redesign homepage hero

fix(nav): resolve mobile overflow

refactor(cms): simplify homepage queries

docs(ai): update workflow documentation
```

Write commit messages that describe the completed outcome, not the implementation details.

---

# 7. Repository Hygiene

Before every commit:

- Verify `.gitignore` is correct
- Never commit secrets
- Never commit `.env` files
- Never commit API keys or tokens
- Never commit build outputs
- Never commit large binaries or AI model weights

Use Git LFS or external storage where appropriate.

---

# 8. Pull Requests

Before opening a Pull Request:

- Ensure the feature is complete
- Run all required tests
- Verify the project builds successfully
- Remove debug code
- Remove commented-out code
- Update documentation if necessary

PR descriptions should include:

- What changed
- Why it changed
- How it was tested

---

# 9. AI Agent Workflow

When acting as an AI coding agent:

Treat the user's entire request as a single unit of work.

Do not commit after every prompt.

Continue making changes across multiple conversations until the requested task reaches a logical completion point.

Only create a commit when:

- The requested work is finished.
- The implementation is verified.
- The work represents a meaningful milestone.

If the user continues refining the same feature, continue editing without creating additional commits.

If uncertain whether work is complete, ask before committing.

The default assumption should always be:

> Continue working, not commit.

---

# Guiding Principle

Git should tell the story of the project.

Every commit should represent meaningful progress that another developer can understand by reading the history alone.

Optimize for clarity, not commit count.