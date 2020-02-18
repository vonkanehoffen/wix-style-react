import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import {dropdownLayoutDriverFactory} from "../DropdownLayout/DropdownLayout.driver";
import ReactTestUtils from "react-dom/test-utils";
import {isClassExists} from "wix-ui-test-utils/react-helpers";

export interface BreadcrumbsDriver extends BaseDriver {
  breadcrumbsLength: () => number;
  breadcrumbContentAt: (position:number) => string | null;
  clickBreadcrumbAt: (position:number) => any;
  getActiveItemId: () => number | null;
  isLarge: () => boolean;
  isMedium: () => boolean;
  isOnWhiteBackground: () => boolean;
  isOnGrayBackground: () => boolean;
  isOnDarkBackground: () => boolean;
  getLabelClassList: (position:number) => string;
  isActiveLinkAt: (index:number) => boolean;
}
