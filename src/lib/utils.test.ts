import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn utility", () => {
  it("merges class names correctly", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("handles conditional classes", () => {
    expect(cn("a", false && "b", true && "c")).toBe("a c");
  });

  it("merges tailwind classes correctly", () => {
    expect(cn("px-2 py-2", "p-4")).toBe("p-4");
  });
});
