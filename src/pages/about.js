import React from 'react'
import './about.css'

export const About = () => {

  return (
    
    <React.Fragment>
      <div className="about">
        <h1>Тестовое React приложение</h1>
        <p>Использованы только функциональные компоненты с использованием реакт-хуков</p>
        <ul className="about-list">
          <li>React</li>
          <li>React-router</li>
          <li>React hooks</li>
          <li>axios</li>
          <li>Material-UI</li>
          <li><a className="about-list" href="https://reqres.in">REQ RES</a></li>
          <li><a className="about-list" href="http://numbersapi.com">NUMBERS API</a></li>
        </ul>
      </div>
    </React.Fragment>
  )
}
