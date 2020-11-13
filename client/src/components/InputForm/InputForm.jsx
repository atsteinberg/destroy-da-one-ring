import React, { useState } from 'react';

const InputForm = () => {
  const [inputIsValid, setInputIsValid] = useState(false);

  const onInputChanged = () => {};
  const onButtonPressed = () => {};

  return (
    <form>
      <input type="text" onChange={onInputChanged} />
      <button type="button" onClick={onButtonPressed} disabled={!inputIsValid}>
        play
      </button>
    </form>
  );
};

export default InputForm;
