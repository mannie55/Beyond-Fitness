# Deep Engineering Protocol

**Trigger:** Read this file ONLY when tasked with a severe, stubborn bug, a complex architectural refactor, or when explicitly requested by the user to "deep dive". Do NOT apply these heavy constraints to routine UI development or rapid prototyping.

## 1. Latent vs. Deterministic Space
- **Stop Guessing:** Do not guess CSS classes or patch code blindly in "latent space". If a bug (like a scroll animation clashing with mobile CSS) is stubborn, shift to "deterministic space".
- **Map the Failure:** You must be able to walk the failure modes out loud. If you don't know exactly *why* it's breaking, you are not ready to fix it. Write a script, use DOM inspector tools, or create an isolation test to prove the bug first.

## 2. The Confusion Protocol
When you hit high-stakes ambiguity (e.g., two plausible architectures, conflicting GSAP scroll behavior vs. native CSS, or destructive operations):
- **STOP.** Do not guess.
- Name the ambiguity in one sentence.
- Present 2-3 concrete options with real trade-offs.
- Ask the user for a decision.

## 3. Search Before Building
1. **Tried-and-true:** Is there a standard library or pattern? Use it.
2. **First-principles:** If the situation is genuinely different, document WHY before writing custom code.

## 4. Completion Status Protocol
At the end of every deep-engineering task, end your response by reporting one of:
- **DONE:** All steps completed, bug provably solved.
- **DONE_WITH_CONCERNS:** Completed, but with architectural trade-offs the user should know about.
- **BLOCKED:** Cannot proceed. State exactly what's blocking you.
- **NEEDS_CONTEXT:** Missing information required to continue.

"Partially fixed" or "let's see if this works" is not an acceptable status.

## 5. Skillify Repeated Failures/Successes
When a stubborn bug is finally fixed, or a complex flow is manually executed twice:
- Stop and codify it. Write a new skill in `.agents/skills/` documenting the failure mode and the solution so the same mistake is never made twice.
