import React from 'react';

import { Container, Row, Col } from 'wix-style-react/Grid';
import Card from 'wix-style-react/Card';
import Text from 'wix-style-react/Text';
import Heading from 'wix-style-react/Heading';
import Box from 'wix-style-react/Box';

export const SingleComponent = ({
  name,
  componentsNames,
  children,
  secondary,
  light,
}) => (
  <Row>
    <Col span={6}>
      <Box marginBottom={'6px'}>
        <Text secondary={secondary} light={light} size="medium" weight="bold">
          {name}
        </Text>
      </Box>
      <Box>
        {componentsNames &&
          componentsNames.map((name, i) => (
            <Box marginRight={'6px'} key={i}>
              <Text size="small" weight="thin" secondary>
                {name}
              </Text>
            </Box>
          ))}
      </Box>
    </Col>
    <Col span={6}>{children}</Col>
  </Row>
);

export const GeneralStructure = ({ title, children }) => (
  <Card>
    <Card.Header title={title} />
    <Card.Content>
      <Container fluid>
        <Row>
          <Col span={6}>
            <Heading appearance="H5" light>
              INDEX NAME & I.C.
            </Heading>
          </Col>
          <Col span={6}>
            <Heading appearance="H5" light>
              PREVIEW
            </Heading>
          </Col>
        </Row>
        {children}
      </Container>
    </Card.Content>
  </Card>
);

export const NotDefined = () => (
  <Text light secondary size="tiny">
    Not Defined
  </Text>
);
export const NotDeveloped = () => (
  <Text light secondary size="tiny">
    Not Developed
  </Text>
);
