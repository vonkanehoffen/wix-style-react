const extractPropsMetadata = require('./extractPropsMetadata');
const buildComponentWrappers = require('./buildComponentWrappers');

extractMetadataAndBuildComponentWrappers();

async function extractMetadataAndBuildComponentWrappers() {
  const metadata = await extractPropsMetadata();
  const uxPinIncludes = await buildComponentWrappers(metadata);
  console.log(JSON.stringify(uxPinIncludes)); // eslint-disable-line no-console
}
