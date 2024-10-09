import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  // Function to handle adding new tasks
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>ToDo List</h1>
      <input 
        type="text" 
        value={task} 
        onChange={handleInputChange} 
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
