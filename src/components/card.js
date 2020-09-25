import React, { useContext, useReducer } from 'react';
import {} from '../components/card.css';
import {Modal} from '../components/modal';

const ModalContext = React.createContext()
export const useModal = () => {
  return useContext(ModalContext)
}
export function Card({users}) {
  const SHOW_MODAL = 'show'
  const HIDE_MODAL = 'hide'

  const reducer = (state, action) => {
    switch (action.type) {
      case SHOW_MODAL: return {...state}
      case HIDE_MODAL: return null
      default: return state
    }
  }
  const [state, dispatch] = useReducer(reducer, false)
  const show = () => dispatch({ type: SHOW_MODAL})
  const hide = () => dispatch({ type: HIDE_MODAL})

  return (
    <ModalContext.Provider value={{state, hide}}>
      <div className="card" key={users.id} onClick={show}>
        <p className="card-text"><strong>First Name: </strong> {users.first_name}</p>
        <p className="card-text"><strong>Last Name: </strong> {users.last_name}</p>
        <img className="card-img" src={users.avatar} alt="avatar" />
      </div>
      <Modal users={users} />
    </ModalContext.Provider>
  )
}
