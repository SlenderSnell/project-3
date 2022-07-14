import { useState } from 'react';
import './App.css';
import data from './mock-data.json';

function App() {
  const [tabSelected, setTabSelected] = useState(0);
  const [taskDescs, setTaskDescs] = useState(data);
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
          <div className='addTask'>
            <form>
              <input
                type="text"
                name="task"
                required="required"
                placeholder='What do you need to do?'
              />
              <button type="submit">Add</button>
            </form>
          </div>
          <div className='taskList'>
            <table>
              <tbody>
                {taskDescs.map((taskDesc)=>                 
                  <tr>
                    <input type="checkbox"/>
                    <p>{taskDesc.task}</p>
                    <button className='delete'/>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
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
