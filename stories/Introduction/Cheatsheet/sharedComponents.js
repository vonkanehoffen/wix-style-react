import React from 'react';

import { Container, Row, Col } from 'wix-style-react/Grid';
import Card from 'wix-style-react/Card';
import Text from 'wix-style-react/Text';
import Heading from 'wix-style-react/Heading';
import Box from 'wix-style-react/Box';

const renderComponentsNames = componentsNames =>
  componentsNames &&
  componentsNames.map((name, i) => (
    <Box marginRight={i !== componentsNames.length - 1 ? '6px' : null} key={i}>
      <Text size="small" weight="thin" secondary>
        {name}
      </Text>
    </Box>
  ));

const renderNameSection = ({ name, secondary, light }) => (
  <Box marginBottom="6px">
    <Text secondary={secondary} light={light} size="medium" weight="bold">
      {name}
    </Text>
  </Box>
);

export const SingleComponent = ({
  name,
  componentsNames,
  children,
  secondary,
  light,
  compact,
}) => (
  <Row>
    <Col span={4}>
      {renderNameSection({ name, secondary, light })}
      <Box>{renderComponentsNames(componentsNames)}</Box>
    </Col>
    <Col span={8}>
      {compact ? (
        <Row>
          <Col span={6}>{children}</Col>
        </Row>
      ) : (
        children
      )}
    </Col>
  </Row>
);

export const SingleLayoutComponent = ({
  name,
  componentsNames,
  children,
  secondary,
  light,
}) => (
  <Row>
    <Col>
      {renderNameSection({ name, secondary, light })}
      <Box marginBottom="18px">{renderComponentsNames(componentsNames)}</Box>
      {children}
    </Col>
  </Row>
);

export const GeneralStructure = ({ title, children, showPreview = true }) => (
  <Card>
    <Card.Header title={title} />
    <Card.Content>
      <Container fluid>
        <Row>
          <Col span={4}>
            <Heading appearance="H5" light>
              INDEX NAME & I.C.
            </Heading>
          </Col>
          <Col span={8}>
            {showPreview && (
              <Heading appearance="H5" light>
                PREVIEW
              </Heading>
            )}
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
