import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({ title }) => {
  return (
    <div className={styles.Header}>
      <h1>{title}</h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
