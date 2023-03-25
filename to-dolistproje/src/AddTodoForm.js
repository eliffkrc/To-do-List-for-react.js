import React, { useState } from 'react';
import './AddTodoForm.css';
const AddTodoForm = (props) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    props.handleAddition(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Yapılacak bir iş ekleyin..."
      />
      <button className="button is-primary">Ekle</button>
    </form>
  );
};

export default AddTodoForm;
