import React, { useState, useEffect} from 'react';
import hash from "../auth/hash"
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../App.css'


const Home = () => {

  hash.error && console.log(hash.error)
  // console.log(hash.access_token)
  const [token] = useState(hash.access_token)
  const TokenContext = React.createContext(hash.access_token)
  const [userData, setUserData] = useState(null)
  


  useEffect(() => {
      const spotifyConnect = async () => {
        if(!token) return
        let response = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Authorization': `Bearer ${token}`
        }})
        setUserData(await response.json())
      }

    spotifyConnect()
  }, [token])

  useEffect(() => {
    console.log(userData)
  }, [userData])


    return userData ?
      <TokenContext.Provider value={hash.access_token}>
      <Header />
      <Sidebar />
      </TokenContext.Provider>
      :
      <div className="">
        {/* loading */}
      </div>
    
  }



export default Home