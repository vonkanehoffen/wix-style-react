#!/usr/bin/env bash

# create beta components list
wuf update \
  --shape .wuf/required-component-files.json \
  --components src/beta \
  --max-mismatch 1 \
  --output .wuf/beta/components.json

# vanilla testkits
wuf export-testkits \
  --factoryName testkitFactoryCreator \
  --uniFactoryName uniTestkitFactoryCreator \
  --components .wuf/beta/components.json \
  --definitions .wuf/beta/testkits/definitions.js \
  --template .wuf/beta/testkits/vanilla.template.js \
  --exportSuffix Testkit \
  --exportCaseStyle PascalCase \
  --output testkit/beta/index.js

# enzyme testkits
wuf export-testkits \
  --factoryName enzymeTestkitFactoryCreator \
  --uniFactoryName enzymeUniTestkitFactoryCreator \
  --components .wuf/beta/components.json \
  --definitions .wuf/beta/testkits/definitions.js \
  --template .wuf/beta/testkits/enzyme.template.js \
  --exportSuffix Testkit \
  --exportCaseStyle PascalCase \
  --output testkit/beta/enzyme.js
