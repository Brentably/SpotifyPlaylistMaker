import React, { useState, useEffect} from 'react';
import hash from "../auth/hash"
import { authEndpoint, clientId, redirectUri, scopes } from "../auth/config"
import Login from "../components/Login"


const Home = () => {
  hash.error && console.log(hash.error)
  // console.log(hash.access_token)
  const [token] = useState(hash.access_token)
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


    return token ? 
      <div className="bg-black p-5 rounded-lg text-center max-w-xs">
        <h1 className="text-white text-2xl mb-2">Welcome to the Home page</h1>
      </div>
     : <Login />
  }



export default Home