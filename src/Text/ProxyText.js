import React from 'react';
import {
  string,
  number,
  oneOf,
  element,
  func,
  bool,
  oneOfType,
} from 'prop-types';
import OriginalText from './Text';
import { withEllipsedTooltip } from 'wix-ui-core/dist/src/hocs/EllipsedTooltip';
import tooltip from './Ellipsis.st.css';
import { ZIndex } from '../ZIndex';

const Text = ({
  ellipsis,
  flip,
  fixed,
  placement,
  timeout,
  appendTo,
  maxWidth,
  zIndex,
  hideDelay,
  showDelay,
  ...props
}) => {
  const EllipsedText = withEllipsedTooltip({
    showTooltip: true,
    tooltipProps: {
      className: tooltip.root,
      appendTo,
      flip,
      fixed,
      placement,
      timeout,
      maxWidth,
      zIndex,
      hideDelay,
      showDelay,
    },
  })(OriginalText);

  return ellipsis ? <EllipsedText {...props} /> : <OriginalText {...props} />;
};

Text.propTypes = {
  ...OriginalText.propTypes,
  /** should the text get ellipsed with tooltip, or should it get broken into lines when it reaches the end of its container */
  ellipsis: bool,
  /** `ellipsis` prop. Tooltip content calculation relation to a dom element. Can be either:
   *  `'window', 'scrollParent', 'viewport', 'parent'`, `element` or
   * `function` based predicate i.e. (elm) =>
   *  elm.getAttribute('data-hook') === 'value'
   */
  appendTo: oneOfType([
    oneOf(['window', 'scrollParent', 'viewport', 'parent']),
    element,
    func,
  ]),
  /** `ellipsis` prop. Whether to enable the flip behaviour. This behaviour is used to flip the Tooltips placement when it starts to overlap the target element. */
  flip: bool,
  /** `ellipsis` prop. Whether to enable the fixed behaviour. This behaviour is used to keep the Tooltip at it's original placement even when it's being positioned outside the boundary. */
  fixed: bool,
  /** `ellipsis` prop. Tooltip content placement in relation to target element */
  placement: string,
  /** `ellipsis` prop. Tooltip timeout value. */
  timeout: number,
  /** `ellipsis` prop. Tooltip content max width value. */
  maxWidth: number,
  /** `ellipsis` prop. Tooltip content zIndex. */
  zIndex: number,
  /** `ellipsis` prop. Tooltip hide delay. */
  hideDelay: number,
  /** `ellipsis` prop. Tooltip show delay. */
  showDelay: number,
};

Text.defaultProps = {
  appendTo: 'window',
  maxWidth: 204,
  zIndex: ZIndex('Tooltip'),
};

Text.displayName = 'Text';

export default Text;
