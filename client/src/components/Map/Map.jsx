import React, { useEffect, useRef, useState, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './Map.module.css';
import { TravelPathPropType } from '../../classes/TravelPath';
import ResultDisplay from '../ResultDisplay/ResultDisplay';
import EnabledContext from '../../contexts/EnabledContext';

const calculateRem = (c) => {
  const unit = 3;
  return `${c * unit}rem`;
};

const Map = ({ travel, speed }) => {
  const { setEnabled } = useContext(EnabledContext);
  const [showResult, setShowResult] = useState(false);
  const [newTravel, setNewTravel] = useState(travel);
  useEffect(() => {
    setNewTravel(travel);
  }, [travel]);

  // Frodo animation

  let relativePositions = useMemo(() => [], []);
  if (newTravel) {
    relativePositions = travel.path.map((slice) => {
      return {
        top: calculateRem(slice.coordinate.y),
        left: calculateRem(slice.coordinate.x),
      };
    });
  } else {
    relativePositions = [
      {
        top: calculateRem(5),
        left: calculateRem(0),
      },
    ];
  }

  const frodoAnimation = useMemo(
    () => [
      { opacity: 0, ...relativePositions[0] },
      { opacity: 1, ...relativePositions[0] },
      ...relativePositions,
      { opacity: 1, ...relativePositions[relativePositions.length - 1] },
    ],
    [relativePositions],
  );

  const frodoTiming = useMemo(
    () => ({
      duration: 100 * speed * frodoAnimation.length,
      iterations: 1,
      fill: 'forwards',
      endDelay: 100 * speed,
    }),
    [speed, frodoAnimation],
  );

  const frodo = useRef();
  useEffect(() => {
    if (frodo.current && newTravel) {
      const animation = frodo.current.animate(frodoAnimation, frodoTiming);
      animation.onfinish = () => {
        setNewTravel(null);
        setShowResult(true);
        setEnabled(false);
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
