module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);
  const { ComponentName } = options;

  const exports = root.find(j.ExportNamedDeclaration).paths();

  j(exports[exports.length - 1]).insertAfter(
    `
/**
 * Not classified UX symbol.
 * TODO: move to the relevant family
 */
export const notClassifiedSymbols = {
  ${ComponentName}: '13.1 ${ComponentName}',
};
    `,
  );

  return root.toSource();
};
