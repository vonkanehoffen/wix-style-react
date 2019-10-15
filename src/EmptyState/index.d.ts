import * as React from 'react';

export interface EmptyStateProps {
  theme?: EmptyStateTheme,
  title?: string | React.ReactNode,
  subtitle?: string | React.ReactNode,
  image?: React.ReactNode,
  classNames?: {
    imageContainer?: string,
  },
  children?: React.ReactNode,
  dataHook?: string,
}

export type EmptyStateTheme = 'page' | 'page-no-border' | 'section';

export default class EmptyState extends React.PureComponent<EmptyStateProps> {
}
