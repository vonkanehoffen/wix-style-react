import * as React from 'react';

export interface AffixProps {
  children?: React.ReactNode;
  value?: string;
}

declare const Affix: React.FunctionComponent<AffixProps>;
export default Affix;
