import React, { useState} from 'react';
import './todos.css';
import {Notes} from '../../components/Todos/Notes';
import {TodoForm} from '../../components/Todos/TodoForm';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = todoText => {
    setTodos([...todos, todoText])
  }
  const deleteTodo = todoIndex => {
    const newTodos = todos.filter((_, index) => index !== todoIndex)
      setTodos(newTodos)
  }

  return (   
    <React.Fragment>
      <div className="todos">
        <TodoForm
          saveTodo={todoText => {
            const trimmedText = todoText.trim();
            if (trimmedText.length > 0) {
              addTodo(trimmedText);
            }
          }}
        />
        <Notes todos={todos} deleteTodo={deleteTodo}/>
      </div>
    </React.Fragment>
    )
}
