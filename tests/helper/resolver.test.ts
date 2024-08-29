import { resolveTailwindModule } from "@/helper";
import resolvedTheme from "~/tests/assets/theme.json";
import { expect, test } from "vitest";

test("can resolve config", () => {
  const { theme } = resolveTailwindModule("../assets/tailwind.config.ts", {
    root: __dirname,
  });

  expect(theme).toStrictEqual(resolvedTheme);
});
