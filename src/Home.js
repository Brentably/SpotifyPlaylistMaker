import React, { useState, useEffect} from 'react';
import hash from "./auth/hash"
import Header from './components/Header';
import Login from './components/Login';
import Loading from './components/Loading';
import MusicTypeSelector from './components/MusicTypeSelector';
import Playlists from './components/Playlists'
// import Albums from './components/Albums'
// import Artists from './components/Artists'
import './App.css'
export const TokenContext = React.createContext()


const Home = () => {

  hash.error && console.log(hash.error)
  const [token, setToken] = useState(null)
  const [userData, setUserData] = useState(null)
  const [musicType, setMusicType] = useState("Playlists")
  const [failed, setFailed] = useState(false)

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

// calls the api, helps make sure everything is working
  useEffect(() => {
    const spotifyConnect = async (key) => {
      // if the key doesn't exist, then it stops the function and allows for the Login component to be rendered
      if(!key) {
        setFailed(true)
        return
      }
      let response = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Authorization': `Bearer ${key}`
        }})
        // sets state to the response of the api
        if(response.ok) setUserData(await response.json())
        // if the response didn't work, and it had a status of 401 unauthorized, sets failed to true, which renders the login component
        if(!response.ok && response.status === "401") setFailed(true)

      }
      spotifyConnect(token)
  }, [token])

  // useEffect(() => {
  //   console.log(userData)
  // }, [userData])


    if(userData) {
      return (
        <TokenContext.Provider value={token}>
        <Header userData={userData}/>
        <MusicTypeSelector type={musicType} setType={setMusicType}/>
        <Playlists undisplay={musicType !== "Playlists" && true}/>
        {/* {musicType === "Albums" && <Playlists />} */}
        {/* {musicType === "Artists" && <Playlists />} */}
  
        </TokenContext.Provider>)
    } else if (failed) {
      return <Login />
      } else {
        return <Loading />
      }
  }



export default Home