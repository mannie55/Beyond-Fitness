# Skill: Optimize Page Performance

Use this skill when resolving loading performance bottlenecks, layout shifts, or bundle size issues.

## 1. When to Use
- Improving Lighthouse or Core Web Vitals scores.
- Fixing Cumulative Layout Shift (CLS) or slow Largest Contentful Paint (LCP) issues.

## 2. Required Inputs
- Performance report metrics.
- Source code of target page and related visual sub-components.
- Asset files (images, custom fonts).

## 3. Workflow
1. **Analyze Bottlenecks**: Identify elements causing delays using browser performance tools.
2. **Optimize Images**:
   - Apply `priority` prop to images above the fold.
   - Define exact `sizes` parameters to serve smaller layouts to mobile screens.
   - Use correct container constraints to prevent layout jumps per [rules/frontend.md](file:///home/chris/beyondfitness/beyond-fitness/rules/frontend.md).
3. **Optimize Font Loading**: Use `next/font` configuration options to block layout shift during font switches.
4. **Defer Scripts**: Use `next/script` with appropriate loading strategies (e.g., `lazyOnload`, `worker`) for tracking scripts.
5. **Code Splitting**: Dynamic import heavy Client Components using `next/dynamic` to shrink the initial JavaScript bundle size.
6. **Layout Stabilization**: Set explicit dimensions or aspect ratios on media containers to reserve content slots.

## 4. Expected Output
- Optimized page and component files.
- Configuration updates (e.g., next.config.js image rules).

## 5. Quality Checklist
- Cumulative Layout Shift (CLS) reads 0.
- Largest Contentful Paint (LCP) triggers in less than 2.5 seconds.
- Above-the-fold assets load without waiting for secondary script files.
- Page bundle size remains below baseline thresholds.

## 6. Completion Checklist
- Verify that performance is improved using lighthouse tests.
- Build compiles successfully.
- Code is committed following [rules/git.md](file:///home/chris/beyondfitness/beyond-fitness/rules/git.md).
