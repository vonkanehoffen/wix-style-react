const extractPropsMetadata = require('./extractPropsMetadata');
const buildComponentWrappers = require('./buildComponentWrappers');
const util = require('util');
const fs = require('fs');

const writeFile = util.promisify(fs.writeFile);

extractMetadataAndBuildComponentWrappers();

function buildUxpinConfig(includes, configFile) {
  return writeFile(
    configFile,
    `module.exports = {
    components: {
      categories: [
        {
          name: 'General',
          include: ${JSON.stringify(includes)}
        },
      ],
    },
    name: 'WSR Design System',
  };`,
  );
}

async function extractMetadataAndBuildComponentWrappers() {
  const metadata = await extractPropsMetadata();
  const uxPinIncludes = await buildComponentWrappers(metadata);
  await buildUxpinConfig(uxPinIncludes, './dist/uxpin/uxpin.config.js');
}
