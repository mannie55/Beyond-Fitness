import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Navbar from "../Navbar";

describe("Navbar Component", () => {
  it("renders brand logo and titles correctly", () => {
    render(<Navbar />);
    
    // Check for logo brand text (should find multiple for mobile overlay and desktop)
    const brandBeyond = screen.getAllByText("BEYOND");
    const brandFitness = screen.getAllByText("FITNESS");
    
    expect(brandBeyond.length).toBeGreaterThan(0);
    expect(brandFitness.length).toBeGreaterThan(0);
  });

  it("renders navigation links on desktop view", () => {
    render(<Navbar />);
    
    expect(screen.getByText("CLASSES")).toBeDefined();
    expect(screen.getByText("SCHEDULE")).toBeDefined();
    expect(screen.getByText("PRICING")).toBeDefined();
    expect(screen.getByText("COMMUNITY")).toBeDefined();
  });

  it("toggles community dropdown on hover/interaction", () => {
    render(<Navbar />);
    
    // Hover over Community button to open menu
    const communityBtn = screen.getByRole("button", { name: /COMMUNITY/i });
    expect(screen.queryByText("Member Stories")).toBeNull();
    
    fireEvent.mouseEnter(communityBtn);
    expect(screen.getByText("Member Stories")).toBeDefined();
    expect(screen.getByText("Pink Walk")).toBeDefined();
    
    fireEvent.mouseLeave(communityBtn.parentElement!);
    expect(screen.queryByText("Member Stories")).toBeNull();
  });

  it("toggles mobile hamburger overlay on click", () => {
    render(<Navbar />);
    
    const toggleBtn = screen.getByRole("button", { name: /Toggle navigation menu/i });
    expect(toggleBtn).toBeDefined();
    
    // Before click, mobile links should not render in document
    const mobileClassesLink = screen.queryAllByRole("link", { name: "CLASSES" });
    // Since CLASSES is rendered on desktop view, it will find exactly 1.
    expect(mobileClassesLink.length).toBe(1);
    
    // Click toggle to open menu
    fireEvent.click(toggleBtn);
    
    // After click, CLASSES link should render twice (desktop and mobile overlay)
    expect(screen.queryAllByRole("link", { name: "CLASSES" }).length).toBe(2);
    
    // Click toggle again to close menu
    fireEvent.click(toggleBtn);
    expect(screen.queryAllByRole("link", { name: "CLASSES" }).length).toBe(1);
  });
});
