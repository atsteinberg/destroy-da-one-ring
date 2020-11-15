import PropTypes from 'prop-types';
import React from 'react';
import styles from './ResultDisplay.module.css';

const messages = [
  {
    text: 'Nothing was found.',
    icon: '🤷‍♀️',
  },
  {
    text: 'Ring is destroyed.',
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

const ResultDisplay = ({ result, setShowResult }) => {
  const handleDismiss = () => setShowResult(false);
  if (result !== null) {
    return (
      <div
        className={styles.ResultDisplay}
        onClick={handleDismiss}
        onKeyDown={handleDismiss}
        role="button"
        tabIndex={0}
      >
        <div className={styles.Icon}>{messages[result].icon}</div>
        <div className={styles.Text}>{messages[result].text}</div>
      </div>
    );
  }
  return <></>;
};

ResultDisplay.propTypes = {
  result: PropTypes.number.isRequired,
  setShowResult: PropTypes.func.isRequired,
};

export default ResultDisplay;
