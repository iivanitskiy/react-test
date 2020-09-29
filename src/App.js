import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import {Home} from './pages/home';
import {About} from './pages/about';
import {Navbar} from './components/navbar';
import TemporaryDrawer from './components/PersistentDrawerLef';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <TemporaryDrawer />
        <Switch>
          <Route path="/react-test" exact component={Home} />
          <Route path="/react-test/about" component={About}/>
        </Switch>
      </BrowserRouter>
      </div>

  );
}

export default App;
