import React, { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import './TodoItem.css';
function TodoItem(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleEdit(props.index, newName);
    setNewName('');
    setEditing(false);
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleCancel = () => {
    setNewName('');
    setEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" value={newName} onChange={handleChange} />
          <button type="submit" className='sakla'>Sakla</button>
          <button onClick={handleCancel} className="bitir">Vazgeç</button>
        </form>
      ) : (
        <div>
          <span>{props.todo}</span>
          <div className="icons">
            <FaEdit onClick={() => setEditing(true)} className="edit-icon" />
            <FaTrash onClick={props.handleDelete} className="delete-icon" />
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
