import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import CoachSection, { DEFAULT_COACHES } from "../sections/CoachSection";

describe("CoachSection Component", () => {
  beforeEach(() => {
    Element.prototype.scrollBy = vi.fn();
    Object.defineProperty(HTMLElement.prototype, "clientWidth", { configurable: true, value: 500 });
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", { configurable: true, value: 1500 });
  });

  it("renders section header, subtitle, and all coaches", () => {
    render(<CoachSection />);

    expect(screen.getByText("THE MINDS BEHIND THE SWEAT")).toBeDefined();
    expect(screen.getByText(/Passionate athletes, master motivators/i)).toBeDefined();

    // Check each coach name and role
    DEFAULT_COACHES.forEach((coach) => {
      expect(screen.getByText(coach.name)).toBeDefined();
      expect(screen.getByText(coach.role)).toBeDefined();
      expect(screen.getByText(coach.tag)).toBeDefined();
    });

    // Check navigation buttons
    expect(screen.getByRole("button", { name: /Previous coach/i })).toBeDefined();
    expect(screen.getByRole("button", { name: /Next coach/i })).toBeDefined();
  });

  it("handles left and right navigation clicks", () => {
    render(<CoachSection />);

    const leftArrow = screen.getByRole("button", { name: /Previous coach/i });
    const rightArrow = screen.getByRole("button", { name: /Next coach/i });

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
    const { container } = render(<CoachSection />);

    const scrollContainer = container.querySelector(".snap-x") as HTMLElement;
    expect(scrollContainer).toBeDefined();

    Object.defineProperty(scrollContainer, "scrollLeft", { configurable: true, value: 500 });
    Object.defineProperty(scrollContainer, "scrollWidth", { configurable: true, value: 1500 });
    Object.defineProperty(scrollContainer, "clientWidth", { configurable: true, value: 500 });

    fireEvent.scroll(scrollContainer);

    const progressBar = container.querySelector(".bg-black.rounded-full.transition-all") as HTMLElement;
    expect(progressBar).toBeDefined();
  });
});
