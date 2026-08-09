import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CommunitySection from "../sections/CommunitySection";

describe("CommunitySection Component", () => {
  it("renders community headers, paragraph, and CTA buttons inside the framed container", () => {
    render(<CommunitySection />);

    expect(screen.getByText("MORE THAN A STUDIO.")).toBeDefined();
    expect(screen.getByText("A COMMUNITY.")).toBeDefined();
    expect(screen.getByText(/From fitness events and wellness experiences/i)).toBeDefined();

    expect(screen.getByRole("link", { name: /See the community/i })).toBeDefined();
    expect(screen.getByAltText("Beyond Fitness Community")).toBeDefined();
  });
});
