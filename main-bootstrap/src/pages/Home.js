import React, { useState, useEffect} from 'react';
import hash from "../auth/hash"
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Login from '../components/Login';
import '../App.css'


const Home = () => {

  hash.error && console.log(hash.error)
  const [token, setToken] = useState(null)
  const [userData, setUserData] = useState(null)
  const TokenContext = React.createContext()

  // checks the url for the token, and sets the token if it's there, otherwise checks local storage and sets that
  useEffect(()=> {
    if(hash.access_token) {
      setToken(hash.access_token)
      localStorage.setItem('token', hash.access_token)
    } else {
      setToken(localStorage.getItem('token'))
    }
  }, [])


  useEffect(() => {
    const spotifyConnect = async (key) => {
      if(!key) return
      let response = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Authorization': `Bearer ${key}`
        }})
        setUserData(await response.json())
      }
      
      // spotifyConnect(localStorage.getItem('token'))
    try{spotifyConnect(localStorage.getItem('token'))}
    // if the token is old, then it sets the token to refresh, which will render the Login component again
    catch(error) {
      setToken('refresh')
    }
  }, [token])

  useEffect(() => {
    console.log(userData)
  }, [userData])

  if (token === 'refresh') {
    return <Login />
  }

    return userData ?
      <TokenContext.Provider value={token}>
      <Header />
      <Sidebar />
      </TokenContext.Provider>
      :
      <div>
        {/* loading */}
      </div>
    
  }



export default Home