import React from 'react';
import {
  FamilyStructure,
  SingleComponentStacked,
  NotDefined,
  NotDeveloped,
  Preview,
  singleComponentSizes,
} from '../sharedComponents';

import { contentWidgetsSymbolsToComponents } from '../../../symbolsComponentsMapping/families/ContentWidgetsFamily';

import { createLinkedComponentsNames } from '../sharedComponents/utils';

import {
  contentWidgetsSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

//Assets
import Text from 'wix-style-react/Text';
import Box from 'wix-style-react/Box';
import CardGalleryItem from 'wix-style-react/CardGalleryItem';
import Badge from 'wix-style-react/Badge';
import { Container, Row, Col } from 'wix-style-react/Grid';
import { Hint } from 'wix-style-react/new-icons';
import Card from 'wix-style-react/Card';

// 12. Content Widgets
import EmptyState from 'wix-style-react/EmptyState';
import StatsWidget from 'wix-style-react/StatsWidget';
import Carousel from 'wix-style-react/Carousel';
import Accordion from 'wix-style-react/Accordion';

const groupSymbol = symbolsGroup.contentWidgets;

const ImageWidgetExample = () => {
  const symbol = contentWidgetsSymbols.imageWidget;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <NotDefined />
    </SingleComponentStacked>
  );
};

const EmptyStateExample = () => {
  const symbol = contentWidgetsSymbols.emptyState;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview wrapWithCard stretch>
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
          title="You don't have any items yet"
        />
      </Preview>
    </SingleComponentStacked>
  );
};

const StatsWidgetExamples = () => {
  const statistics = [
    {
      title: '$10',
      subtitle: 'Revenue',
      percent: -15,
    },
    {
      title: '2',
      subtitle: 'Products',
      percent: -15,
    },
    {
      title: '1',
      subtitle: 'Transactions',
      percent: 0,
    },
    {
      title: '$5',
      subtitle: 'Profit',
      percent: 10,
    },
    {
      title: '456',
      subtitle: 'Music',
      percent: 15,
    },
  ];

  const dropdownOption = [
    { id: 0, value: 'This month' },
    { id: 1, value: 'This week' },
  ];

  const onFilterChange = () => alert('hi');

  const symbol = contentWidgetsSymbols.statsWidget;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview wrapWithCard stretch>
        <StatsWidget
          title="Let's see what's going on with your store"
          statistics={statistics}
        >
          <StatsWidget.FilterButton
            initialSelectedId={1}
            options={dropdownOption}
            onSelect={onFilterChange}
          />
        </StatsWidget>
      </Preview>
    </SingleComponentStacked>
  );
};

const CarouselExample = () => {
  const carouselItems = ['first', 'second', 'third'].map((ordinalNum, i) => (
    <Card key={`carousel-item-${i}`}>
      <Box height="66px" align="center" verticalAlign="middle">
        <Hint size="54px" color="#89cff8" />
        <Text>This is the {ordinalNum} information text </Text>
      </Box>
    </Card>
  ));

  const symbol = contentWidgetsSymbols.carousel;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview stretch>
        <Carousel>{carouselItems}</Carousel>
      </Preview>
    </SingleComponentStacked>
  );
};

const AccordionExample = () => {
  const itemText = (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua
    </Text>
  );

  const accordionItems = [
    {
      title: 'First Initially Open Row',
      children: itemText,
      open: true,
      collapseLabel: 'Less',
    },
    {
      title: 'Second Row',
      children: itemText,
      collapseLabel: 'Less',
    },
    {
      title: 'Third Row',
      children: itemText,
      collapseLabel: 'Less',
    },
  ];

  const symbol = contentWidgetsSymbols.accordion;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview stretch>
        <Accordion multiple items={accordionItems} />
      </Preview>
    </SingleComponentStacked>
  );
};

const CardGalleryItemExample = () => {
  const backgroundImageUrl =
    'https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_343,h_343,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg';

  const symbol = contentWidgetsSymbols.cardGalleryItem;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview stretch>
        <CardGalleryItem
          title="Card title"
          badge={
            <Badge size="medium" skin="standard" type="solid" uppercase>
              sale
            </Badge>
          }
          subtitle="Card subtitle"
          primaryActionProps={{
            label: 'Button',
            onClick: () => {
              alert('Primary action clicked');
            },
          }}
          secondaryActionProps={{
            label: 'Text link',
            onClick: () => {
              alert('Secondary action clicked');
            },
          }}
          backgroundImageUrl={backgroundImageUrl}
        />
      </Preview>
    </SingleComponentStacked>
  );
};

const PreviewExample = () => {
  const symbol = contentWidgetsSymbols.preview;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <NotDeveloped />
    </SingleComponentStacked>
  );
};

const ContentWidgetsFamily = () => (
  <FamilyStructure title={groupSymbol} showPreview={false}>
    <ImageWidgetExample />
    <EmptyStateExample />
    <StatsWidgetExamples />
    <CarouselExample />
    <AccordionExample />
    <CardGalleryItemExample />
    <PreviewExample />
  </FamilyStructure>
);

export default ContentWidgetsFamily;
