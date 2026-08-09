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
    // Description container should be collapsed via grid-rows-[0fr]
    const descWrapper = container.querySelector(".grid-rows-\\[0fr\\]");
    expect(descWrapper).not.toBeNull();
  });

  it("reveals description on click", () => {
    const { container } = render(
      <FeatureItem
        title="HIGH-PERFORMING COMMUNITY"
        description="A network of driven individuals."
      />
    );

    const card = container.firstChild as HTMLElement;
    fireEvent.click(card);

    // Description should now be visible (grid-rows-[1fr])
    const expandedWrapper = container.querySelector(".grid-rows-\\[1fr\\]");
    expect(expandedWrapper).not.toBeNull();
  });

  it("collapses description on second click", () => {
    const { container } = render(
      <FeatureItem
        title="TEST FEATURE"
        description="Test description content."
      />
    );

    const card = container.firstChild as HTMLElement;
    
    // Open
    fireEvent.click(card);
    expect(container.querySelector(".grid-rows-\\[1fr\\]")).not.toBeNull();
    
    // Close
    fireEvent.click(card);
    expect(container.querySelector(".grid-rows-\\[0fr\\]")).not.toBeNull();
  });
});
