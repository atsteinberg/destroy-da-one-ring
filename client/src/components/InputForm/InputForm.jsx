import React, { useState } from 'react';
import PropTypes from 'prop-types';
import postSolution from '../../apiService';
import styles from './InputForm.module.css';

const POSSIBLE_INPUTS = ['n', 'e', 's', 'w'];

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

const InputForm = ({ setResult }) => {
  const [formatedInput, setFormatedInput] = useState([]);
  const [input, setInput] = useState('');

  const onInputChanged = (e) => {
    setInput(e.target.value);
    setFormatedInput(formatInput(e.target.value));
  };

  const onFormSubmitted = async (e) => {
    e.preventDefault();
    if (formatedInput.length === 0) {
      // TODO: replace by custom alert
      window.alert(
        `Your input is invalid:\nplease input a comma-separated list of directions (n,e,s,w)`,
      );
    } else {
      const result = await postSolution(formatedInput);
      console.log('result', result);
      if (result) {
        setResult(result.join(' '));
      }
    }
  };

  return (
    <form className={styles.InputForm} onSubmit={(e) => onFormSubmitted(e)}>
      <input
        className={styles.TextInput}
        type="text"
        value={input}
        onChange={onInputChanged}
        placeholder="n,e,s,w,..."
        spellCheck={false}
      />
      <button type="submit" className={styles.Button}>
        go
      </button>
    </form>
  );
};

InputForm.propTypes = {
  setResult: PropTypes.func.isRequired,
};

export default InputForm;
