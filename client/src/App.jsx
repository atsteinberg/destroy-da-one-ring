import React from 'react';

import styles from './App.module.css';

import Header from './components/Header/Header';

function App() {
  return (
    <body className={styles.App}>
      <header>
        <Header title="Destroy Da One Ring" />
      </header>
      <section>{/* <InputForm />
        <ResultDisplay /> */}</section>
    </body>
  );
}

export default App;
