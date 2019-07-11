import React from 'react';
import { SingleLayoutComponent } from '../../../sharedComponents';
import Card from 'wix-style-react/Card';
import Box from 'wix-style-react/Box';
import { Row, Col, Container } from 'wix-style-react/Grid';
import TextButton from 'wix-style-react/TextButton';

import Add from 'wix-style-react/new-icons/Add';

const CardExamples = () => (
  <SingleLayoutComponent
    name="2.2 Card Layout"
    componentsNames={[
      '<Card/>',
      '<Card.Header/>',
      '<Card.Content/>',
      '<Card.Divider/>',
    ]}
  >
    <Box padding="30px" backgroundColor="D70">
      <Card stretchVertically>
        <Card.Header
          title="Card title"
          subtitle="This is how a subtitle looks like"
          suffix={
            <TextButton
              onClick={() => alert('Clicked!')}
              size="medium"
              theme="fullblue"
              prefixIcon={<Add />}
              children="Text Button"
            />
          }
        />
        <Card.Content>
          <Box minHeight="200px" />
        </Card.Content>
      </Card>
    </Box>
  </SingleLayoutComponent>
);

export default CardExamples;
