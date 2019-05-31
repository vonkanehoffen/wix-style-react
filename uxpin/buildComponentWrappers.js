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
      const componentDir = `${targetDir}/${name}`;
      const componentFile = `${componentDir}/${name}.js`;
      const fileContents = buildComponentFile(componentDescriptor);
      return mkdir(componentDir, { recursive: true })
        .then(() => writeFile(componentFile, fileContents))
        .then(() => {
          const presetDir = `${componentDir}/presets/`;
          return mkdir(presetDir);
        })
        .then(() => componentFile);
    }),
  );
}

function buildComponentFile({ name, path, propTypes, defaultProps, imports }) {
  return `import React from 'react';
import PropTypes from 'prop-types';

import ${name}M from '../../../${path}';

${buildImports(imports)}

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

function buildImports(imports) {
  return Object.entries(imports || {})
    .map(([name, path]) => `import ${name} from '../../../${path}';`)
    .join('\n');
}

module.exports = buildComponentWrappers;
