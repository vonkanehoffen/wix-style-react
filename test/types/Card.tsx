import * as React from 'react';
import Card from '../../src/Card';

function CardWithMandatoryProps() {
  return <Card />;
}

function CardWithAllProps() {
  return (
    <Card
      stretchVertically={true}
      hideOverflow={false}
      dataHook="data-hook-string"
      children={
        <>
          <Card.Header
            title="Card with collapsable content"
            subtitle="Card with collapsable content"
            withoutDivider={true}
            suffix={<div />}
          />
          <Card.Subheader
          title="Card with collapsable content"
          suffix={<div />}
          dataHook="neutral"
          skin="neutral"
          />
          <Card.Divider />
          <Card.Content children={<span />} />
        </>
      }
    />
  );
}
