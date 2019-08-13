import React from 'react';

import Text from 'wix-style-react/Text';
import Box from 'wix-style-react/Box';

const ComponentsNames = ({ componentsNames }) => (
  <Box>
    {componentsNames.map((name, i) => (
      <Box
        marginRight={i !== componentsNames.length - 1 ? '6px' : null}
        key={`component-name-${i}`}
      >
        <Text size="small" weight="thin" secondary>
          {name}
        </Text>
      </Box>
    ))}
  </Box>
);

export default ComponentsNames;
