module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  const { ComponentName } = options;

  root.get().node.program.body.push(
    `
/* Placeholder file when generating a new component */

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
    `
  );

  return root.toSource();
};
