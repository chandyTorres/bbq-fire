import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Index } from "@/routes/index";

// The three CTA buttons (top, middle, footer) must all open the same WhatsApp chat.
const LINK = "https://wa.me/5518998150854";

describe("WhatsApp call to action", () => {
  it("shows a CTA button in the top, the middle and the footer, all opening the same chat", () => {
    render(<Index />);


    const links = screen
      .getAllByRole("link")
      .filter((l) => l.getAttribute("href") === LINK);

    // 3 CTA buttons + the footer number + the floating button pinned to the corner
    expect(links).toHaveLength(5);


    for (const label of ["Chamar no WhatsApp", "Pedir pelo WhatsApp", "Chamar no WhatsApp"]) {
      expect(links.some((l) => l.textContent?.includes(label))).toBe(true);
    }
  });

  it("shows the phone number on every CTA", () => {
    render(<Index />);
    expect(screen.getAllByText("(18) 99815-0854").length).toBeGreaterThanOrEqual(3);
  });
});
