import React from 'react';
import Home from './Home'
import GlobalContextProvider from './hooks/GlobalContext'

function App() {
  return (
    <GlobalContextProvider>
      <Home />
    </GlobalContextProvider>
  );
}



export default App;
