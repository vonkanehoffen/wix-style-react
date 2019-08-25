import React from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
  singleComponentSizes,
} from '../sharedComponents';

//11. Other
import Avatar from 'wix-style-react/Avatar';
import Badge, { TYPE } from 'wix-style-react/Badge';
import BadgeSelect from 'wix-style-react/BadgeSelect';
import CounterBadge from 'wix-style-react/CounterBadge';
import Tag from 'wix-style-react/Tag';
import Loader from 'wix-style-react/Loader';
import LinearProgressBar from 'wix-style-react/LinearProgressBar';
import CircularProgressBar from 'wix-style-react/CircularProgressBar';

//Assets
import { Layout, Cell } from 'wix-style-react/Layout';
import Box from 'wix-style-react/Box';
import InfoSmall from 'wix-ui-icons-common/InfoSmall';

const AvatarExample = () => {
  const avatarName = 'John Doe';

  const avatarColors = ['blue', 'grey', 'green', 'red', 'orange'];

  const renderAvatar = props => <Avatar {...props} />;

  return (
    <SingleComponentSideBySide
      name="11.1 Avatar"
      componentsNames={['<Avatar/>']}
    >
      <Layout cols={5} justifyItems="center" alignItems="center">
        {avatarColors.map((color, i) =>
          renderAvatar({ color, name: avatarName, key: `avatar-${i + 1}` }),
        )}
      </Layout>
    </SingleComponentSideBySide>
  );
};

const BadgeExample = () => {
  const badgeSkins = [
    'standard',
    'neutral',
    'success',
    'warning',
    'danger',
    'urgent',
    'premium',
    'general',
  ];

  const badgeSkinsLight = [
    'neutralStandard',
    'neutralLight',
    'neutralSuccess',
    'warningLight',
    'neutralDanger',
  ];

  const badgeTypes = Object.keys(TYPE);

  const renderBadge = props => <Badge {...props}>Badge</Badge>;

  const renderTypes = props =>
    badgeTypes.map((type, i) => (
      <Cell key={`badge-type-${i + 1}`}>{renderBadge({ type, ...props })}</Cell>
    ));

  const renderSkinLayout = (skin, i) => (
    <Layout key={`skin-layout-${i + 1}`} gap="5px">
      {renderTypes({ uppercase: false, skin })}
    </Layout>
  );

  return (
    <SingleComponentSideBySide
      name="11.2 Badge"
      componentsNames={['<Badge/>', '<Icon/>']}
    >
      <Layout cols={8}>
        {badgeSkins.map(renderSkinLayout)}
        {badgeSkinsLight.map(renderSkinLayout)}
      </Layout>
    </SingleComponentSideBySide>
  );
};

const BadgeSelectExample = () => {
  const counterBadgeSkins = [
    'standard',
    'neutral',
    'success',
    'warning',
    'danger',
    'urgent',
    'premium',
    'general',
    'neutralStandard',
    'neutralLight',
    'neutralSuccess',
    'warningLight',
    'neutralDanger',
  ];

  const badgeSelectOptions = counterBadgeSkins.map((skin, i) => {
    return { id: `${i + 1}`, skin, text: skin };
  });

  const badgeSelectTypes = ['solid', 'outlined', 'transparent'];

  const renderBadgeSelect = props => <BadgeSelect {...props} />;

  return (
    <SingleComponentSideBySide
      name="11.3 Badge Select"
      componentsNames={['<BadgeSelect/>']}
    >
      <Layout cols={3}>
        {badgeSelectTypes.map((type, i) =>
          renderBadgeSelect({
            type,
            options: badgeSelectOptions,
            key: `badge-select-${i + 1}`,
            uppercase: true,
          }),
        )}
      </Layout>
    </SingleComponentSideBySide>
  );
};

const CounterBadgeExample = () => {
  const counterBadgeValues = [1, 12, 120, <InfoSmall />];

  const counterBadgeSkins = [
    'standard',
    'success',
    'warning',
    'danger',
    'urgent',
    'general',
  ];

  const renderCounterBadge = props => <CounterBadge {...props} />;

  return (
    <SingleComponentSideBySide
      name="11.4 Counter Badge"
      componentsNames={['<CounterBadge/>']}
    >
      <Layout cols={6}>
        <Layout gap="5px">
          {counterBadgeSkins.map((skin, i) => (
            <Cell key={`cell-counter-badge-skin-${i + 1}`}>
              {renderCounterBadge({
                skin,
                children: i + 1,
                key: `counter-badge-skin-${i + 1}`,
              })}
            </Cell>
          ))}
        </Layout>
        <Layout gap="5px">
          {counterBadgeValues.map((value, i) => (
            <Cell key={`cell-counter-badge-values-${i + 1}`}>
              {renderCounterBadge({
                children: value,
                key: `counter-badge-${i + 1}`,
              })}
            </Cell>
          ))}
        </Layout>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const TagExample = () => {
  const thumbTags = [
    {
      id: '1',
      label: 'Green',
      thumb: <Box height="100%" backgroundColor="G10" />,
    },
    {
      id: '2',
      label: 'Red',
      thumb: <Box height="100%" backgroundColor="R10" />,
    },
    {
      id: '3',
      label: 'Yellow',
      thumb: <Box height="100%" backgroundColor="Y10" />,
    },
  ];

  const themeTags = [
    { id: '1', label: 'Default' },
    { id: '2', label: 'Error', theme: 'error' },
    { id: '3', label: 'Warning', theme: 'warning' },
    { id: '4', label: 'Dark', theme: 'dark' },
  ];

  const renderTag = props => <Tag {...props}>{props.label}</Tag>;

  const renderTagsLayout = tagsArr => (
    <Layout gap="5px">
      {tagsArr.map((tagProps, i) =>
        renderTag({ ...tagProps, key: `tag-${i + 1}` }),
      )}
    </Layout>
  );

  return (
    <SingleComponentSideBySide name="11.5 Tag" componentsNames={['<Tag/>']}>
      <Layout>
        <Cell>{renderTagsLayout(thumbTags)}</Cell>
        <Cell>{renderTagsLayout(themeTags)}</Cell>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const LoaderExample = () => (
  <SingleComponentSideBySide name="11.6 Loader" componentsNames={['<Loader/>']}>
    <Layout cols={4}>
      <Loader size="small" />
      <Loader />
      <Loader size="large" />
      <Loader text="LOADER" />
    </Layout>
  </SingleComponentSideBySide>
);

const LinearProgressBarEXample = () => (
  <SingleComponentSideBySide
    name="11.7 Linear Progress Bar"
    componentsNames={['<LinearProgressBar/>']}
    size={singleComponentSizes.compact}
  >
    <Layout>
      <Cell>
        <LinearProgressBar value={25} />
      </Cell>
      <Cell>
        <Box backgroundColor="D10">
          <LinearProgressBar light value={25} />
        </Box>
      </Cell>
    </Layout>
  </SingleComponentSideBySide>
);

const CircularProgressBarExample = () => (
  <SingleComponentSideBySide
    name="11.8 Circular Progress Bar"
    componentsNames={['<CircularProgressBar/>']}
    size={singleComponentSizes.compact}
  >
    <Layout cols={2}>
      <CircularProgressBar value={25} />
      <Box height={54} width={54} backgroundColor="D10">
        <CircularProgressBar light value={25} />
      </Box>
    </Layout>
  </SingleComponentSideBySide>
);

const OtherFamily = () => (
  <FamilyStructure title="11. Other">
    <AvatarExample />
    <BadgeExample />
    <BadgeSelectExample />
    <CounterBadgeExample />
    <TagExample />
    <LoaderExample />
    <LinearProgressBarEXample />
    <CircularProgressBarExample />
  </FamilyStructure>
);

export default OtherFamily;
