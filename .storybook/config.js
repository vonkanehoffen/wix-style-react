import { addParameters, configure } from '@storybook/react';
import { version } from '../package.json';
import { setOptions } from '@storybook/addon-options';

import '../src/assets/helvetica.scss';

function loadStories() {
  require('./stories.scss');
  require('../stories');
}

configure(loadStories, module);

addParameters({
  options: {
    name: 'name',
    showPanel: false,
    isFullscreen: false,
    storySort: undefined,
    isToolshown: false,
  },
});

setOptions({
  name: `wix-style-react ${version}`,
  url: 'https://github.com/wix/wix-style-react',
});
