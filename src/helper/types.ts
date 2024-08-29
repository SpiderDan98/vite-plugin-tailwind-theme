import { Config } from "tailwindcss";
import resolveConfig from "tailwindcss/resolveConfig.js";

export type ResolvedConfig<T extends Config = Config> = ReturnType<
  typeof resolveConfig<T>
>["theme"];

export type TailwindThemeOption = object | unknown[];

export type ResolvedTailwindModule = {
  virtualModuleId: string;
  virtualModuleIds: string[];
  resolvedVirtualModuleId: string;
  resolvedVirtualModuleIds: string[];
  theme: ResolvedConfig;
};

export type InvalidExportSpecialCharacter =
  | "["
  | "-"
  | "&"
  | "/"
  | "\\"
  | "#"
  | ","
  | "+"
  | "("
  | ")"
  | "~"
  | "%"
  | "."
  | "'"
  | '"'
  | ":"
  | "*"
  | "?"
  | "<"
  | ">"
  | "{"
  | "}"
  | "]";

export type InvalidExportStartingNumber = `${number}${string}`;

export type InvalidExport = InvalidExportStartingNumber;

export type Replace<
  T extends string | number,
  S extends string,
  D extends string,
  A extends string = ""
> = T extends `${infer L}${S}${infer R}`
  ? Replace<R, S, D, `${A}${L}${D}`>
  : `${A}${T}`;

export type ReplaceSpecialCharacters<TString extends string | number> = Replace<
  TString,
  InvalidExportSpecialCharacter,
  "_"
>;

export type AddPrefixForInvalidExport<TKey extends keyof object> =
  TKey extends InvalidExport ? `$${TKey}` : TKey;

export type ToExportObject<TObject extends object> = {
  [TKey in keyof TObject as TKey extends InvalidExport
    ? `$${TKey}`
    : TKey]: TObject[TKey];
};
