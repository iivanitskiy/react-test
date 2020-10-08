import React from 'react';
import './notes.css';
import Checkbox from '@material-ui/core/Checkbox';

export function Notes({ todos, deleteTodo }) { 

  return(
    <React.Fragment>
      <ul className="list-group">
        {todos.map((note, index) => (
          <li 
            className="list-group-item" 
            key={index}>
            <div>
              <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
              <strong style={{paddingRight: 20}}>{note}</strong>
              <small>{new Date().toLocaleString()}</small>
            </div>
            <button
            type="button"
            className="btn"
            onClick={() => deleteTodo(index)}
            >
            &times;
            </button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}
