import React, { useState, useEffect} from 'react';
import hash from "../auth/hash"
import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';
import Login from '../components/Login';
import '../App.css'
export const TokenContext = React.createContext()


const Home = () => {

  hash.error && console.log(hash.error)
  const [token, setToken] = useState(null)
  const [userData, setUserData] = useState(null)

  // checks the url for the token, and sets the token if it's there, otherwise checks local storage and sets that
  useEffect(()=> {
    if(hash.access_token) {
      setToken(hash.access_token)
      localStorage.clear()
      localStorage.setItem('token', hash.access_token)
      console.log(hash.access_token)
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
        if(response.ok) setUserData(await response.json())
      }
      spotifyConnect(localStorage.getItem('token'))
  }, [/*token*/])

  // useEffect(() => {
  //   console.log(userData)
  // }, [userData])

  

    return userData ?
      <TokenContext.Provider value={token}>
      <Header userData={userData}/>
      <ul className='text-silver nunito-font'>
        <li>Playlists</li>
        <li>Albums</li>
        <li>Artists</li>
      </ul>
      {/* <Sidebar /> */}
      </TokenContext.Provider>
      :
      <Login />
    
  }



export default Home