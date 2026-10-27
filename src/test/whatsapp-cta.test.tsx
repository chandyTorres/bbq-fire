import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Index } from "@/routes/index";

// Every button opens the same WhatsApp chat, with the prefilled message.
const LINK =
  "https://wa.me/5518998150854?text=Ol%C3%A1%21%20Vim%20pelo%20card%C3%A1pio%20do%20BBQ%20FIRE%20e%20gostaria%20de%20fazer%20um%20pedido.";
const NUMBER = "(18) 99815-0854";
const CTA = "FAÇA SEU PEDIDO";

describe("WhatsApp call to action", () => {
  it("shows only the CTA text in the top, the middle and the footer buttons", () => {
    render(<Index />);

    const ctas = screen.getAllByRole("link").filter((l) => l.textContent?.includes(CTA));

    expect(ctas).toHaveLength(3);
    for (const cta of ctas) {
      expect(cta.getAttribute("href")).toBe(LINK);
      expect(cta.textContent).not.toContain(NUMBER);
    }
  });

  it("keeps the phone number on the floating button and the footer link", () => {
    render(<Index />);

    const floating = screen.getAllByRole("link").find((l) => l.className.includes("fixed"));

    expect(floating?.getAttribute("href")).toBe(LINK);
    expect(floating?.textContent).toContain(NUMBER);
    expect(screen.getAllByText(NUMBER).length).toBeGreaterThanOrEqual(2);
  });

  it("points every WhatsApp link to the new chat", () => {
    render(<Index />);

    const links = screen
      .getAllByRole("link")
      .filter((l) => (l.getAttribute("href") ?? "").startsWith("https://wa.me/"));

    expect(links).toHaveLength(5);
    for (const l of links) {
      expect(l.getAttribute("href")).toBe(LINK);
    }
  });
});
