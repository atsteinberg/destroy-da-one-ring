import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResultDisplay.module.css';
import Map from '../Map/Map';

// const messages = [
//   {
//     text: 'Nothing was found.',
//     icon: '🤷‍♀️',
//   },
//   {
//     text: 'Ring is destroyed.',
//     icon: '🎊',
//   },
//   {
//     text: 'Orc found, Frodo dead.',
//     icon: '☠️',
//   },
//   {
//     text: 'Frodo wandered off the map.',
//     icon: '😵',
//   },
// ];

const ResultDisplay = ({ result }) => {
  if (result !== null) {
    return (
      <div className={styles.ResultDisplay}>
        <Map path={result} />
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
