import { describe, it, expect, vi } from "vitest";
import { runApp } from "../src/index";

describe("runApp", () => {
  it("prints messages from app and lib", () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    runApp();

    expect(logSpy).toHaveBeenCalledWith("Hello from app");
    expect(logSpy).toHaveBeenCalledWith("Hello from lib");

    logSpy.mockRestore();
  });
});
