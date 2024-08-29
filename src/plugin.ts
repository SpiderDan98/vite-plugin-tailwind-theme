import { resolveTailwindModule } from "@/helper";
import { createExports } from "@/helper/exports";
import { Plugin, ResolvedConfig } from "vite";

const tailwindTheme = async (
  tailwindConfigPath = "tailwind.config.ts"
): Promise<Plugin> => {
  let config: ResolvedConfig;

  return {
    name: "tailwind-theme",
    configResolved: (resolvedConfig) => {
      config = resolvedConfig;
    },
    resolveId: (id: string) => {
      const { virtualModuleId, resolvedVirtualModuleId, virtualModuleIds } =
        resolveTailwindModule(tailwindConfigPath, config);

      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }

      if (virtualModuleIds.includes(id)) {
        return "\0" + id;
      }

      return undefined;
    },
    load: (id) => {
      const { theme, resolvedVirtualModuleId, resolvedVirtualModuleIds } =
        resolveTailwindModule(tailwindConfigPath, config);

      if (id === resolvedVirtualModuleId && theme) {
        return createExports(theme);
      }

      if (resolvedVirtualModuleIds.includes(id) && theme) {
        const path = id.split("/")[1];
        return createExports(theme[path]);
      }

      return undefined;
    },
  };
};

export default tailwindTheme;
