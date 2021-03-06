import React, { useState } from 'react';

import styles from './App.module.css';

import Header from './components/Header/Header';
import InputForm from './components/InputForm/InputForm';
import Map from './components/Map/Map';
import EnabledContext from './contexts/EnabledContext';

function App() {
  const [result, setResult] = useState(null);
  const [enabled, setEnabled] = useState(true);
  const value = { enabled, setEnabled };

  return (
    <div className={styles.App}>
      <header>
        <Header title="Destroy Da One Ring" />
      </header>
      <main>
        <EnabledContext.Provider value={value}>
          <div className={styles.MainContainer}>
            <div className={styles.InputFormContainer}>
              <InputForm setResult={setResult} />
            </div>
            <div className={styles.ResultContainer}>
              <Map travel={result} />
            </div>
          </div>
        </EnabledContext.Provider>
      </main>
    </div>
  );
}

export default App;
