const components = require('./getSupportedComponents');
const metadataParser = require('react-autodocs-utils/src/metadata-parser');
const mapValues = require('lodash/fp/mapValues');
const pickBy = require('lodash/fp/pickBy');
const compose = require('lodash/fp/compose');
const get = require('lodash/fp/get');

const basicPropTypes = {
  string: 'string',
  number: 'number',
  bool: 'number',
  object: 'number',
  node: 'node',
  any: 'any',
  func: 'func',
  element: 'element',
  arrayOf: 'array',
  shape: 'object',
};

const getComponentsWithMetadata = () =>
  Promise.all(
    Object.entries(components).map(([name, path]) =>
      metadataParser(path).then(metadata => ({ name, path, metadata })),
    ),
  );

const toPropType = ({ name, value }) => {
  const withPrefix = propType => 'PropTypes.' + propType;
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
    ({ name, path, metadata }) => ({
      name,
      path,
      propTypes: metadataToPropTypes(metadata),
      defaultProps: metadataToDefaultProps(metadata),
    }),
  );
  return componentsWithProps;
};

module.exports = extractPropsMetadata;
