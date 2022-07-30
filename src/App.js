import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import data from './mock-data.json';
import trash from './trash-can-icon.png';

function App() {
  const [tabSelected, setTabSelected] = useState(0);
  const [taskDescs, setTaskDescs] = useState(data);
  const [addTaskData, setAddTaskData] = useState({task: ''});
  const [addContactInfo, setAddContactInfo] = useState({
    fullName: '',
    email: '',
    comments: ''
  })

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

  const handleDeleteClick = (taskId) => {
    const newTaskDescs = [...taskDescs];
    const index = taskDescs.findIndex((taskDesc)=> taskDesc.id === taskId);

    newTaskDescs.splice(index, 1);
    setTaskDescs(newTaskDescs);
  } 

  const handleAddContactInfo = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newContactInfo = {...addContactInfo};
    newContactInfo[fieldName] = fieldValue;
    setAddContactInfo(newContactInfo);
  }

  const handleCheckboxClick = (event) => {
    event.preventDefault();

    const checkbox = event.target;

    if (checkbox.checked) {
      checkbox.parentElement.classList.remove('unchecked');
      checkbox.parentElement.classList.add('checked');
    } else {
      checkbox.parentElement.classList.remove('checked');
      checkbox.parentElement.classList.add('unchecked');
    }
  }

  const showAllTasks = (event) => {
    event.preventDefault();
    
    const unchLength = document.getElementsByClassName('unchecked').length;
    for(let i=0;i<unchLength;i++){
      document.getElementsByClassName('unchecked')[i].style.display='flex';
    }
    
    const chLength = document.getElementsByClassName('checked').length;
    for(let i=0;i<chLength;i++){
      document.getElementsByClassName('checked')[i].style.display='flex'; 
    }
  }
  const showUncompleted = (event) => {
    event.preventDefault();

    const unchLength = document.getElementsByClassName('unchecked').length;
    for(let i=0;i<unchLength;i++){
      document.getElementsByClassName('unchecked')[i].style.display='flex';
    }
    
    const chLength = document.getElementsByClassName('checked').length;
    for(let i=0;i<chLength;i++){
      document.getElementsByClassName('checked')[i].style.display='none'; 
    }
  }
  const showCompleted = (event) => {
    event.preventDefault();
    
    const unchLength = document.getElementsByClassName('unchecked').length;
    for(let i=0;i<unchLength;i++){
      document.getElementsByClassName('unchecked')[i].style.display='none';
    }
    
    const chLength = document.getElementsByClassName('checked').length;
    for(let i=0;i<chLength;i++){
      document.getElementsByClassName('checked')[i].style.display='flex'; 
    }
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
                  <tr className='unchecked'>
                    <input type="checkbox" onChange={handleCheckboxClick}/>
                    <p>{taskDesc.task}</p>
                    <button className='delete' onClick={()=> handleDeleteClick(taskDesc.id)}>
                      <img src={trash} alt="DEL"/>
                    </button>
                  </tr>
                )}
              </tbody>
            </table>
            <div className='taskSelection'>
              <button onClick={showAllTasks}>All Tasks</button>
              <button onClick={showUncompleted}>Uncompleted</button>
              <button onClick={showCompleted}>Completed</button>
            </div>
          </div>
        </div>
      ) : (
        <div id="contactBox">
          <h2>Contact Us</h2>
          <form>
            <input
              type="text"
              name="fullName"
              required="required"
              placeholder='Please enter your full name'
              onChange={handleAddContactInfo}
            />
            <br/>
            <br/>
            <input
              type="email"
              name="email"
              required="required"
              placeholder='Please enter an email'
              onChange={handleAddContactInfo}
            />
            <br/>
            <br/>
            <textarea
              name="comments"
              required="required"
              placeholder='Enter comments here'
              onChange={handleAddContactInfo}
            />
            <br/>
            <br/>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
    </>
  );
}

export default App;
