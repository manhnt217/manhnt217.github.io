import React from 'react';
import * as st from './App.css';

import logo from './logo.svg';

function App() {
  return (
    <div className={st.app}>
      <header className={st.appHeader}>
        <img src={logo} className={st.appLogo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
