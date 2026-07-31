# Skill: Build Animation

Use this skill when adding interactive transitions, motion effects, or scroll-driven timelines.

## 1. When to Use
- Implementing page transitions, hover states, scroll triggers, or entry animations.
- Improving component interactivity with dynamic motion.

## 2. Required Inputs
- Target elements and DOM references.
- Animation requirements (triggers, easing, delay, duration).
- Accessibility settings (reduced motion options).

## 3. Workflow
1. **Choose Engine**: Select the animation tool (GSAP, Framer Motion, or CSS) using [rules/animation.md](file:///home/chris/beyondfitness/beyond-fitness/rules/animation.md).
2. **Setup DOM References**: Use React `useRef` to target elements for direct manipulation (essential for GSAP).
3. **Draft Timelines**:
   - For GSAP: Create timeline sequences inside a `gsap.context()` container.
   - For Framer Motion: Define animation variants and layout IDs.
4. **Define Easing and Speed**: Use standard easings (e.g., `power2.out`) and duration values (0.2s - 0.5s) to match the layout system.
5. **Handle Reduced Motion**: Apply conditional styles or hooks to disable animations when the user requests reduced motion.
6. **Implement Cleanup**: Return unmount handlers that kill GSAP context, clear event listeners, and destroy ScrollTrigger instances.
7. **Optimize GPU rendering**: Use properties like `x`, `y`, `scale`, and `opacity` to avoid layout re-calculation steps.

## 4. Expected Output
- A React component with built-in animations.
- Timeline cleanup configurations.
- Custom animation hooks (if reusable).

## 5. Quality Checklist
- TIMELINES ARE KILLED AND CLEANED UP ON UNMOUNT (no memory leaks).
- Animations run using GPU properties only (no updates to top/left/width/height).
- Page content does not jump or shift when the animation begins.
- Motion scales back gracefully when prefers-reduced-motion is active.

## 6. Completion Checklist
- Verify animations work correctly across different browsers.
- Performance profiling verifies zero layout thrashing or lag.
- Code is committed following [rules/git.md](file:///home/chris/beyondfitness/beyond-fitness/rules/git.md).
