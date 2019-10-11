import * as React from 'react';

export interface BreadcrumbsProps {
  items: BreadcrumbsItem[];
  onClick?: (BreadcrumbsItem) => any;
  activeId?: string | number,
  size?: BreadcrumbsSize;
  theme?: BreadcrumbsTheme;
}

export default class Breadcrumbs extends React.PureComponent<BreadcrumbsProps> {
}

export type BreadcrumbsItem = {
  id: string | number,
  value: React.ReactNode;
  link?: string,
  customElement?: any,
  disabled?: boolean,
};

export type BreadcrumbsSize = 'medium' | 'large';

export type BreadcrumbsTheme = 'onWhiteBackground' | 'onGrayBackground' | 'onDarkBackground';
