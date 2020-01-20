module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  console.log('Yayyyy')


  const exports = root.find(j.ExportNamedDeclaration).paths();
  const { ComponentName } = options;

  j(exports[exports.length - 1]).insertAfter(
    `
/**
 * TODO: move to the relevant family file
 */
 import { notClassifiedSymbols } from '../symbols';
 import {
  notClassifiedComponentsNames as componentsNames,
  sharedComponentsNames,
 } from '../components';

 export const notClassifiedSymbolsToComponents = {
    [notClassifiedSymbols.${ComponentName}]: [
        componentsNames.${ComponentName} ,
        sharedComponentsNames.FormField
    ]
 };
    `,
  );

  return root.toSource();
};
