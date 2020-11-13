import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomAlert.module.css';

const CustomAlert = ({ message, extraButtonText, setShowAlert }) => {
  return (
    <div className={styles.CustomAlert}>
      <div className={styles.AlertContainer}>
        <div className={styles.MessageContainer}>{message}</div>
        <div className={styles.ButtonContainer}>
          <button
            type="button"
            className={styles.Button}
            onClick={() => {
              setShowAlert(false);
            }}
          >
            ok<span>{extraButtonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

CustomAlert.propTypes = {
  message: PropTypes.string.isRequired,
  extraButtonText: PropTypes.string,
  setShowAlert: PropTypes.func.isRequired,
};

CustomAlert.defaultProps = {
  extraButtonText: '',
};

export default CustomAlert;
