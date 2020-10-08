import React from 'react';
import './modal.css';
import ClearIcon from '@material-ui/icons/Clear';

export function Modal({user, modalVisible, toggler}) { 

  return(
    <React.Fragment>
      {modalVisible && (
        <div className="modal">
          <div className="modal-body">
            <ClearIcon style={{cursor: "pointer", marginLeft: 490, marginTop: -20}} onClick={toggler}/>
            <p className="modal-text"><strong>First Name: </strong> {user.first_name}</p>
            <p className="modal-text"><strong>Last Name: </strong> {user.last_name}</p>
            <p className="modal-text"><strong>Email: </strong> {user.email}</p>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}
