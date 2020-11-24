import React, { useEffect, useRef, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './Map.module.css';
import { TravelPathPropType } from '../../classes/TravelPath';
import ResultDisplay from '../ResultDisplay/ResultDisplay';
import EnabledContext from '../../contexts/EnabledContext';
import calculateAnimation from '../../services/animationsService';

const UNIT = 3;

const Map = ({ travel, speed }) => {
  const { setEnabled } = useContext(EnabledContext);
  const [showResult, setShowResult] = useState(false);
  const [newTravel, setNewTravel] = useState(travel);
  useEffect(() => {
    setNewTravel(travel);
  }, [travel]);

  const [frodoAnimation, frodoTiming] = calculateAnimation(
    newTravel,
    UNIT,
    speed,
  );

  const frodo = useRef();
  useEffect(() => {
    if (frodo.current && newTravel) {
      const animation = frodo.current.animate(frodoAnimation, frodoTiming);
      animation.onfinish = () => {
        setNewTravel(null);
        setShowResult(true);
      };
    }
  });

  const handleDismissResult = () => {
    setShowResult(false);
    setEnabled(true);
    frodo.current.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 1000,
      fill: 'forwards',
    });
  };

  return travel ? (
    <div className={styles.MapContainer}>
      <div className={styles.Map}>
        <div className={styles.FrodoImage} id="Frodo" ref={frodo} />
        {/* <img alt="Frodo-icon" className={styles.Frodo} src={Frodo} width="30" /> */}
      </div>
      {showResult ? (
        <ResultDisplay
          handleDismiss={handleDismissResult}
          result={travel.finalResult}
        />
      ) : (
        <></>
      )}
    </div>
  ) : (
    <></>
  );
};

Map.propTypes = {
  travel: TravelPathPropType,
  speed: PropTypes.number,
};

Map.defaultProps = {
  travel: null,
  speed: 5,
};

export default Map;
