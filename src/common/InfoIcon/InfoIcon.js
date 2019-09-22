import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import InfoCircle from 'wix-ui-icons-common/InfoCircle';
import Tooltip from '../../Tooltip';

import styles from './InfoIcon.st.css';

const InfoIcon = ({ dataHook, tooltipProps, className, iconSize }) => (
  <div className={cx(styles.color, className)}>
    <Tooltip
      flip={false}
      enterDelay={0}
      appendTo="window"
      {...tooltipProps}
      upgrade
      dataHook={dataHook}
    >
      <InfoCircle size={iconSize} />
    </Tooltip>
  </div>
);

InfoIcon.displayName = 'InfoIcon';

InfoIcon.propTypes = {
  tooltipProps: PropTypes.shape(Tooltip.propTypes),
  dataHook: PropTypes.string,
  className: PropTypes.string,
  iconSize: PropTypes.string,
};

InfoIcon.defaultProps = {
  iconSize: '24px',
};

export default InfoIcon;
