import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ClassSection from "../sections/ClassSection";

describe("ClassSection Component", () => {
  it("renders section header and class program tabs", () => {
    render(<ClassSection />);
    
    // Check Header text
    expect(screen.getByText("PROGRAMS ENGINEERED FOR IMPACT")).toBeDefined();
    
    // Check if class program titles are rendered
    expect(screen.getAllByText("RIDE").length).toBeGreaterThan(0);
    expect(screen.getAllByText("LIFT (Strength)").length).toBeGreaterThan(0);
    expect(screen.getAllByText("BARRE PILATES").length).toBeGreaterThan(0);
    expect(screen.getAllByText("HIIT BOXING").length).toBeGreaterThan(0);
    expect(screen.getAllByText("SCULPT").length).toBeGreaterThan(0);
  });

  it("switches active tab when a tab is clicked", () => {
    render(<ClassSection />);
    
    // Find the desktop tab for LIFT
    const liftTab = screen.getByRole("tab", { name: /LIFT/i });
    expect(liftTab.getAttribute("aria-selected")).toBe("false");
    
    // Click on LIFT tab
    fireEvent.click(liftTab);
    
    // Now LIFT should be selected
    expect(liftTab.getAttribute("aria-selected")).toBe("true");
    expect(screen.getAllByText("Progressive Barbell & Functional Power").length).toBeGreaterThan(0);
  });

  it("handles keyboard navigation between tabs", () => {
    render(<ClassSection />);
    
    const rideTab = screen.getByRole("tab", { name: /RIDE/i });
    expect(rideTab.getAttribute("aria-selected")).toBe("true");
    
    // Press ArrowRight to move to next tab (LIFT)
    fireEvent.keyDown(rideTab, { key: "ArrowRight" });
    
    const liftTab = screen.getByRole("tab", { name: /LIFT/i });
    expect(liftTab.getAttribute("aria-selected")).toBe("true");
    
    // Press End key to jump to last tab
    fireEvent.keyDown(liftTab, { key: "End" });
    const sculptTab = screen.getByRole("tab", { name: /SCULPT/i });
    expect(sculptTab.getAttribute("aria-selected")).toBe("true");
    
    // Press Home key to jump back to first tab
    fireEvent.keyDown(sculptTab, { key: "Home" });
    expect(rideTab.getAttribute("aria-selected")).toBe("true");
  });

  it("toggles accordion item in mobile view", () => {
    render(<ClassSection />);
    
    // Find mobile button for BARRE PILATES
    const barreButton = screen.getByRole("button", { name: /BARRE PILATES/i });
    expect(barreButton.getAttribute("aria-expanded")).toBe("false");
    
    // Expand BARRE
    fireEvent.click(barreButton);
    expect(barreButton.getAttribute("aria-expanded")).toBe("true");
    expect(screen.getAllByText("Isometric Precision & Posture Control").length).toBeGreaterThan(0);
  });
});
