import React, { useState } from 'react';

export function TodoForm ({ saveTodo }) {
  const [value, setValue] = useState('');
  const onChange = event => {
    setValue(event.target.value)
  }
  const reset = () => setValue('')

  return (
    <form className="form"
      onSubmit={event => {
      event.preventDefault()
      saveTodo(value)
      reset()
    }}>
      <input
        type="text"
        className="form-input"
        placeholder="Введите название заметки"
        value={value}
        onChange={onChange}
        />
    </form>
  );
};
