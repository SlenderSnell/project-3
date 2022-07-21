import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import data from './mock-data.json';
import trash from './trash-can-icon.png';

function App() {
  const [tabSelected, setTabSelected] = useState(0);
  const [taskDescs, setTaskDescs] = useState(data);
  const [addTaskData, setAddTaskData] = useState({task: ''});

  const handleAddTaskData = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newTaskData = { ...addTaskData};
    newTaskData[fieldName] = fieldValue;

    setAddTaskData(newTaskData);
  }

  const handleAddTaskSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: nanoid(),
      task: addTaskData.task,
    };

    const newTasks = [...taskDescs, newTask];
    setTaskDescs(newTasks);
  }

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
            <form onSubmit={handleAddTaskSubmit}>
              <input
                type="text"
                name="task"
                required="required"
                placeholder='What do you need to do?'
                onChange={handleAddTaskData}
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
                    <button className='delete'><img src={trash} alt="DEL"/></button>
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
