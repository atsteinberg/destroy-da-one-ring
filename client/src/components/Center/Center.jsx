import React from 'react';
import PropTypes from 'prop-types';
import styles from './Center.module.css';

const Center = ({ children }) => {
  return <div className={styles.Center}>{children}</div>;
};

Center.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Center;
