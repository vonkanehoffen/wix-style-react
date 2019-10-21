module.exports = {
  bundleSize: {
    files: [
      {
        glob: './bundles/ComposerHeader.js',
        maxSize: '37kb',
        maxDegradation: '10%',
      },
    ],
  },
};
