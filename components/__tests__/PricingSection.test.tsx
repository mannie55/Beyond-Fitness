import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PricingSection from "../sections/PricingSection";

describe("PricingSection Component", () => {
  it("renders section title, subtitle, cards, and flexible banner", () => {
    render(<PricingSection />);

    expect(screen.getByText("INVEST IN YOUR HIGHEST SELF")).toBeDefined();
    expect(screen.getByText(/Flexible passes for travelers, unlimited access for the devoted/i)).toBeDefined();

    // Check Cards
    expect(screen.getByText("FIRST TIMERS")).toBeDefined();
    expect(screen.getByText("MEMBERSHIP")).toBeDefined();
    expect(screen.getByText("ANNUAL")).toBeDefined();

    // Check Badges
    expect(screen.getByText("MOST POPULAR")).toBeDefined();
    expect(screen.getByText("BEST VALUE")).toBeDefined();

    // Check Bottom Banner
    expect(screen.getByText(/Looking for bespoke corporate wellness/i)).toBeDefined();
    expect(screen.getByText(/Elevate your team with customized corporate partnerships/i)).toBeDefined();
    expect(screen.getByRole("link", { name: /VIEW ALL MEMBERSHIPS/i })).toBeDefined();
  });

  it("toggles between First Timer and Drop-In plans in FirstTimersCard", () => {
    render(<PricingSection />);

    // Default is First Timer (₦40,000)
    expect(screen.getByText("₦40,000")).toBeDefined();

    // Click Drop-In
    const dropInBtn = screen.getByRole("button", { name: "Drop-In" });
    fireEvent.click(dropInBtn);

    expect(screen.getByText("₦25,000")).toBeDefined();
    expect(screen.getByText(/Single class pass | valid 1 month/i)).toBeDefined();

    // Switch back to First Timer
    const firstTimerBtn = screen.getByRole("button", { name: "First Timer" });
    fireEvent.click(firstTimerBtn);

    expect(screen.getByText("₦40,000")).toBeDefined();
  });

  it("switches membership tiers in MembershipCard and updates pricing", () => {
    render(<PricingSection />);

    // Default 8x
    expect(screen.getByText("₦408,000")).toBeDefined();
    expect(screen.getByText("-32%")).toBeDefined();

    // Click 12x
    const btn12x = screen.getByRole("button", { name: "12x" });
    fireEvent.click(btn12x);
    expect(screen.getByText("₦576,000")).toBeDefined();
    expect(screen.getByText("-36%")).toBeDefined();

    // Click 24x
    const btn24x = screen.getByRole("button", { name: "24x" });
    fireEvent.click(btn24x);
    expect(screen.getByText("₦1,008,000")).toBeDefined();
    expect(screen.getByText("-44%")).toBeDefined();
  });
});
