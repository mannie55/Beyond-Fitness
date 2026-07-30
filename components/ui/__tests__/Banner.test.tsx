import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Banner from "../Banner";

describe("Banner Component", () => {
  it("renders correctly with default settings", () => {
    const { container } = render(<Banner />);
    // Check that black container is rendered
    expect((container.firstChild as HTMLElement).className).toContain("bg-black");
    
    // Check that segments BEYOND and GO BEYOND are rendered
    const beyondElements = screen.getAllByText("BEYOND");
    const goBeyondElements = screen.getAllByText("GO BEYOND");
    
    expect(beyondElements.length).toBeGreaterThan(0);
    expect(goBeyondElements.length).toBeGreaterThan(0);
  });

  it("applies the medium speed class by default", () => {
    render(<Banner />);
    const animationWrapper = screen.getAllByText("BEYOND")[0].closest(".whitespace-nowrap");
    expect((animationWrapper as HTMLElement).className).toContain("animate-[marquee_60s_linear_infinite]");
  });

  it("applies custom speed classes correctly", () => {
    const { rerender } = render(<Banner speed="fast" />);
    let animationWrapper = screen.getAllByText("BEYOND")[0].closest(".whitespace-nowrap");
    expect((animationWrapper as HTMLElement).className).toContain("animate-[marquee_30s_linear_infinite]");

    rerender(<Banner speed="slow" />);
    animationWrapper = screen.getAllByText("BEYOND")[0].closest(".whitespace-nowrap");
    expect((animationWrapper as HTMLElement).className).toContain("animate-[marquee_90s_linear_infinite]");
  });

  it("configures hover pause state correctly", () => {
    const { rerender } = render(<Banner pauseOnHover={true} />);
    let animationWrapper = screen.getAllByText("BEYOND")[0].closest(".whitespace-nowrap");
    expect((animationWrapper as HTMLElement).className).toContain("hover:[animation-play-state:paused]");

    rerender(<Banner pauseOnHover={false} />);
    animationWrapper = screen.getAllByText("BEYOND")[0].closest(".whitespace-nowrap");
    expect((animationWrapper as HTMLElement).className).not.toContain("hover:[animation-play-state:paused]");
  });
});
