import React, {useState, useEffect} from 'react';
import './navbar.css';
import Button from '@material-ui/core/Button';
import NumberApi from '../../api/numberApi';

export const Navbar = () => {
  const [info, setInfo] = useState(false)
  const toggler = () => {
    setInfo(prev => !prev) 
  }
  
  const [numbers, setNumbers] = useState('')
  useEffect(() => {
    NumberApi().then(function(res) {
        setNumbers(res.data);
      }).catch(function(error) {
        console.log(error);
      })
  }, []);

  return (
    <div style={{display: "flex", justifyContent: "flex-end"}}>
      <div className="navbar"> 
      {info && (
        <div className="navbar-info">
          <p className="navbar-info-number"><strong>{numbers.number}&nbsp;-</strong></p>
          <p className="navbar-info-text">{numbers.text}</p>
        </div>
        )}
      </div>
      <Button variant="contained" onClick={toggler} style={{position: "fixed", top: 15, right: 15, whiteSpace: "nowrap"}}>Узнать нечто невероятное!</Button>
    </div>
  )
}
