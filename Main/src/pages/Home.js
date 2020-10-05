import React, { useState, useEffect} from 'react';
import hash from "../auth/hash"
import { useHistory } from 'react-router-dom'



const Home = () => {
  // this is a hook given by react router dom-- I use it later to send the user back to the login page if the login didn't work
  let history = useHistory()

  const [token, setToken] = useState(null)
  const [userData, setUserData] = useState(null)
  const spotifyConnect = async () => {
    if(!token) return
    let response = await fetch('https://api.spotify.com/v1/me', {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Authorization': `Bearer ${token}`
    }})
    setUserData(response.json())
  }


  useEffect(() => {
    let _token = hash.access_token;
    console.log(_token)
    // redirects back to the login page if there is no token
    if (!_token) history.push("/")

    setToken(_token)
    // console.log(_token)
    spotifyConnect()
  }, [history, token, spotifyConnect])

    return (
      <div className="bg-black p-5 rounded-lg text-center max-w-xs">
        <h1 className="text-white text-2xl mb-2">Welcome to the Home page</h1>
      
      </div>
    );
  }



export default Home