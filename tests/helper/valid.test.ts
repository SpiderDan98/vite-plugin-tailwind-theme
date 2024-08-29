import { toValidExportName } from "@/helper";
import { expect, test } from "vitest";

test("test valid name", () => {
  const name = toValidExportName("screens");

  expect(name).toBe("screens");
});

test("test starting number name", () => {
  const name = toValidExportName("2xl");

  expect(name).toBe("$2xl");
});
