import React from 'react';
import Login from './pages/Login'
import Home from './pages/Home'
import {Switch, Route} from "react-router-dom"



function App() {
  return (
    <div>
      <Switch>
          <Route exact path="/">
              <Login />
          </Route>
          <Route path="/home">
              <Home/>
          </Route>
      </Switch>
    </div>
  );
}



export default App;
