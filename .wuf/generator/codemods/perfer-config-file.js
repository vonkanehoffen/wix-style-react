module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  const { ComponentName } = options;

  const files = root.find(j.VariableDeclaration, {
    declarations: [{ id: { name: 'files' } }],
  });

  const newValue = j.arrayExpression([
    j.literal(`${ComponentName}.bundle.min.js`),
    j.numericLiteral(10),
  ]);

  files.get(0).node.declarations[0].init.elements.push(newValue);

  return root.toSource({ quote: 'single', trailingComma: true });
};
