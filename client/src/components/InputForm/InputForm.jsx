import React, { useState, useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import postSolution from '../../apiService';
import styles from './InputForm.module.css';
import CustomAlert from '../CustomAlert/CustomAlert';
import { TravelPath } from '../../classes';
import EnabledContext from '../../contexts/EnabledContext';

const POSSIBLE_INPUTS = ['n', 'e', 's', 'w'];

const isValidResult = (result) => {
  return result instanceof TravelPath;
};

const formatInput = (str) => {
  if (!str) return [];
  const inputs = str
    .split(',')
    .map((i) => i.trim().toLowerCase())
    .filter(Boolean);
  return inputs.length ===
    inputs.filter((i) => POSSIBLE_INPUTS.includes(i)).length
    ? inputs
    : [];
};

let previousAttempts = [];

const InputForm = ({ setResult }) => {
  const { enabled } = useContext(EnabledContext);
  const [formatedInput, setFormatedInput] = useState([]);
  const [input, setInput] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const inputField = useRef();
  useEffect(() => {
    if (inputField.current) {
      inputField.current.focus();
    }
  });

  const onInputChanged = (e) => {
    setInput(e.target.value);
    setFormatedInput(formatInput(e.target.value));
  };

  const onFormSubmitted = async (e) => {
    e.preventDefault();
    if (formatedInput.length === 0) {
      setShowAlert(true);
    } else {
      const result = await postSolution(formatedInput);
      if (isValidResult(result)) {
        setResult(result);
        // TODO display previous attempts
        previousAttempts = [
          ...previousAttempts,
          { attempt: formatedInput, result },
        ];
      }
    }
    setInput('');
    setFormatedInput('');
  };

  return (
    <>
      <form className={styles.InputForm} onSubmit={(e) => onFormSubmitted(e)}>
        <input
          className={styles.TextInput}
          type="text"
          value={input}
          onChange={onInputChanged}
          placeholder="n,e,s,w,..."
          spellCheck={false}
          ref={inputField}
        />
        <button type="submit" className={styles.Button} disabled={!enabled}>
          go!
        </button>
      </form>
      {showAlert ? (
        <CustomAlert
          message={`Your input is invalid:\nplease input a comma-separated list of directions (n,e,s,w)`}
          extraButtonText=", won't happen again"
          setShowAlert={(boolean) => setShowAlert(boolean)}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default InputForm;

InputForm.propTypes = {
  setResult: PropTypes.func.isRequired,
};
