import React, { useEffect, useState } from 'react';
import Create from './Components/Create';
import './App.css';
import axios from 'axios';
import { MdDeleteOutline } from "react-icons/md";
import Nav from './Components/Nav';

const Home = () => {
  const [Todo, setTodo] = useState([]);

  const fetchTodos = () => {
    axios.get('https://mernstack-to-do-app-api.vercel.app/get')
      .then(result => setTodo(result.data))
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete(`https://mernstack-to-do-app-api.vercel.app/delete/${id}`)
      .then(result => fetchTodos())
      .catch(err => console.log(err));
  };
  

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className='home'>
      <Nav/>
      {/* <h2>Todo App</h2> */}
      <Create onAdd={fetchTodos} />
      {
        Todo.length === 0
          ? <div><h3>No Todo Task 😊</h3></div>
          : Todo.map((todo, index) => (
            <div className='todolist' key={index}>
              <div className="left-box">
                <h4>{todo.task}</h4>
              </div>
              <div className="delete-icon">
                <MdDeleteOutline id='delete-icon' onClick={() => handleDelete(todo._id)} />
              </div>
            </div>
          ))
      }
    </div>
  );
};

export default Home;
