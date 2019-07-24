module.exports = {
  bundleSize: {
    files: [
      './dist/*.js', // It can be an exact file
      './dist/*.css', // or just use a glob
      {
        glob: './bundles/Accordion.js',
        maxSize: '115kb', // You can add thresholds for your bundles to break the build due to the gzipped bundle size
      },
    ],
  },
};
