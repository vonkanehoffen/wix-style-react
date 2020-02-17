import * as React from 'react';
import { BadgeSelectItemBuilder } from '../../src/BadgeSelectItemBuilder';

function badgeSelectItemBuilderWithAllProps() {
  const {id, value} = BadgeSelectItemBuilder({ id: '1', skin: 'danger', text: 'text' });
}
