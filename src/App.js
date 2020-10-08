import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import {Home} from './pages/home/home';
import {Todos} from './pages/todos/todos';
import {About} from './pages/about/about';
import {Navbar} from './components/Navbar/Navbar';
import TemporaryDrawer from './components/Navbar/PersistentDrawerLef';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <TemporaryDrawer />
      <Switch>
        <Route path="/react-test" exact component={Home} />
        <Route path="/react-test/todos" component={Todos}/>
        <Route path="/react-test/about" component={About}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
