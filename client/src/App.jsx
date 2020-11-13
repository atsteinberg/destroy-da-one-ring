import React from 'react';

import styles from './App.module.css';

import Header from './components/Header/Header';

function App() {
  return (
    <div className={styles.App}>
      <header>
        <Header title="Destroy Da One Ring" />
      </header>
      <body>{/* <InputForm />
        <ResultDisplay /> */}</body>
    </div>
  );
}

export default App;
