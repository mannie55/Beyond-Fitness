# Skill: Debugging GSAP ScrollTrigger on Mobile

**Description:** Use this skill when GSAP ScrollTrigger behaves erratically, triggers loops, or stutters without user interaction on mobile devices (iOS Safari, Android Chrome).

## The Failure Mode
Mobile browsers use elastic scrolling (rubber-banding) and dynamic UI bars (URL bars that hide/show on scroll). This causes `window.scrollY` and `window.innerHeight` to fluctuate constantly, even when the user is not actively swiping. 

If a GSAP `ScrollTrigger` is bound to global window scroll and uses a threshold logic (e.g., hiding a navbar when `scrollDiff > 12`), these micro-jitters accumulate in the background. GSAP will interpret this as a scroll event, causing the animation to trigger in an endless loop or pop in/out randomly while the phone is completely idle.

## The Solution
Never rely on global `ScrollTrigger` micro-thresholds for UI state on mobile without a debounce or velocity check. 

**Standard Fix (The Luxury Standard):**
The safest and most common architectural fix is to use GSAP's `matchMedia` to completely restrict the fragile `ScrollTrigger` logic to desktop/tablet viewports, and leave the element statically positioned (or natively `position: sticky`) on mobile.

```javascript
let ctx = gsap.context(() => {
  const mm = gsap.matchMedia();

  // Restrict sensitive scroll-tracking to Desktop/Tablet ONLY (>= 768px)
  mm.add("(min-width: 48rem)", () => {
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        // Desktop scroll logic here
      }
    });
  });
});
```
This ensures that when the screen shrinks to mobile width, GSAP automatically destroys the ScrollTrigger and reverts any inline styles, leaving the component stable.
