module.exports = [
  {
    codemod: 'stories-file.js',
    dist: 'stories/index.js',
    description: 'Add story to the stories file',
  },
  {
    codemod: 'index-file.js',
    dist: 'src/index.js',
    description: 'Add component export to the index file',
  },
  {
    codemod: 'zeplin-file.js',
    dist: '.zeplin/components.json',
    description: 'Add Zeplin files names to the zeplin file',
  },
];
