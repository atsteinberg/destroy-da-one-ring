import React from 'react';
import PropTypes from 'prop-types';
import styles from './Map.module.css';
import { TravelPathPropType } from '../../classes/TravelPath';
// import Frodo from '../../assets/mediumFrodo.png';

const Map = ({ path, speed }) => {
  console.log(path, speed);
  return path ? (
    <div className={styles.MapContainer}>
      <div className={styles.Map}>
        <div className={styles.FrodoImage} />
        {/* <img alt="Frodo-icon" className={styles.Frodo} src={Frodo} width="30" /> */}
      </div>
    </div>
  ) : (
    <></>
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
