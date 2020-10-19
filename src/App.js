import React from 'react';
import Home from './Home'
import {GlobalContextProvider} from './hooks/GlobalContext'

function App() {

  window.addEventListener("load",function() {
    // Set a timeout...
    setTimeout(function(){
      // Hide the address bar!
      window.scrollTo(0, 1);
    }, 0);
  });

  return (
    <GlobalContextProvider>
      <Home />
    </GlobalContextProvider>
  );
}



export default App;
