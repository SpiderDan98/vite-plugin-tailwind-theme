# vite-plugin-tailwind-theme

A vite plugin that creates virtual files for your custom Tailwind configuration.

## Install

```bash
npm add -D vite-plugin-tailwind-theme
```

```bash
yarn add -D vite-plugin-tailwind-theme
```

```bash
pnpm add -D vite-plugin-tailwind-theme
```

## Usage

In `vite.config.ts`

```ts
import { defineConfig } from "vite";
import tailwindTheme from "vite-plugin-tailwind-theme";

export default defineConfig({
  plugins: [
    tailwindTheme(),
  ],
});
```

In your code:

```ts
import theme from "virtual:tailwind-theme";
import { screens } from "virtual:tailwind-theme";
```

The required values can be imported directly via named import.

It's also possible to add a directory level to the import.

```ts
import * as screens from "virtual:tailwind-theme/screens";
import { md } from "virtual:tailwind-theme/screens";
```

Note: some values are imported with some `_`. Without it, the js definition would be invalid. For example, `1/2` and `2xl` will get `_1_2` and `_2xl`.

## Typescript

For the correct import types, you need to reference our types in your `vite-env.d.ts`.

```ts
/// <reference types="vite-plugin-tailwind-theme/client" />
```

## Bundle size

Use the lowest level import possible to reduce bundle size. The tailwind configuration can be large, with all the colors, etc. So we don't recommend using the main import with all modules `import * as theme from 'virtual:tailwind-theme'`.
But feel free to use the same import in multiple files. The values will only appear once in your bundle.
