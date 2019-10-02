import * as React from 'react';
import PropTypes from 'prop-types';
import { ToggleSwitch as CoreToggleSwitch } from 'wix-ui-core/dist/src/components/toggle-switch';
import style from './ToggleSwitch.st.css';
import {
  SKINS,
  SIZES,
  checkedIconMap,
  uncheckedIconMap,
} from './ToggleSwitch.constants';
import { withStylable } from 'wix-ui-core/dist/src/utils/withStylable';

const defaultProps = {
  skin: SKINS.standard,
  size: SIZES.large,
};

const StyledToggleSwitch = withStylable(
  CoreToggleSwitch,
  style,
  ({ size, skin }) => ({ size, skin }),
  defaultProps,
);

class ToggleSwitch extends React.PureComponent {
  render() {
    const { styles, dataHook, ...desiredProps } = this.props;

    return (
      <div dataHook={dataHook}>
        <StyledToggleSwitch
          {...desiredProps}
          checkedIcon={checkedIconMap[this.props.size]}
          uncheckedIcon={uncheckedIconMap[this.props.size]}
        />
      </div>
    );
  }
}

ToggleSwitch.displayName = 'ToggleSwitch';
ToggleSwitch.defaultProps = defaultProps;
ToggleSwitch.propTypes = {
  skin: PropTypes.oneOf(Object.values(SKINS)),
  size: PropTypes.oneOf(Object.values(SIZES)),
  checked: PropTypes.bool,
  checkedIcon: PropTypes.node,
  uncheckedIcon: PropTypes.node,
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
  'aria-label': PropTypes.string,
  // why is styles taken from props in BO code and unused?
};

export default ToggleSwitch;
