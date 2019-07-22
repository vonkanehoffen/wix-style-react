import React from 'react';
import { node, bool } from 'prop-types';

import Card from 'wix-style-react/Card';
import Box from 'wix-style-react/Box';

const Preview = ({ children, wrapWithCard }) => (
  <Box direction="vertical" padding="30px" backgroundColor="D70">
    {wrapWithCard ? (
      <Card>
        <Card.Content>{children}</Card.Content>
      </Card>
    ) : (
      children
    )}
  </Box>
);

Preview.propTypes = {
  /** any node to render inside */
  children: node,

  /** true in case the children should be wrapped within a Card */
  wrapWithCard: bool,
};

Preview.displayName = 'Preview';

export default Preview;
