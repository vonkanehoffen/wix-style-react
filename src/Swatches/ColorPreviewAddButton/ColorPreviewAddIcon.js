import React from 'react';
import { string, oneOf } from 'prop-types';
import IconAddSmall from '../../new-icons/AddSmall';
import IconAdd from '../../new-icons/Add';

const ColorPreviewAddIconSize = oneOf(['small', 'normal']);

const ColorPreviewAddIcon = props => {
  const { iconSize, color } = props;

  switch (iconSize) {
    case 'normal':
      return <IconAdd style={{ color }} />;

    case 'small':
    default:
      return <IconAddSmall style={{ color }} />;
  }
};

ColorPreviewAddIcon.propTypes = {
  color: string,
  iconSize: ColorPreviewAddIconSize,
};

ColorPreviewAddIcon.defaultProps = {
  iconSize: 'small',
};

export { ColorPreviewAddIconSize };
export default ColorPreviewAddIcon;
