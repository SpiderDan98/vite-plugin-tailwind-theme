# vite-plugin-tailwind-theme

A vite plugin that creates virtual files for your custom Tailwind configuration.

## Install

```bash
yarn add -D vite-plugin-tailwind-theme
```

## Usage

In `vite.config.ts`

```ts
import { defineConfig } from "vite";
import tailwindTheme from "vite-plugin-tailwind-theme";

export default defineConfig({
  plugins: [
    tailwindTheme(
      "custom/path/to/tailwind.config.js" // default tailwind.config.js
    ),
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
import screens from "virtual:tailwind-theme/screens";
import { md } from "virtual:tailwind-theme/screens";
```

Note: some values can't be imported directly because the js name is invalid. For example `1/2` or `2xl`.

## Typescript

For the correct import types, you need to reference our types in your `vite-env.d.ts`.

```ts
/// <reference types="vite-plugin-tailwind-theme" />
```

The types for the directory named export must be set manually, as they depend on your custom configuration. You can declare them in your `vite-env.d.ts` as follows.

```ts
declare module "virtual:tailwind-theme/screens" {
  export const sm: string;
  export const md: string;
  export const lg: string;
  export const xl: string;
}
```

In our types we just use the types for a valid tailwind config. If you preffer a specific declaration u need to overwrite ours.

```ts
interface Screens {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string; // can't be named imported because leading 2
}

declare module "virtual:tailwind-theme/screens" {
  const screens: Screens;

  export const sm: string;
  export const md: string;
  export const lg: string;
  export const xl: string;

  export default screens;
}
```

## Bundle size

Use the lowest level import possible to reduce bundle size. The tailwind configuration can be large, with all the colors, etc. So we don't recommend using the main import `virtual:tailwind-theme`.
But you can feel free to use multiple imports in different files.
