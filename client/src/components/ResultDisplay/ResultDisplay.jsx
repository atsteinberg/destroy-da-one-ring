import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResultDisplay.module.css';

const ResultDisplay = ({ result }) => {
  if (result) {
    return (
      <div className={styles.ResultDisplay}>
        <span>{result}</span>
      </div>
    );
  }
  return <></>;
};

ResultDisplay.propTypes = {
  result: PropTypes.string.isRequired,
};

export default ResultDisplay;
