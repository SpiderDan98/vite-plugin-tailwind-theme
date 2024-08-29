import { writeFileSync } from "fs";
import loadConfig from "tailwindcss/loadConfig.js";
import resolveConfig from "tailwindcss/resolveConfig.js";
import { fileURLToPath, URL } from "url";

const tailwindConfig = loadConfig(
  fileURLToPath(new URL("../tests/assets/tailwind.config.ts", import.meta.url))
);
const { theme = {} } = resolveConfig(tailwindConfig);

const createTemplate = (path, name = "") => `
declare module 'virtual:tailwind-theme${name}' {
  const resolveConfig = (await import('tailwindcss/resolveConfig.js')).default
  const tailwindConfig = (await import('../../../tailwind.config.ts')).default

  const config: ReturnType<typeof resolveConfig<typeof tailwindConfig>>

  const namedExport = config.${path}

  export = namedExport
}
`;

const camelToSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

let template = createTemplate("theme");

for (const name in theme) {
  template += createTemplate(`theme.${name}`, `/${camelToSnakeCase(name)}`);
}

writeFileSync("./dist/client.d.ts", template);
