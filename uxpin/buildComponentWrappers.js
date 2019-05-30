const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);
const mkdir = util.promisify(fs.mkdir);

const targetDir = 'dist/uxpin/components';

async function buildComponentWrappers(metadata) {
  await mkdir(targetDir, { recursive: true });
  return await Promise.all(
    metadata.map(componentDescriptor => {
      const { name } = componentDescriptor;
      const componentFile = `${targetDir}/${name}.js`;
      const fileContents = buildComponentFile(componentDescriptor);
      return writeFile(componentFile, fileContents).then(() => componentFile);
    }),
  );
}

function buildComponentFile({ name, path, propTypes, defaultProps }) {
  return `import React from 'react';
import PropTypes from 'prop-types';

import ${name}M from '../../../${path}';

function ${name}(props) {
  return <${name}M {...props}>{props.children}</${name}M>;
}

${name}.propTypes = {
  ${buildProps(propTypes)}
};

${name}.defaultProps = {
  ${buildProps(defaultProps)}
};

export default ${name};
`;
}

function buildProps(props) {
  return Object.keys(props).reduce((acc, curr) => {
    return `${acc}'${curr}': ${props[curr]},
  `;
  }, '');
}

module.exports = buildComponentWrappers;
