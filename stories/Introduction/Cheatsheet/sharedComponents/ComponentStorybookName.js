import React from 'react';

import Text from 'wix-style-react/Text';
import Box from 'wix-style-react/Box';

const ComponentStorybookName = ({ name, isDeveloped }) => (
  <Box marginBottom="6px">
    <Text
      secondary={!isDeveloped}
      light={!isDeveloped}
      size="medium"
      weight="bold"
    >
      {name}
    </Text>
  </Box>
);

export default ComponentStorybookName;
