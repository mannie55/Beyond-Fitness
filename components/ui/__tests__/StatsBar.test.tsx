import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import StatsBar from "../StatsBar";

// Mock IntersectionObserver as a class constructor
beforeEach(() => {
  class MockIntersectionObserver {
    callback: IntersectionObserverCallback;
    constructor(callback: IntersectionObserverCallback) {
      this.callback = callback;
    }
    observe() {
      // Fire callback immediately with isIntersecting: true
      this.callback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver
      );
    }
    disconnect() {}
    unobserve() {}
  }
  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
});

describe("StatsBar Component", () => {
  it("renders all default stat labels", () => {
    render(<StatsBar />);

    expect(screen.getByText("Classes delivered")).toBeDefined();
    expect(screen.getByText("Active members")).toBeDefined();
    expect(screen.getByText("Years running")).toBeDefined();
  });

  it("renders custom stats when provided", () => {
    render(
      <StatsBar
        stats={[
          { value: "100+", label: "Instructors" },
          { value: "10", label: "Locations" },
        ]}
      />
    );

    expect(screen.getByText("Instructors")).toBeDefined();
    expect(screen.getByText("Locations")).toBeDefined();
  });
});
