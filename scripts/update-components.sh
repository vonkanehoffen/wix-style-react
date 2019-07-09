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
  --components .wuf/components.json \
  --definitions .wuf/testkits/definitions.js \
  --template .wuf/testkits/vanilla.template.ejs \
  --output testkit/index.js

# enzyme testkits
wuf export-testkits \
  --components .wuf/components.json \
  --definitions .wuf/testkits/definitions.js \
  --template .wuf/testkits/enzyme.template.ejs \
  --output testkit/enzyme.js
