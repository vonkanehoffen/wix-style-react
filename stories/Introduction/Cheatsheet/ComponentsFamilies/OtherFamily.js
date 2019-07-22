import React from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
} from '../sharedComponents';

//11. Other
import Avatar from 'wix-style-react/Avatar';
import Badge from 'wix-style-react/Badge';
import BadgeSelect from 'wix-style-react/BadgeSelect';
import CounterBadge from 'wix-style-react/CounterBadge';
import Tag from 'wix-style-react/Tag';
import Loader from 'wix-style-react/Loader';
import LinearProgressBar from 'wix-style-react/LinearProgressBar';
import CircularProgressBar from 'wix-style-react/CircularProgressBar';

const OtherFamily = () => {
  const badgeSelectOptions = [
    {
      id: '0',
      skin: 'general',
      text: 'general',
    },
    {
      id: '1',
      skin: 'standard',
      text: 'standard',
    },
    {
      id: '2',
      skin: 'danger',
      text: 'danger',
    },
    {
      id: '3',
      skin: 'success',
      text: 'success',
    },
    {
      id: '4',
      skin: 'neutral',
      text: 'neutral',
    },
    {
      id: '5',
      skin: 'neutralLight',
      text: 'neutralLight',
    },
    {
      id: '6',
      skin: 'warning',
      text: 'warning',
    },
    {
      id: '7',
      skin: 'warningLight',
      text: 'warningLight',
    },
    {
      id: '8',
      skin: 'urgent',
      text: 'urgent',
    },
    {
      id: '9',
      skin: 'neutralStandard',
      text: 'neutralStandard',
    },
    {
      id: '10',
      skin: 'neutralSuccess',
      text: 'neutralSuccess',
    },
    {
      id: '11',
      skin: 'neutralDanger',
      text: 'neutralDanger',
    },
    {
      id: '12',
      skin: 'premium',
      text: 'premium',
    },
  ];

  return (
    <FamilyStructure title="11. Other">
      <SingleComponentSideBySide
        name="11.1 Avatar"
        componentsNames={['<Avatar/>']}
      >
        <Avatar />
      </SingleComponentSideBySide>
      <SingleComponentSideBySide
        name="11.2 Badge"
        componentsNames={['<Badge/>']}
      >
        <Badge uppercase={false}>Badge</Badge>
      </SingleComponentSideBySide>
      <SingleComponentSideBySide
        name="11.3 Badge Select"
        componentsNames={['<BadgeSelect/>']}
      >
        <BadgeSelect options={badgeSelectOptions} uppercase />
      </SingleComponentSideBySide>
      <SingleComponentSideBySide
        name="11.4 Counter Badge"
        componentsNames={['<CounterBadge/>']}
      >
        <CounterBadge>12</CounterBadge>
      </SingleComponentSideBySide>
      <SingleComponentSideBySide name="11.5 Tag" componentsNames={['<Tag/>']}>
        <Tag>Tag</Tag>
      </SingleComponentSideBySide>
      <SingleComponentSideBySide
        name="11.6 Loader"
        componentsNames={['<Loader/>']}
      >
        <Loader />
      </SingleComponentSideBySide>
      <SingleComponentSideBySide
        name="11.7 Linear Progress Bar"
        componentsNames={['<LinearProgressBar/>']}
      >
        <LinearProgressBar value={25} />
      </SingleComponentSideBySide>
      <SingleComponentSideBySide
        name="11.8 Circular Progress Bar"
        componentsNames={['<CircularProgressBar/>']}
      >
        <CircularProgressBar value={25} />
      </SingleComponentSideBySide>
    </FamilyStructure>
  );
};

export default OtherFamily;
