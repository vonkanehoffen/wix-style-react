
module.exports = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  const exports = root.find(j.ExportNamedDeclaration).paths();

  j(exports[exports.length - 1]).insertBefore(
    `
/**
 * TODO: move to the relevant family file
 */
 import { notClassifiedSymbols } from '../symbols';
 import {
  notClassifiedComponentsNames as componentsNames,
  sharedComponentsNames,
 } from '../components';
};
    `,
  );

  return root.toSource();
};
