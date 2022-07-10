import { useState } from 'react';
import './App.css';

function App() {
  const [tabSelected, setTabSelected] = useState(0);
  return (
    <>
    <div className="navbar">
      <ul>
        <li><button id="toDoBtn" onClick={() => setTabSelected(0)}>To-Do</button></li>
        <li><button id="contactBtn" onClick={() => setTabSelected(1)}>Contact</button></li>
      </ul>
    </div>
    <div className="tab-content">
      {tabSelected === 0 ? (
        <div id="toDoBox">
          <p>Test 1</p>
        </div>
      ) : (
        <div id="contactBox">
          <p>Test 2</p>
        </div>
      )}
    </div>
    </>
  );
}

export default App;
