import React from 'react';
import './App.css';
import CopyClicker from './components/CopyClicker.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Copy Clicker
      </header>

      <CopyClicker
        initialCopies={0}
        initialCpC={1}
      />
    </div>
  );
}

export default App;
