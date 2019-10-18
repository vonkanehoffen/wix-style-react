import * as React from 'react';
import {LabelProps as CoreLabelProps} from "wix-ui-core/label";
import {WixComponentProps} from "wix-ui-core/dist/src/createHOC";
import {Size} from "wix-ui-backoffice/src/components/Label/constants";

export interface LabelProps extends WixComponentProps, CoreLabelProps {
  size?: Size;
}

export default class Label extends React.Component<LabelProps> {
}
