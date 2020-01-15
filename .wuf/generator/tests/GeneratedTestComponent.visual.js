import React from 'react';
import { storiesOf } from '@storybook/react';

import GeneratedTestComponent from '../../../src/GeneratedTestComponent';

storiesOf(`GeneratedTestComponent`, module).add('Sanity', () => (
  <div>
    <GeneratedTestComponent buttonText="Hello" />
    <GeneratedTestComponent buttonText="Testing" />
    <GeneratedTestComponent buttonText="World!" />
  </div>
));
