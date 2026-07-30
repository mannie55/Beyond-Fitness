import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FeatureItem from "../FeatureItem";

describe("FeatureItem Component", () => {
  it("renders the title and hides description by default", () => {
    const { container } = render(
      <FeatureItem
        title="BOUTIQUE PREMIUM EXPERIENCE"
        description="Curated classes, immersive spaces."
      />
    );

    expect(screen.getByText("BOUTIQUE PREMIUM EXPERIENCE")).toBeDefined();
    // Description container should have max-h-0 (collapsed)
    const descWrapper = container.querySelector(".max-h-0");
    expect(descWrapper).not.toBeNull();
  });

  it("reveals description and applies hover background on mouseEnter", () => {
    const { container } = render(
      <FeatureItem
        title="HIGH-PERFORMING COMMUNITY"
        description="A network of driven individuals."
      />
    );

    const card = container.firstChild as HTMLElement;
    fireEvent.mouseEnter(card);

    expect(card.className).toContain("bg-[#FEF6DF]");
    expect(card.className).toContain("p-[8px]");
    // Description should now be visible (max-h-[200px])
    const expandedWrapper = container.querySelector(".max-h-\\[200px\\]");
    expect(expandedWrapper).not.toBeNull();
  });

  it("collapses description on mouseLeave", () => {
    const { container } = render(
      <FeatureItem
        title="TEST FEATURE"
        description="Test description content."
      />
    );

    const card = container.firstChild as HTMLElement;
    fireEvent.mouseEnter(card);
    fireEvent.mouseLeave(card);

    expect(card.className).toContain("bg-transparent");
    const collapsedWrapper = container.querySelector(".max-h-0");
    expect(collapsedWrapper).not.toBeNull();
  });
});
