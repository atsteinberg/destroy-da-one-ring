import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

import Center from '../Center/Center'

const Header = ({ title }) => {
  return (
    <div className={styles.Header}>
      <Center>
        <h1>{title}</h1>
      </Center>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
