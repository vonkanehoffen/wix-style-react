import React from 'react';
import { node } from 'prop-types';
import Proportion from '../Proportion';
import styles from './Swatches.st.css';

const SwatchProportion = ({ children }) => (
  <Proportion className={styles.swatchProportion}>{children}</Proportion>
);

SwatchProportion.propTypes = {
  children: node.isRequired,
};

export default SwatchProportion;
