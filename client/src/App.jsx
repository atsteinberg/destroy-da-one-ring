import React from 'react';

import styles from './App.module.css';

import Header from './components/Header/Header';
import Center from './components/Center/Center';
import InputForm from './components/InputForm/InputForm';

function App() {
  return (
    <div className={styles.App}>
      <header>
        <Header title="Destroy Da One Ring" />
      </header>
      <section>
        {/* <InputForm />
        <ResultDisplay /> */}
        <Center>
          <InputForm />
        </Center>
      </section>
    </div>
  );
}

export default App;
