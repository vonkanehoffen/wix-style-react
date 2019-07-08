import React from 'react';
import { storiesOf } from '@storybook/react';

import Markdown from 'wix-storybook-utils/Markdown';

import Readme from '../../README.md';
import UsageWithoutYoshiReadme from '../../docs/usage-without-yoshi.md';

import ComponentsCheatsheet from './Cheatsheet/ComponentsCheatsheet';

storiesOf('Introduction', module)
  .add('Getting started', () => <Markdown source={Readme} />)
  .add('Components Cheatsheet', () => <ComponentsCheatsheet />)
  .add('Usage Without Yoshi', () => (
    <Markdown source={UsageWithoutYoshiReadme} />
  ));

//TODO - add contribution docs links here somehow
