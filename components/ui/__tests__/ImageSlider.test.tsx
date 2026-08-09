import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, act, fireEvent } from "@testing-library/react";
import ImageSlider from "../ImageSlider";

describe("ImageSlider Component", () => {
  const mockImages = [
    "/images/test-1.jpg",
    "/images/test-2.jpg",
    "/images/test-3.jpg",
  ];

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders without crashing when given no images", () => {
    const { container } = render(<ImageSlider images={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders the correct number of slides including clones for infinite loop", () => {
    const { container } = render(<ImageSlider images={mockImages} />);
    
    // 3 original images + 1 clone at start + 1 clone at end = 5 images total
    const slides = container.querySelectorAll("img[alt^='Slide']");
    expect(slides.length).toBe(5);
  });

  it("auto-advances to the next slide based on the provided interval", () => {
    const customInterval = 3000;
    const { container } = render(<ImageSlider images={mockImages} interval={customInterval} />);
    
    const sliderContainer = container.querySelector(".flex.w-full.h-full") as HTMLElement;
    
    // Initial position is at index 1 (the first real slide)
    expect(sliderContainer.style.transform).toBe("translateX(-100%)");

    // Fast-forward time by customInterval
    act(() => {
      vi.advanceTimersByTime(customInterval);
    });

    // Should have advanced to index 2
    expect(sliderContainer.style.transform).toBe("translateX(-200%)");
    
    // Fast-forward again
    act(() => {
      vi.advanceTimersByTime(customInterval);
    });
    
    // Should have advanced to index 3
    expect(sliderContainer.style.transform).toBe("translateX(-300%)");
  });

  it("navigates forward and backward when arrow buttons are clicked", () => {
    const { container } = render(<ImageSlider images={mockImages} />);
    const sliderContainer = container.querySelector(".flex.w-full.h-full") as HTMLElement;
    
    const nextBtn = screen.getByRole("button", { name: /Next image/i });
    const prevBtn = screen.getByRole("button", { name: /Previous image/i });

    // Initial state (index 1)
    expect(sliderContainer.style.transform).toBe("translateX(-100%)");

    // Click next
    fireEvent.click(nextBtn);
    expect(sliderContainer.style.transform).toBe("translateX(-200%)");

    // Click previous
    fireEvent.click(prevBtn);
    expect(sliderContainer.style.transform).toBe("translateX(-100%)");
  });

  it("handles the infinite loop jump on transition end", () => {
    const { container } = render(<ImageSlider images={mockImages} />);
    const sliderContainer = container.querySelector(".flex.w-full.h-full") as HTMLElement;
    const prevBtn = screen.getByRole("button", { name: /Previous image/i });

    // Click previous to go to the clone of the LAST image (index 0)
    fireEvent.click(prevBtn);
    expect(sliderContainer.style.transform).toBe("translateX(-0%)");

    // Fire the onTransitionEnd event
    fireEvent.transitionEnd(sliderContainer);

    // It should immediately snap to the REAL last image without transition (index 3)
    expect(sliderContainer.style.transform).toBe("translateX(-300%)");
    expect(sliderContainer.className).not.toContain("transition-transform");
  });
});
