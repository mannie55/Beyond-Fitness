import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ClassCard from "../ClassCard";

describe("ClassCard Component", () => {
  it("renders class card details correctly", () => {
    render(
      <ClassCard
        title="Ride"
        description="A dark room, a heavy beat, a hill that never ends."
        tag="high"
      />
    );

    expect(screen.getByText("Ride")).toBeDefined();
    expect(screen.getByText("A dark room, a heavy beat, a hill that never ends.")).toBeDefined();
    expect(screen.getByText("high")).toBeDefined();
  });

  it("applies hover background class on card wrapper", () => {
    const { container } = render(
      <ClassCard
        title="Lift"
        description="Strength training class"
        tag="strength"
      />
    );

    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain("hover:bg-[#FEF6DF]");
    expect(card.className).toContain("group");
  });
});
