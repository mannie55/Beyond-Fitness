<!-- BEGIN:nextjs-agent-rules -->
# AI Operating System Router

This project uses an AI Operating System to maintain rigorous, predictable, and maintainable software engineering. 

**This file (`AGENTS.md`) is strictly a router.** It contains no implementation details. All logic, architectural constraints, and workflow definitions have been delegated to dedicated rule files and skills inside the `.agents/` directory. 

Do not load all files at once; load only the specific files relevant to your current task to preserve your context window.

## 1. Rules (`.agents/rules/`)
Rules enforce strict boundaries on how to build in this codebase. Read the relevant files before starting work:

- **`frontend.md`**: Read when building Next.js components, defining RSCs vs Client Components, and handling app architecture.
- **`ui.md`**: Read when styling components, using Tailwind tokens, and establishing layout spacing/typography.
- **`animation.md`**: Read when adding interactions, Framer Motion, or CSS transitions.
- **`cms.md`**: Read when integrating headless CMS, schemas, and API data fetching.
- **`testing.md`**: Read when writing unit tests, evals, and separating deterministic from latent testing.
- **`git.md`**: Read for commit standards, safety rules, workflow processes, and completion status protocols.
- **`deep-engineering.md`**: Read when dealing with severe, stubborn bugs, complex architectural changes, or when high-rigor deterministic debugging is required.

## 2. Skills (`.agents/skills/`)
Skills are modular capabilities that teach you *how* to execute complex or repetitive workflows. 
Load a skill's markdown file (e.g., `.agents/skills/build-component.md` or `.agents/skills/deploy-to-vercel/SKILL.md`) only when tasked with that specific workflow.

## 3. Source of Truth Hierarchy
If instructions conflict, always follow the highest level of precedence:
1. **Project Rules** (Files in `.agents/rules/`)
2. **Project Skills** (Files in `.agents/skills/`)
3. **Model Defaults** (Your baseline training)

## 4. Core Principle
Do exactly what is explicitly requested, perfectly and with completeness. Do not modify, refactor, or touch code outside the immediate scope unless explicitly authorized. 
<!-- END:nextjs-agent-rules -->
