import React from 'react';
import { useStateX } from '@cloudio/statex';
import './App.css';

function App() {
  const [count, setCount] = useStateX(['counter'], 0);
  return (
    <div className="App">
      <header className="App-header">
        <p>This project is running with StateX</p>
        <div className="counter">
          <button
            className="counter-btn"
            onClick={() => setCount((c) => c - 1)}>
            -
          </button>
          <label className="counter-label">{count}</label>
          <button
            className="counter-btn"
            onClick={() => setCount((c) => c + 1)}>
            +
          </button>
        </div>
        <a
          className="App-link"
          href="https://cloudioinc.github.io/statex/"
          target="_blank"
          rel="noopener noreferrer">
          Learn StateX
        </a>
      </header>
    </div>
  );
}

export default App;
