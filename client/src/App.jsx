import React, { useState } from 'react';

import styles from './App.module.css';

import Header from './components/Header/Header';
import Center from './components/Center/Center';
import InputForm from './components/InputForm/InputForm';
import ResultDisplay from './components/ResultDisplay/ResultDisplay';

function App() {
  const [result, setResult] = useState('');

  return (
    <div className={styles.App}>
      <header>
        <Header title="Destroy Da One Ring" />
      </header>
      <section>
        {/* <InputForm />
        <ResultDisplay /> */}
        <Center>
          <InputForm setResult={setResult} />
          <ResultDisplay result={result} />
        </Center>
      </section>
    </div>
  );
}

export default App;
