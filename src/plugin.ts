import resolveConfig from "tailwindcss/resolveConfig.js";
import isValidName from "@/valid-name";

const createExports = (object: Record<string, any>) => {
  const exports = Object.entries(object)
    .map(
      ([key, value]) =>
        isValidName(key) && `export const ${key} = ${JSON.stringify(value)};`
    )
    .filter((exp) => !!exp)
    .join("");

  const validKeys = Object.keys(object).filter((key) => isValidName(key));
  const invalidKeys = Object.keys(object).filter(
    (key) => !validKeys.includes(key)
  );

  const otherKeys = invalidKeys.map(
    (key) => `"${key}": ${JSON.stringify(object[key])}`
  );

  const defaultExport = `export default {${validKeys.join(
    ", "
  )}, ...{${otherKeys.join(", ")}}};`;

  return exports + defaultExport;
};

const tailwindTheme = async (tailwindConfigPath = "tailwind.config.js") => {
  const nodeModulesPath = `../../../${tailwindConfigPath}`;
  const tailwindConfig = await import(nodeModulesPath);
  const { theme } = resolveConfig(tailwindConfig);
  const virtualModuleId = "virtual:tailwind-theme";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  const virtualModuleIds = Object.keys(theme).map(
    (key) => `${virtualModuleId}/${key}`
  );

  const resolvedVirtualModuleIds = virtualModuleIds.map(
    (virtualModuleId) => "\0" + virtualModuleId
  );

  return {
    name: "tailwind-theme",
    // @ts-ignore
    resolveId: (id: string) => {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }

      if (virtualModuleIds.includes(id)) {
        return "\0" + id;
      }
    },
    // @ts-ignore
    load: (id: string) => {
      if (id === resolvedVirtualModuleId) {
        return createExports(theme);
      }

      if (resolvedVirtualModuleIds.includes(id)) {
        const path = id.split("/")[1];
        return createExports(theme[path]);
      }
    },
  };
};

export default tailwindTheme;
