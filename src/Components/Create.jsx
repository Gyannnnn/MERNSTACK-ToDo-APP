import React, { useState } from 'react';
import '../Components/Create.css';
import axios from 'axios';

const Create = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() === "") {
      console.log("Task is empty");
      return;
    }

    axios.post('http://localhost:3001/add', { task: task })
      .then(result => {
        console.log(result);
        setTask(""); 
        onAdd();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='create'>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Your to do task"
      />
      <button type="button" onClick={handleAdd}><h4>Submit Task</h4></button>
    </div>
  );
};

export default Create;
