import React from 'react';
import PropTypes from 'prop-types';
import { FontUpgradeContext } from './context';

const styles = {
  '--wsr-font-family': 'var(--wix-font-stack)',
  '--wsr-font-weight-thin': 'var(--wix-font-weight-thin)',
  '--wsr-font-weight-normal': 'var(--wix-font-weight-normal)',
  '--wsr-font-weight-bold': 'var(--wix-font-weight-bold)',
};

const FontUpgrade = ({ dataHook, active = true, children }) => {
  if (active) {
    Object.entries(styles).forEach(([key, value]) =>
      document.body.style.setProperty(key, value),
    );
  } else {
    Object.keys(styles).map(key => document.body.style.removeProperty(key));
  }
  return (
    <FontUpgradeContext.Provider value={{ active }}>
      <span data-hook={dataHook} children={children} />
    </FontUpgradeContext.Provider>
  );
};

FontUpgrade.Proptypes = {
  /** Applied as data-hook HTML attribute that can be used to create driver in testing */
  dataHook: PropTypes.string,

  /** Sets the Madefor font upgrade active when true (which is by default) */
  active: PropTypes.bool,
};

export default FontUpgrade;
