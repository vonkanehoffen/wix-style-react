import React from 'react';

import Text from 'wix-style-react/Text';
import TextButton from 'wix-style-react/TextButton';

import Box from 'wix-style-react/Box';

const ComponentsNames = ({ componentsNames }) => (
  <Box>
    {componentsNames.map((name, i) => {
      let componentName;

      if (typeof name === 'string') {
        componentName = (
          <Text size="small" weight="thin" secondary>
            {name}
          </Text>
        );
      } else {
        componentName = (
          <TextButton size="small" onClick={name.url}>
            {name.text}{' '}
          </TextButton>
        );
      }

      return (
        <Box
          marginRight={i !== componentsNames.length - 1 ? '6px' : null}
          key={`component-name-${i}`}
        >
          {componentName}
        </Box>
      );
    })}
  </Box>
);

export default ComponentsNames;
