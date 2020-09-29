import React from 'react';
import './modal.css';
import {useModal} from './card';
import ClearIcon from '@material-ui/icons/Clear';

export function Modal({users})  {
  const modalContext = useModal();
  
    return(
        <React.Fragment>
          {modalContext.state && (
            <div className="modal" key={users.id}>
              <div className="modal-body">
                <ClearIcon style={{cursor: "pointer", marginLeft: 490, marginTop: -20, position: "fixed"}} onClick={modalContext.hide}/>
                <p className="modal-text"><strong>First Name: </strong> {users.first_name}</p>
                <p className="modal-text"><strong>Last Name: </strong> {users.last_name}</p>
                <p className="modal-text"><strong>Email: </strong> {users.email}</p>
              </div>
            </div>
          )}
        </React.Fragment>
    )
}
