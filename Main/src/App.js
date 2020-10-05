import React from 'react';
import Login from './components/Login'
import Home from './pages/Home'
import {Switch, Route} from "react-router-dom"
// not using react router rn


function App() {
  return (
    <div>
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
      </Switch>
    </div>
  );
}



export default App;
