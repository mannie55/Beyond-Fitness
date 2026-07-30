import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import StatsBar from "../StatsBar";

describe("StatsBar Component", () => {
  it("renders all default stat values and labels", () => {
    render(<StatsBar />);

    expect(screen.getByText("15K+")).toBeDefined();
    expect(screen.getByText("Classes delivered")).toBeDefined();
    expect(screen.getByText("500+")).toBeDefined();
    expect(screen.getByText("Active members")).toBeDefined();
    expect(screen.getByText("5+")).toBeDefined();
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

    expect(screen.getByText("100+")).toBeDefined();
    expect(screen.getByText("Instructors")).toBeDefined();
    expect(screen.getByText("10")).toBeDefined();
    expect(screen.getByText("Locations")).toBeDefined();
  });
});
