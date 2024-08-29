import { resolveTailwindModule } from "@/helper";
import resolvedExports from "~/tests/assets/exports.js?raw";
import resolvedSubExports from "~/tests/assets/sub-exports.js?raw";
import { expect, test } from "vitest";
import { createExports } from "@/helper/exports";

test("can create root export file", () => {
  const { theme } = resolveTailwindModule("../assets/tailwind.config.ts", {
    root: __dirname,
  });

  if (!theme) {
    throw new Error("theme need to be defined");
  }

  const exports = createExports(theme);

  expect(exports).toBe(resolvedExports);
});

test("can create sub export file", () => {
  const { theme } = resolveTailwindModule("../assets/tailwind.config.ts", {
    root: __dirname,
  });

  if (!theme?.screens) {
    throw new Error("theme need to be defined");
  }

  const subExports = createExports(theme.screens);

  expect(subExports).toBe(resolvedSubExports);
});
