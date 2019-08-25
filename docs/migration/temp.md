# Deprecating `<StatsWidget/>` component

`<StatisticsWidget/>` is the new replacement.
1. In contrast to old`<StatsWidget/>`, new <StatisticsWidget/> does not render the statistics inside a card. If needed it should be composed in one.
2. In addition to the existing features, it adds the following:
    * keyboard & mouse accesibility features
    * hover state & click functionality
    * description tooltip
    * customized text instead of elipssis
    
Examples for all features can be viewed [here](https://wix-wix-style-react.surge.sh/?selectedKind=WIP&selectedStory=StatisticsWidget&full=0&addons=0&stories=1&panelRight=0) 

#### How to easily migrate?
Let's say that you have this widget


```
import React from 'react';
import StatsWidget from '..';
import styles from './ExampleStatsWidget.scss';
import { Container } from '../../Grid';
import { storySettings } from './storySettings';

const statistics = [
  {
    title: '$10',
    subtitle: 'Revenue',
  },
  {
    title: '2',
    subtitle: 'Products',
  },
  {
    title: '$1',
    subtitle: 'Transactions',
  },
];

export default () => (
  <Container>
    <div data-hook="card-example" className={styles.statsWidgetWrapper}>
      <StatsWidget
        title="Let's see what's going on with your store"
        statistics={statistics}
        dataHook={storySettings.dataHook}
      />
    </div>
  </Container>
);
```

[See the full migration doc here](../../src/Heading/MIGRATION.md)
### `<Checkbox/>`

prop `active` was removed, please use `checked` instead

```diff
-<Checkbox active/>
+<Checkbox checked/>
```

---

value `large` for prop `size` was removed, please use `medium`.

```diff
-<Checkbox size="large"/>
+<Checkbox size="medium"/>
```

### `<Icons/>`

Old icons were deprecated for a long time and are no longer available. Consult [migration doc here](./NEW_ICONS_MIGRATION.md)

### `<Button/>`

A temporary `withNewIcons` prop was removed, it is now the default.

```diff
-<Button withNewIcons/>
+<Button/>
```


### `<LanguagePicker/>`

This component was deprecated for a long time and is no longer
available. Instead of `<LanguagePicker/>` please use `<IconWithOptions/>`

### `<SideBar/>`

For a long time this component was undershadowed by `<SideMenu/>`.
`wix-style-react@5.0.0` no longer provides `<SideBar/>` please instead
use `<SideMenu/>`

### Grid

1. Alongside `<Row/>` & `<Col/>` grid also used to export `Card`. Please
   import `Card` separately:

    ```diff
    -import {Row, Col, Card} from 'wix-style-react/Grid'
    +import {Row, Col} from 'wix-style-react/Grid'
    +import Card from 'wix-style-react/Card'
    ```

2. `<Row/>` & `<Col/>` components had the following css:
    ```css
    > * { box-sizing: border-box; }
    ```

    it meant that all child components would receive such `box-sizing`
    which was not always desired.

    since `wix-style-react@5.0.0` css was changed to:
    ```css
    .row,
    .col { box-sizing: border-box; }
    ```

    This now means that only `<Row/>` and `<Col/>` have this but none of
    this children.

    It should not be a breaking change but it's worth mentioning because
    some projects may have `box-sizing` overwritten.
