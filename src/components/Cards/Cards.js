import React, {useState, useEffect} from 'react';
import {} from './card.css';
import {Card} from './Card';
import {UsersApi} from '../../api/usersApi';

export function Cards() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    UsersApi().then(function(res) {
        setUsers(res);
      }).catch(function(error) {
        console.log(error);
      })
  }, [setUsers]);

  return (
    users.map(user => (
      <Card user={user} key={user.id}/>
    ))
  )
}
