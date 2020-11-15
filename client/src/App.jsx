import React, { useState } from 'react';

import styles from './App.module.css';

import Header from './components/Header/Header';
import InputForm from './components/InputForm/InputForm';
import Map from './components/Map/Map';

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className={styles.App}>
      <header>
        <Header title="Destroy Da One Ring" />
      </header>
      <main>
        <div className={styles.MainContainer}>
          <div className={styles.InputFormContainer}>
            <InputForm setResult={setResult} />
          </div>
          <div className={styles.ResultContainer}>
            <Map path={result} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
