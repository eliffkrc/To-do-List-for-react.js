import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
function TodoList(props) {
  return (
    <div className="todo-list">
      {props.todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          handleEdit={props.handleEdit}
          handleDelete={() => props.setTodos((todos) => todos.filter((item, i) => i !== index))}
        />
      ))}
    </div>
  );
}

export default TodoList;
