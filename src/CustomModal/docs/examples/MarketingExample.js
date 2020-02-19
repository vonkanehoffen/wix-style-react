/* eslint-disable */
import React from 'react';
import Modal from 'wix-style-react/Modal';
import Button from 'wix-style-react/Button';
import Box from 'wix-style-react/Box';
import CustomModal from "../../CustomModal";

class MarketingExample extends React.Component {
  state = {
    isModalOpened: false,
  };

  openModal = () => this.setState({ isModalOpened: true });

  closeModal = () => this.setState({ isModalOpened: false });

  render() {
    const { isModalOpened } = this.state;
    return (
      <>
        <Button onClick={this.openModal}>Open Modal</Button>
        <Modal isOpen={isModalOpened} onRequestClose={this.closeModal}>
          <CustomModal removeContentPadding onCloseButtonClick={this.closeModal}>
            <Card>
              <Box width="800px" verticalAlign="middle" >
                <MarketingLayout
                  title={
                      <Heading appearance="H2">Wix Unlimited Website Premium Plan</Heading>
                  }
                  description={
                    <Box direction="vertical" align="left"  >
                      <Text weight={"normal"}>Get a customizable website, designed to match the colors and style of your logo.</Text>
                      <Text weight={"normal"}>The unlimited plan includes:
                        <ul>
                          <li>Free Custom Domain for 1 year</li>
                          <li>Extra storage & unlimited bandwidth</li>
                          <li>Ad vouchers to promote your site</li>
                        </ul>
                      </Text>
                    </Box>
                  }
                  size="medium"
                  image="https://static.parastorage.com/services/promote-seo/1.980.0/assets/task-list/ic-connect-to-google-icon.svg"
                  imageBackgroundColor="B50"
                  actions={<Button>Add to Cart</Button>}
                />
              </Box>
            </Card>
          </CustomModal>
        </Modal>
      </>
    );
  }
}

