import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button Component", () => {
  it("renders the primary button variant correctly", () => {
    render(<Button variant="primary">View Membership</Button>);
    
    const button = screen.getByRole("button", { name: /view membership/i });
    expect(button).toBeDefined();
    expect(button.className).toContain("bg-white");
    expect(button.className).toContain("text-black");
  });

  it("renders the secondary button variant correctly", () => {
    render(<Button variant="secondary">Events</Button>);
    
    const button = screen.getByRole("button", { name: /events/i });
    expect(button).toBeDefined();
    expect(button.className).toContain("bg-transparent");
    expect(button.className).toContain("border-white");
  });

  it("triggers onClick event handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    
    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders as an anchor link when href is supplied", () => {
    render(<Button href="/schedule">Book Class</Button>);
    
    const link = screen.getByRole("link", { name: /book class/i });
    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe("/schedule");
  });
});
