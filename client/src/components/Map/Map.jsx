import React from 'react';
import PropTypes from 'prop-types';
import styles from './Map.module.css';
import { TravelPathPropType } from '../../classes/TravelPath';
import Frodo from '../../assets/mediumFrodo.png';

const Map = ({ path, speed }) => {
  return (
    <div className={styles.Map}>
      <img alt="Frodo-icon" className={styles.Frodo} src={Frodo} width="30" />
      <div>
        Result: {path.finalResult}
        Speed: {speed}
      </div>
    </div>
  );
};

Map.propTypes = {
  path: TravelPathPropType.isRequired,
  speed: PropTypes.number,
};

Map.defaultProps = {
  speed: 10,
};

export default Map;
