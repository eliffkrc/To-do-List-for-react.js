import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('todos');
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleEdit = (index, newName) => {
    const newTodos = [...todos];
    newTodos[index] = newName;
    setTodos(newTodos);
  };

  const handleAddition = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="app">
      <h1>-Yapılacaklar Listesi-</h1>
      <AddTodoForm handleAddition={handleAddition} />
      <TodoList todos={todos} handleEdit={handleEdit} setTodos={setTodos} />
      <div className="footer">
      <p>copyright © ELİF KARACA</p>
    </div>
    </div>
  );
}

export default App;
