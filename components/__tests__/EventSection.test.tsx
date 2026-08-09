import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import EventSection from "../sections/EventSection";

describe("EventSection Component", () => {
  it("renders the default ON TOUR tab content and accessibility attributes", () => {
    render(<EventSection />);

    // Section Header
    expect(screen.getByText("EVENTS THAT BRING US TOGETHER")).toBeDefined();
    expect(screen.getByText(/From multi-city wellness tours to community initiatives/i)).toBeDefined();

    // Tab buttons
    const onTourTab = screen.getByRole("tab", { name: /ON TOUR/i });
    const pinkWalkTab = screen.getByRole("tab", { name: /PINK WALK/i });
    expect(onTourTab).toBeDefined();
    expect(pinkWalkTab).toBeDefined();
    expect(onTourTab.getAttribute("aria-selected")).toBe("true");
    expect(pinkWalkTab.getAttribute("aria-selected")).toBe("false");

    // Content for ON TOUR
    expect(screen.getByText("BEYOND ON TOUR")).toBeDefined();
    expect(screen.getByText("WELLNESS BEYOND FOUR WALLS")).toBeDefined();
    expect(screen.getByText(/Beyond On Tour takes the Beyond experience beyond the studio/i)).toBeDefined();
    expect(screen.getByRole("link", { name: /REGISTER/i })).toBeDefined();

    // Check images
    expect(screen.getByAltText("Beyond On Tour Wellness Session")).toBeDefined();
  });

  it("switches to PINK WALK tab and updates content dynamically", () => {
    render(<EventSection />);

    const pinkWalkTab = screen.getByRole("tab", { name: /PINK WALK/i });
    fireEvent.click(pinkWalkTab);

    expect(pinkWalkTab.getAttribute("aria-selected")).toBe("true");
    expect(screen.getByText("BEYOND PINK WALK")).toBeDefined();
    expect(screen.getByText("WE WALK SO NO ONE WALKS ALONE.")).toBeDefined();
    expect(screen.getByText(/The Pink Walk is more than an event/i)).toBeDefined();
    expect(screen.getByRole("link", { name: /JOIN THE PINK WALK/i })).toBeDefined();

    // Check pink walk images
    expect(screen.getByAltText("Beyond Pink Walk Community Group")).toBeDefined();
  });

  it("can switch back to ON TOUR after selecting PINK WALK", () => {
    render(<EventSection />);

    const pinkWalkTab = screen.getByRole("tab", { name: /PINK WALK/i });
    const onTourTab = screen.getByRole("tab", { name: /ON TOUR/i });

    fireEvent.click(pinkWalkTab);
    expect(screen.getByText("WE WALK SO NO ONE WALKS ALONE.")).toBeDefined();

    fireEvent.click(onTourTab);
    expect(screen.getByText("WELLNESS BEYOND FOUR WALLS")).toBeDefined();
    expect(onTourTab.getAttribute("aria-selected")).toBe("true");
  });
});
