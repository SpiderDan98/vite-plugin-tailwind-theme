import { TailwindThemeOption } from "@/helper/types";
import { toValidExportName } from "@/helper/valid";

export const createExports = (themeOption: TailwindThemeOption) => {
  return Object.entries(themeOption)
    .map(([key, value]) => {
      const exportName = toValidExportName(key);

      if (exportName) {
        return `export const ${exportName} = ${JSON.stringify(value)};`;
      }

      return undefined;
    })
    .filter((exp) => !!exp)
    .join("");
};
