import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResultDisplay.module.css';

const messages = [
  {
    text: 'Nothing was found.',
    icon: '🤷‍♀️',
  },
  {
    text: 'Ring is destroyd.',
    icon: '🎊',
  },
  {
    text: 'Orc found, Frodo dead.',
    icon: '☠️',
  },
  {
    text: 'Frodo wandered off the map.',
    icon: '😵',
  },
];

const ResultDisplay = ({ result }) => {
  if (result !== null) {
    return (
      <div className={styles.ResultDisplay}>
        <span className={styles.Icon}>{messages[result].icon}</span>
        <span className={styles.Text}>{messages[result].text}</span>
      </div>
    );
  }
  return <></>;
};

ResultDisplay.propTypes = {
  result: PropTypes.number,
};

ResultDisplay.defaultProps = {
  result: null,
};

export default ResultDisplay;
