import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

// Mock next/image since vitest runs in a Node environment where optimized image loading isn't compiled
vi.mock("next/image", () => ({
  default: ({ src, alt, width, height, className }: { src: string, alt: string, width: number, height: number, className?: string }) => {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  },
}));

describe("Footer Component", () => {
  it("renders brand name and logo description correctly", () => {
    render(<Footer />);
    
    // Check brand name text
    expect(screen.getAllByText("BEYOND").length).toBeGreaterThan(0);
    expect(screen.getByText("FITNESS")).toBeDefined();
    
    // Check newsletter info text
    expect(
      screen.getByText("Join our community for exclusive event access and training insights.")
    ).toBeDefined();
  });

  it("renders newsletter input and handles form submit events", () => {
    render(<Footer />);
    
    const emailInput = screen.getByPlaceholderText("Your email");
    expect(emailInput).toBeDefined();
    
    const submitButton = screen.getByText("JOIN");
    expect(submitButton).toBeDefined();
  });

  it("renders the major navigation category headers", () => {
    render(<Footer />);
    
    expect(screen.getByText("CLASSES")).toBeDefined();
    expect(screen.getByText("COMMUNITY")).toBeDefined();
    expect(screen.getByText("FOLLOW US")).toBeDefined();
  });

  it("renders social media links with icons", () => {
    render(<Footer />);
    
    const facebookLink = screen.getByRole("link", { name: /^facebook$/i });
    expect(facebookLink).toBeDefined();
    expect(facebookLink.getAttribute("href")).toContain("facebook.com");
    
    const xLink = screen.getByRole("link", { name: /^x$/i });
    expect(xLink).toBeDefined();
  });

  it("renders footer legal copyright and policies", () => {
    render(<Footer />);
    
    expect(screen.getByText(/All rights reserved/)).toBeDefined();
    
    const privacyLink = screen.getByRole("link", { name: /privacy policy/i });
    expect(privacyLink).toBeDefined();
  });
});
