import React from 'react';
import { GeneralStructure, SingleComponent } from '../sharedComponents';

//8. Notifications
import Notification from 'wix-style-react/Notification';
import FloatingNotification from 'wix-style-react/FloatingNotification';
import SectionHelper from 'wix-style-react/SectionHelper';

const NotificationFamily = () => (
  <GeneralStructure title="8. Notifications">
    <SingleComponent
      name="8.1 Notification"
      componentsNames={['<Notification/>']}
    >
      <Notification theme="standard" show>
        <Notification.TextLabel>
          You have enabled new functionality
        </Notification.TextLabel>
        <Notification.CloseButton />
      </Notification>
    </SingleComponent>
    <SingleComponent
      name="8.2 Floating Notification"
      componentsNames={['<FloatingNotification/>']}
    >
      <FloatingNotification
        type="destructive"
        text="Image.jpg failed to upload"
      />
    </SingleComponent>
    <SingleComponent
      name="8.3 Section Helper"
      componentsNames={['<SectionHelper/>']}
    >
      <SectionHelper title="Don’t forget to setup payments">
        In order to sell your music you need to choose a payment method.
      </SectionHelper>
    </SingleComponent>
  </GeneralStructure>
);

export default NotificationFamily;
