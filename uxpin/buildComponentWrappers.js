const fs = require('fs');
const fsExtra = require('fs-extra');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);
const mkdir = util.promisify(fs.mkdir);
const stat = util.promisify(fs.stat);
const copy = util.promisify(fsExtra.copy);

const targetDir = 'dist/uxpin/components';

async function buildComponentWrappers(metadata) {
  await mkdir(targetDir, { recursive: true });
  return await Promise.all(
    metadata.map(componentDescriptor => {
      const { name } = componentDescriptor;
      const componentDir = `${targetDir}/${name}`;
      const componentFile = `${componentDir}/${name}.js`;
      const fileContents = buildComponentFile(componentDescriptor);
      const presetSrcDir = `uxpin/presets/${name}/`;
      const presetDir = `${componentDir}/presets/`;
      return mkdir(componentDir, { recursive: true })
        .then(() => writeFile(componentFile, fileContents))
        .then(() => {
          return mkdir(presetDir);
        })
        .then(async () => {
          try {
            const result = await stat(presetSrcDir);
            if (result) {
              await copy(presetSrcDir, presetDir);
            }
          } catch {}
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
