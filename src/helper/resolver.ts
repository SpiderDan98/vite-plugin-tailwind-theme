import loadConfig from "tailwindcss/loadConfig.js";
import resolveConfig from "tailwindcss/resolveConfig.js";
import { ResolvedConfig } from "vite";
import { isAbsolute, resolve } from "node:path";
import { ResolvedTailwindModule } from "@/helper/types";

const virtualModuleId = "virtual:tailwind-theme";
const resolvedVirtualModuleId = "\0" + virtualModuleId;

let resolvedTailwindModule: ResolvedTailwindModule;

export const resolveTailwindModule = (
  tailwindConfigPath: string,
  { root }: Pick<ResolvedConfig, "root">
) => {
  if (resolvedTailwindModule) {
    return resolvedTailwindModule;
  }

  const absoulteTailwindConfigPath = isAbsolute(tailwindConfigPath)
    ? tailwindConfigPath
    : resolve(root, tailwindConfigPath);
  const tailwindConfig = loadConfig(absoulteTailwindConfigPath);
  const { theme = {} } = resolveConfig(tailwindConfig);

  const virtualModuleIds = Object.keys(theme).map(
    (key) => `${virtualModuleId}/${key}`
  );

  const resolvedVirtualModuleIds = virtualModuleIds.map(
    (virtualModuleId) => "\0" + virtualModuleId
  );

  resolvedTailwindModule = {
    virtualModuleId,
    virtualModuleIds,
    resolvedVirtualModuleId,
    resolvedVirtualModuleIds,
    theme,
  };

  return resolvedTailwindModule;
};
