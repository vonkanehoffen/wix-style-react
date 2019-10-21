module.exports = {
  bundleSize: {
    files: [
      {
        glob: './bundles/ComposerHeader.js',
        maxSize: '36kb',
        maxDegradation: '10%',
      },
    ],
  },
};
