import './App.css';
import NavItem from './components/NavItem.jsx';

function App() {
  return (
    <>
    <div className="navbar">
      <ul>
        <NavItem navItemName="To-Do" navItemId="toDoBtn"/>
        <NavItem navItemName="Contact" navItemId="contactBtn"/>
      </ul>
    </div>
    <div className="tab-content">
      <div id="toDoBox" className="active" data-tab-content>

      </div>
      <div id="contactBox" data-tab-content>

      </div>
    </div>
    </>
  );
}

export default App;
