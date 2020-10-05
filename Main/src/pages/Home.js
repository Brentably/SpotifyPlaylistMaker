import React, { useState, useEffect} from 'react';
import hash from "../auth/hash"
import { authEndpoint, clientId, redirectUri, scopes } from "../auth/config"



const Home = () => {
  hash.error && console.log(hash.error)

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
        setUserData(response.json())
      }
    // console.log(_token)
    // redirects back to the login page if there is no token


    spotifyConnect()
  }, [token])

    return token ? 
      <div className="bg-black p-5 rounded-lg text-center max-w-xs">
        <h1 className="text-white text-2xl mb-2">Welcome to the Home page</h1>
      </div>
     : 
    <div className="bg-black p-5 rounded-lg text-center max-w-xs">
    <h1 className="text-white text-2xl mb-2">BPM Playlist Maker</h1>
    <h5 className="text-gray-200 text-wrap mb-4">
      This app allows you to create playlists based on the BPM of songs to
      create perfectly customized running playlists.
    </h5>
    <a
      className="btn text-white bg-green-700 hover:bg-green-800"
      href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
        "%20"
      )}&response_type=token&show_dialog=false`}
    >
      Connect to Spotify
    </a>
  </div>
  }



export default Home