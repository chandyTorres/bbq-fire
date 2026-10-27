import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Index } from "@/routes/index";

// Prices the user gave for the lanches that were still without a value.
const EXPECTED: [string, string][] = [
  ["Onion", "R$ 34,00"],
  ["Prime", "R$ 48,00"],
  ["Crispy", "R$ 32,00"],
  ["Cremoso", "R$ 38,00"],
  ["Kids", "R$ 30,00"],
];

describe("Lanches prices", () => {
  it("shows the price the user gave for each lanche", () => {
    render(<Index />);
    for (const [name, price] of EXPECTED) {
      const item = screen.getByText(name).closest("li");
      expect(item?.textContent).toContain(price);
    }
  });

  it("leaves no item without a price", () => {
    render(<Index />);
    expect(screen.queryAllByText("Consulte")).toHaveLength(0);
  });
});
