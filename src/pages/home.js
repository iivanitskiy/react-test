import React, {useState, useEffect} from 'react'
import {Card} from '../components/card';
import {UsersApi} from '../api/usersApi';
import './home.css'

export const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    UsersApi().then(function(res) {
        setUsers(res);
      }).catch(function(error) {
        console.log(error);
      })
  }, [setUsers]);

  return (
    
    <React.Fragment>
      <div className="home">
        {users.map(user => (
          <Card users={user} />
        ))
      }
      </div>
    </React.Fragment>
  )
}
