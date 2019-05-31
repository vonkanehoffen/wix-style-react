const {
  supportedComponents,
  defaultPropsOverrides,
  propTypesOverrides,
  componentDependencies,
} = require('./getSupportedComponents');
const metadataParser = require('react-autodocs-utils/src/metadata-parser');
const mapValues = require('lodash/fp/mapValues');
const pickBy = require('lodash/fp/pickBy');
const compose = require('lodash/fp/compose');
const get = require('lodash/fp/get');

const basicPropTypes = {
  string: 'string',
  number: 'number',
  bool: 'bool',
  object: 'object',
  node: 'node',
  any: 'any',
  func: 'func',
  element: 'element',
  arrayOf: 'array',
  shape: 'object',
};

const getComponentsWithMetadata = () =>
  Promise.all(
    Object.entries(supportedComponents).map(([name, path]) =>
      metadataParser(path).then(metadata => ({
        metadata,
        name,
        path,
        propTypesReplaces: propTypesOverrides[name],
        defaultPropsReplaces: defaultPropsOverrides[name],
        imports: componentDependencies[name],
      })),
    ),
  );

const toPropType = metadataType => {
  const withPrefix = propType => 'PropTypes.' + propType;
  if (!metadataType) {
    return withPrefix(basicPropTypes.any);
  }
  const { name, value } = metadataType;
  const arrayToString = array => `[${array.join(', ')}]`;

  if (basicPropTypes[name]) {
    return withPrefix(basicPropTypes[name]);
  }

  if (name === 'union') {
    const arrayInString = arrayToString(value.map(toPropType));
    return withPrefix(`oneOfType(${arrayInString})`);
  }

  if (name === 'enum' && value.every(({ computed }) => !computed)) {
    const arrayInString = arrayToString(
      value.map(({ value: staticValue }) => staticValue),
    );
    return withPrefix(`oneOf(${arrayInString})`);
  }

  return withPrefix(basicPropTypes.any);
};

const metadataToPropTypes = compose(
  mapValues(({ type }) => toPropType(type)),
  get('props'),
);

const metadataToDefaultProps = compose(
  mapValues('defaultValue.value'),
  pickBy(({ defaultValue }) => defaultValue && !defaultValue.computed),
  get('props'),
);

const extractPropsMetadata = async () => {
  const componentsWithMetadata = await getComponentsWithMetadata();
  const componentsWithProps = componentsWithMetadata.map(
    ({
      name,
      path,
      metadata,
      propTypesReplaces,
      defaultPropsReplaces,
      imports,
    }) => ({
      name,
      path,
      propTypes: replace(metadataToPropTypes(metadata), propTypesReplaces),
      defaultProps: replace(
        metadataToDefaultProps(metadata),
        defaultPropsReplaces,
      ),
      imports,
    }),
  );
  return componentsWithProps;
};

function replace(originalProps, replaceProps = {}) {
  return Object.assign({}, originalProps, replaceProps);
}

module.exports = extractPropsMetadata;
