import React, { Component } from 'react';
import { SingleLayoutComponent } from '../../../sharedComponents';
import Card from 'wix-style-react/Card';
import Page from 'wix-style-react/Page';
import Box from 'wix-style-react/Box';
import { Row, Col, Container } from 'wix-style-react/Grid';
import Button from 'wix-style-react/Button';
import TextButton from 'wix-style-react/TextButton';
import Add from 'wix-style-react/new-icons/Add';
import Breadcrumbs from 'wix-style-react/Breadcrumbs';
import PopoverMenu from 'wix-style-react/PopoverMenu';
import PopoverMenuItem from 'wix-style-react/PopoverMenuItem';
import EmptyState from 'wix-style-react/EmptyState';

class ExamplePageWithCard extends Component {
  renderHeader() {
    const ActionBar = () => {
      return (
        <Box>
          <Box>
            <PopoverMenu
              buttonTheme="icon-greybackground"
              placement="bottom"
              size="normal"
              appendToParent
            >
              <PopoverMenuItem onClick={() => {}} text="Refresh" />
              <PopoverMenuItem onClick={() => {}} text="Trash" />
            </PopoverMenu>
          </Box>
          <Box marginLeft="small" marginRight="small">
            <Button skin="light">Cancel</Button>
          </Box>
          <Box>
            <Button>Save</Button>
          </Box>
        </Box>
      );
    };

    return (
      <Page.Header
        title="Page Title"
        breadcrumbs={
          <Breadcrumbs
            items={[1, 2, 3].map(i => ({ id: `${i}`, value: `Page ${i}` }))}
            activeId="3"
            size="medium"
            theme="onGrayBackground"
            onClick={() => {}}
          />
        }
        actionsBar={<ActionBar />}
      />
    );
  }

  render() {
    return (
      <Page upgrade>
        {this.renderHeader()}
        <Page.Content>
          <Container>
            <Row>
              <Col>
                <Card>
                  <Card.Header title="Card Title" />
                  <Card.Content>
                    <Box height="150px" />
                  </Card.Content>
                </Card>
              </Col>
            </Row>
          </Container>
        </Page.Content>
      </Page>
    );
  }
}

class ExamplePageEmptyState extends Component {
  renderHeader() {
    const ActionBar = () => {
      return (
        <Button withNewIcons prefixIcon={<Add />}>
          New Item
        </Button>
      );
    };

    return (
      <Page.Header
        title="Page Title"
        breadcrumbs={
          <Breadcrumbs
            items={[1, 2, 3].map(i => ({ id: `${i}`, value: `Page ${i}` }))}
            activeId="3"
            size="medium"
            theme="onGrayBackground"
            onClick={() => {}}
          />
        }
        actionsBar={<ActionBar />}
      />
    );
  }

  render() {
    return (
      <Page upgrade>
        {this.renderHeader()}
        <Page.Content>
          <Container>
            <Row>
              <Col>
                <EmptyState
                  image={
                    <Box
                      height="120px"
                      width="120px"
                      backgroundColor="D60"
                      borderRadius="50%"
                    />
                  }
                  subtitle="Create your product item in an easy & fast way to display it on your site"
                  theme="page"
                  title="You don't have any items yet"
                >
                  <TextButton prefixIcon={<Add />}>New Item</TextButton>
                </EmptyState>
              </Col>
            </Row>
          </Container>
        </Page.Content>
      </Page>
    );
  }
}

const PageExamples = () => (
  <SingleLayoutComponent
    name="2.1 Page Layout"
    componentsNames={[
      '<Page/>',
      '<Page.Header/>',
      '<Grid/>',
      '<Card/>',
      '<EmptyState/>',
    ]}
  >
    <ExamplePageWithCard />
    <Box height={'30px'} backgroundColor={'WHITE'} />
    <ExamplePageEmptyState />
  </SingleLayoutComponent>
);

export default PageExamples;
