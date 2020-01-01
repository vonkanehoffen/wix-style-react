import React from 'react';
import IconButton from '../../IconButton';
import ChevronLeft from 'wix-ui-icons-common/ChevronLeft';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';
import { arrowsDirection } from '../constants';
import styles from '../ModalPreviewLayout.st.css';
import classNames from 'classnames';

const NavigationButton = ({ direction, ...props }) => {
  const isRightArrow = direction === arrowsDirection.rightArrow;

  return (
    <div className={classNames(styles.navigationButton, styles[direction])}>
      <IconButton as="button" skin="transparent" {...props}>
        {isRightArrow ? <ChevronRight /> : <ChevronLeft />}
      </IconButton>
    </div>
  );
};

export default NavigationButton;
