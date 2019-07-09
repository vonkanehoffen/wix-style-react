#!/usr/bin/env bash

# create beta components list
wuf update \
  --shape .wuf/required-component-files.json \
  --components src/beta \
  --max-mismatch 1 \
  --output .wuf/beta/components.json

# vanilla testkits
wuf export-testkits \
  --components .wuf/beta/components.json \
  --definitions .wuf/beta/testkits/definitions.js \
  --template .wuf/beta/testkits/vanilla.template.ejs \
  --output testkit/beta/index.js

# enzyme testkits
wuf export-testkits \
  --components .wuf/beta/components.json \
  --definitions .wuf/beta/testkits/definitions.js \
  --template .wuf/beta/testkits/enzyme.template.ejs \
  --output testkit/beta/enzyme.js
