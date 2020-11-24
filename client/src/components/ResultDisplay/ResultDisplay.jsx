import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
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

const ResultDisplay = ({ result, handleDismiss }) => {
  const resultDisplay = useRef();
  useEffect(() => {
    if (resultDisplay.current) {
      resultDisplay.current.focus();
    }
  });
  if (result !== null) {
    return (
      <div
        className={styles.ResultDisplay}
        onClick={handleDismiss}
        onKeyDown={handleDismiss}
        role="button"
        tabIndex={0}
        ref={resultDisplay}
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
  handleDismiss: PropTypes.func.isRequired,
};

export default ResultDisplay;
