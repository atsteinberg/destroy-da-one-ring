import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResultDisplay.module.css';

const ResultDisplay = ({ result }) => {
  return (
    <div className={styles.ResultDisplay}>
      <span>{result}</span>
    </div>
  );
};

ResultDisplay.propTypes = {
  result: PropTypes.string.isRequired,
};

export default ResultDisplay;
