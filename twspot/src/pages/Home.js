import React, { useState, useEffect} from 'react';
import hash from "../auth/hash"
import { useHistory } from 'react-router-dom'



const Home = () => {
  let history = useHistory()

  const [userData, setUserData] = useState(null)
  
  
  useEffect(() => {
    let _token = hash.access_token;
    if (!_token) history.push("/")

    const spotifyConnect = async () => {
      let response = await fetch('https://api.spotify.com/v1/me', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Authorization': `Bearer ${_token}`
      }})
      setUserData(await response.json())
    }

    // redirects back to the login page if there is an error and no token for now


    spotifyConnect()
  }, [history])

  useEffect(() => {
    console.log(userData)
  }, [userData])

    return (
      <div className="bg-black p-5 rounded-lg text-center max-w-xs">
        <h1 className="text-white text-2xl mb-2">Welcome to the Home page</h1>
      </div>
    );
  }



export default Home