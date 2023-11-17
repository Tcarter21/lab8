

import './App.css';
import { useState, useRef } from "react";

function App() {
    const [task, setTask] = useState([]);
    const input = useRef(null);

    const addItem = (e) => {e.preventDefault();
        const newItem = input.current.value;
            if (newItem !== "") {
                setTask([...task, newItem]);
            }
        input.current.value = "";
    };

    const removeItem = (index) => {
        const updatedTasks = task.filter((_, i) => i !== index);
        setTask(updatedTasks);
    };

        
    
  return (
      <>
          <div className="App container">
              <h1>ToDo List</h1>
              <div class="input-group mb-3">
                  <span class="input-group-text">Enter an Item</span>
                  <input type="text" class="form-control" placeholder="ex. Go to grocery store" ref={input}></input>
              </div>
              <ul>
                  {task.map((task, index) => (
                      <li className="li-item" key={index}>
                          {task}
                          <button type="button" className="btn btn-danger text-align: center"  onClick={() => removeItem(index)}>x</button>
                      </li>
                  ))}
              </ul>
              <button type="button" className="btn btn-outline-dark" onClick={addItem}>Add</button>
          </div>
      </>
  );
}

export default App;
