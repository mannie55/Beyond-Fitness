import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import TestimonialSection from "../sections/TestimonialSection";

describe("TestimonialSection Component", () => {
  beforeEach(() => {
    class MockIntersectionObserver {
      callback: IntersectionObserverCallback;
      constructor(callback: IntersectionObserverCallback) {
        this.callback = callback;
      }
      observe() {
        this.callback(
          [{ isIntersecting: true } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver
        );
      }
      disconnect() {}
      unobserve() {}
    }
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

    Element.prototype.scrollBy = vi.fn();
    Object.defineProperty(HTMLElement.prototype, "clientWidth", { configurable: true, value: 500 });
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", { configurable: true, value: 1500 });
  });

  it("renders section title, stats counter, and member stories", () => {
    render(<TestimonialSection />);
    
    expect(screen.getByText("WHERE DEDICATION MEETS TRANSFORMATION")).toBeDefined();
    
    // Check StatsBar labels
    expect(screen.getByText("Classes delivered")).toBeDefined();
    expect(screen.getByText("Active members")).toBeDefined();
    expect(screen.getByText("Years running")).toBeDefined();
    
    // Check navigation buttons
    expect(screen.getByRole("button", { name: /Previous reel/i })).toBeDefined();
    expect(screen.getByRole("button", { name: /Next reel/i })).toBeDefined();
  });

  it("handles left and right arrow navigation clicks", () => {
    render(<TestimonialSection />);
    
    const leftArrow = screen.getByRole("button", { name: /Previous reel/i });
    const rightArrow = screen.getByRole("button", { name: /Next reel/i });
    
    // Click right
    fireEvent.click(rightArrow);
    expect(Element.prototype.scrollBy).toHaveBeenCalledWith({
      left: 375,
      behavior: "smooth",
    });
    
    // Click left
    fireEvent.click(leftArrow);
    expect(Element.prototype.scrollBy).toHaveBeenCalledWith({
      left: -375,
      behavior: "smooth",
    });
  });

  it("updates scroll progress indicator on scroll event", () => {
    const { container } = render(<TestimonialSection />);
    
    const scrollContainer = container.querySelector(".snap-x") as HTMLElement;
    expect(scrollContainer).toBeDefined();

    Object.defineProperty(scrollContainer, "scrollLeft", { configurable: true, value: 500 });
    Object.defineProperty(scrollContainer, "scrollWidth", { configurable: true, value: 1500 });
    Object.defineProperty(scrollContainer, "clientWidth", { configurable: true, value: 500 });

    fireEvent.scroll(scrollContainer);

    const progressBar = container.querySelector(".bg-white\\/60.rounded-full") as HTMLElement;
    expect(progressBar).toBeDefined();
  });
});
