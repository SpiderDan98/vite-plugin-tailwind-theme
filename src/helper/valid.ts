import { ToExportObject } from "@/helper/types";

const specialCharacterRegex = /[-&\/\\#,+()~%.'":*?<>{}]/g;

const pipe = (first: string, fns: ((name: string) => string)[]) =>
  fns.reduce((string, fn) => fn(string), first);

export const addLeadingByStartingNumber = (name: string) =>
  isNaN(Number(name?.charAt(0))) ? name : `\$${name}`;

// TODO: add replace special character and wrong words instead of removing it
export const replaceSpecialCharacters = (name: string) =>
  name?.replace(specialCharacterRegex, "_");

export const toValidExportName = (name: string) => {
  const exportName = pipe(name, [addLeadingByStartingNumber]);

  if (exportName.match(specialCharacterRegex)) {
    return undefined;
  }

  return exportName;
};

export const toValidExportObject = <TObject extends object>(
  object: TObject
): ToExportObject<TObject> =>
  Object.fromEntries(
    Object.entries(object).map(([key, value]) => [
      toValidExportName(key),
      value,
    ])
  ) as ToExportObject<TObject>;
