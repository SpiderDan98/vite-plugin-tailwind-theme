// @ts-nocheck
declare module "virtual:tailwind-theme" {
  const config: Required<import("tailwindcss").Config>;

  export const accentColor = config.theme.accentColor;
  export const animation = config.theme.animation;
  export const aria = config.theme.aria;
  export const aspectRatio = config.theme.aspectRatio;
  export const backdropBlur = config.theme.backdropBlur;
  export const backdropBrightness = config.theme.backdropBrightness;
  export const backdropContrast = config.theme.backdropContrast;
  export const backdropGrayscale = config.theme.backdropGrayscale;
  export const backdropHueRotate = config.theme.backdropHueRotate;
  export const backdropInvert = config.theme.backdropInvert;
  export const backdropOpacity = config.theme.backdropOpacity;
  export const backdropSaturate = config.theme.backdropSaturate;
  export const backdropSepia = config.theme.backdropSepia;
  export const backgroundColor = config.theme.backgroundColor;
  export const backgroundImage = config.theme.backgroundImage;
  export const backgroundOpacity = config.theme.backgroundOpacity;
  export const backgroundPosition = config.theme.backgroundPosition;
  export const backgroundSize = config.theme.backgroundSize;
  export const blur = config.theme.blur;
  export const borderColor = config.theme.borderColor;
  export const borderOpacity = config.theme.borderOpacity;
  export const borderRadius = config.theme.borderRadius;
  export const borderSpacing = config.theme.borderSpacing;
  export const borderWidth = config.theme.borderWidth;
  export const boxShadow = config.theme.boxShadow;
  export const boxShadowColor = config.theme.boxShadowColor;
  export const brightness = config.theme.brightness;
  export const caretColor = config.theme.caretColor;
  export const colors = config.theme.colors;
  export const columns = config.theme.columns;
  export const container = config.theme.container;
  export const content = config.theme.content;
  export const contrast = config.theme.contrast;
  export const cursor = config.theme.cursor;
  export const divideColor = config.theme.divideColor;
  export const divideOpacity = config.theme.divideOpacity;
  export const divideWidth = config.theme.divideWidth;
  export const dropShadow = config.theme.dropShadow;
  export const fill = config.theme.fill;
  export const flex = config.theme.flex;
  export const flexBasis = config.theme.flexBasis;
  export const flexGrow = config.theme.flexGrow;
  export const flexShrink = config.theme.flexShrink;
  export const fontFamily = config.theme.fontFamily;
  export const fontSize = config.theme.fontSize;
  export const fontWeight = config.theme.fontWeight;
  export const gap = config.theme.gap;
  export const gradientColorStops = config.theme.gradientColorStops;
  export const gradientColorStopPositions =
    config.theme.gradientColorStopPositions;
  export const grayscale = config.theme.grayscale;
  export const gridAutoColumns = config.theme.gridAutoColumns;
  export const gridAutoRows = config.theme.gridAutoRows;
  export const gridColumn = config.theme.gridColumn;
  export const gridColumnEnd = config.theme.gridColumnEnd;
  export const gridColumnStart = config.theme.gridColumnStart;
  export const gridRow = config.theme.gridRow;
  export const gridRowEnd = config.theme.gridRowEnd;
  export const gridRowStart = config.theme.gridRowStart;
  export const gridTemplateColumns = config.theme.gridTemplateColumns;
  export const gridTemplateRows = config.theme.gridTemplateRows;
  export const height = config.theme.height;
  export const hueRotate = config.theme.hueRotate;
  export const inset = config.theme.inset;
  export const invert = config.theme.invert;
  export const keyframes = config.theme.keyframes;
  export const letterSpacing = config.theme.letterSpacing;
  export const lineHeight = config.theme.lineHeight;
  export const listStyleType = config.theme.listStyleType;
  export const listStyleImage = config.theme.listStyleImage;
  export const margin = config.theme.margin;
  export const lineClamp = config.theme.lineClamp;
  export const maxHeight = config.theme.maxHeight;
  export const maxWidth = config.theme.maxWidth;
  export const minHeight = config.theme.minHeight;
  export const minWidth = config.theme.minWidth;
  export const objectPosition = config.theme.objectPosition;
  export const opacity = config.theme.opacity;
  export const order = config.theme.order;
  export const outlineColor = config.theme.outlineColor;
  export const outlineOffset = config.theme.outlineOffset;
  export const outlineWidth = config.theme.outlineWidth;
  export const padding = config.theme.padding;
  export const placeholderColor = config.theme.placeholderColor;
  export const placeholderOpacity = config.theme.placeholderOpacity;
  export const ringColor = config.theme.ringColor;
  export const ringOffsetColor = config.theme.ringOffsetColor;
  export const ringOffsetWidth = config.theme.ringOffsetWidth;
  export const ringOpacity = config.theme.ringOpacity;
  export const ringWidth = config.theme.ringWidth;
  export const rotate = config.theme.rotate;
  export const saturate = config.theme.saturate;
  export const scale = config.theme.scale;
  export const screens = config.theme.screens;
  export const scrollMargin = config.theme.scrollMargin;
  export const scrollPadding = config.theme.scrollPadding;
  export const sepia = config.theme.sepia;
  export const skew = config.theme.skew;
  export const space = config.theme.space;
  export const spacing = config.theme.spacing;
  export const stroke = config.theme.stroke;
  export const strokeWidth = config.theme.strokeWidth;
  export const supports = config.theme.supports;
  export const data = config.theme.data;
  export const textColor = config.theme.textColor;
  export const textDecorationColor = config.theme.textDecorationColor;
  export const textDecorationThickness = config.theme.textDecorationThickness;
  export const textIndent = config.theme.textIndent;
  export const textOpacity = config.theme.textOpacity;
  export const textUnderlineOffset = config.theme.textUnderlineOffset;
  export const transformOrigin = config.theme.transformOrigin;
  export const transitionDelay = config.theme.transitionDelay;
  export const transitionDuration = config.theme.transitionDuration;
  export const transitionProperty = config.theme.transitionProperty;
  export const transitionTimingFunction = config.theme.transitionTimingFunction;
  export const translate = config.theme.translate;
  export const width = config.theme.width;
  export const willChange = config.theme.willChange;
  export const zIndex = config.theme.zIndex;

  export default config.theme;
}

declare module "virtual:tailwind-theme/*" {
  const themeValue: Record<string, any>;

  export default themeValue;
}

declare module "vite-plugin-tailwind-theme" {
  import tailwindTheme from "./plugin";

  export default tailwindTheme;
}
