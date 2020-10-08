import React, {useState} from 'react';
import {} from './card.css';
import {Modal} from '../Modal/Modal';

export function Card({user}) {
  const [modalVisible, setModalVisible] = useState(false)
  const toggler = () => {
    setModalVisible(prev => !prev) 
  }

  return (    
    <React.Fragment>
      <div className="card" onClick={toggler}>
        <p className="card-text"><strong>First Name: </strong> {user.first_name}</p>
        <p className="card-text"><strong>Last Name: </strong> {user.last_name}</p>
        <img className="card-img" src={user.avatar} alt="avatar" />
      </div>
      <Modal user={user} modalVisible={modalVisible} toggler={toggler} />
    </React.Fragment>   
  )
}
