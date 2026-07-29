# Animation and Motion Standards

This document defines standards for animations, transitions, and interactive visual effects using GSAP and Framer Motion.

## 1. Tool Selection
- **GSAP**: Use GSAP for complex timelines, scroll-driven behaviors, and multi-step animations.
- **Framer Motion**: Use Framer Motion for React state-based transitions, page entry/exit animations, and simple hover/active component animations.
- **CSS Transitions**: Use native CSS transitions for basic state updates (e.g., hover colors, opacity, button focus states).

## 2. Accessibility and Reduced Motion
- **Media Query Check**: Always respect the user settings for reduced motion.
- **Framer Motion Setup**: Use the `useReducedMotion` hook to conditionally disable or simplify animations.
- **GSAP / CSS Setup**: Wrap motion animations in a `@media (prefers-reduced-motion: no-preference)` media query or use GSAP matchMedia to skip animations when reduced motion is preferred.

## 3. Durations and Easing
- **Consistency**: Keep transition times between `0.2s` and `0.5s` for standard interface updates. Use longer times only for slow decorative transitions.
- **Easing Defaults**: Use clean easings like `power2.out` or `power3.out` in GSAP. Avoid harsh linear timings unless animating linear indicators.
- **Physics-Based Motion**: Use Framer Motion spring physics for realistic physical responses instead of hardcoded durations.

## 4. Animation Cleanup
- **GSAP Context**: Always wrap GSAP animations in a `gsap.context()` inside a React `useEffect` or `useLayoutEffect` hook. Run the cleanup function on component unmount to prevent memory leaks and duplicate triggers.
- **ScrollTrigger Reset**: Kill and refresh ScrollTrigger instances when components unmount or layout updates occur.
- **Framer Motion Exit**: Wrap components that animate out in `AnimatePresence` and define the `exit` prop.

## 5. Performance Optimization
- **GPU Properties**: Animate transform properties (`x`, `y`, `scale`, `rotation`) and `opacity` only.
- **Properties to Avoid**: Do not animate properties that trigger browser layout passes (e.g., `width`, `height`, `top`, `left`, `margin`, `padding`).
- **Will-Change**: Use the `will-change` CSS property on elements before starting heavy animations, and remove it when completed if necessary.
