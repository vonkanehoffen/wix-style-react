import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';

import allComponents from '../allComponents';
import styles from './styles.scss';

/**
 * A utility function to convert a props object to an array of props strings.
 * Example usage:
 *
 *  const myComponentString = props => `
 *    <div
 *      ${createPropsArray(props).join('\n    ')}
 *    />
 *  `;
 *
 *  myComponentString({ id: 'some-id', style: { padding: 5 }})
 *  // Will return:
 *  //  `<div
 *  //    id="some-id"
 *  //    style={{ padding: 5 }}
 *  //  />`
 */
export const createPropsArray = props =>
  Object.entries(props).map(([key, value]) => {
    if (value === true) {
      return key;
    } else if (typeof value === 'string') {
      return `${key}="${value}"`;
    }

    return `${key}={${JSON.stringify(value)}}`;
  });

export const baseScope = allComponents;

const Component = props => {
  const { scope, title, ...rest } = props;

  // Remove `eslint-disable` comments
  const filteredCode = props.initialCode.replace(
    /^(\s)*\/\*(\s)*eslint-disable(\s)*\*\/(\s)*$/gm,
    '',
  );

  const LiveCodeExample = lazy(() =>
    import('wix-storybook-utils/LiveCodeExample'),
  );
  return (
    <div>
      {title && <div className={styles.title}>{title}</div>}

      <Suspense fallback={<div>Loading</div>}>
        <LiveCodeExample
          scope={{ ...baseScope, ...scope }}
          {...rest}
          initialCode={filteredCode}
        />
      </Suspense>
    </div>
  );
};

Component.propTypes = {
  title: PropTypes.string,
};

export default Component;
