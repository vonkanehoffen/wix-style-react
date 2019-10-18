import * as React from 'react';
import {WixComponentProps} from "../BaseComponents/WixComponent";

export interface HeadingProps extends WixComponentProps {
  children?: React.ReactNode,
  light?: boolean,
  appearance?: HeadingAppearance,
}

export type HeadingAppearance = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';


declare const Heading: React.FunctionComponent<HeadingProps>;
export default Heading;
