#!/usr/bin/env bash

# create components list
wuf update \
  --shape .wuf/required-component-files.json \
  --components src \
  --max-mismatch 1 \
  --exclude "(Typography|dnd-styles|DragDropContextProvider)" \
  --output .wuf/components.json

# vanilla testkits
wuf export-testkits \
  --factoryName testkitFactoryCreator \
  --uniFactoryName uniTestkitFactoryCreator \
  --components .wuf/components.json \
  --definitions .wuf/testkits/definitions.js \
  --template .wuf/testkits/vanilla.template.js \
  --output testkit/index.js

# enzyme testkits
wuf export-testkits \
  --factoryName enzymeTestkitFactoryCreator \
  --uniFactoryName enzymeUniTestkitFactoryCreator \
  --components .wuf/components.json \
  --definitions .wuf/testkits/definitions.js \
  --template .wuf/testkits/enzyme.template.js \
  --output testkit/enzyme.js
