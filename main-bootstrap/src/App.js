import React from 'react';
import Login from './components/Login'
import Home from './pages/Home'
// import {Switch, Route} from "react-router-dom"
import hash from './auth/hash';
// not using react router rn


function App() {
  if(!hash.access_token) return <Login />
  return (
    <div>
      {/* <Switch> */}
          {/* <Route exact path="/"> */}
              <Home />
          {/* </Route> */}
      {/* </Switch> */}
    </div>
  );
}



export default App;
