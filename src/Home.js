import React, { useState, useEffect } from 'react'
import hash from './auth/hash'
import Header from './components/Header'
import Login from './components/Login'
import Loading from './components/Loading'
import MusicTypeSelector from './components/MusicTypeSelector'
import Playlists from './components/user-library/Playlists'
import Albums from './components/user-library/Albums'
import Search from './components/Search'
import PlaylistPage from './components/nav-components/PlaylistPage'
import ArtistPage from './components/nav-components/ArtistPage'
import AlbumPage from './components/nav-components/AlbumPage'
import { connect } from 'react-redux'
import { addToken } from './redux'
import './App.css'
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom'
import LikedSongsPage from './components/user-library/LikedSongsPage'

const Home = (props) => {
  const { addToken } = props
  hash.error && console.log(hash.error)
  const [token, setToken] = useState(null)
  const [userData, setUserData] = useState(null)
  const [authFailed, setAuthFailed] = useState(false)

  // checks the url for the token, and sets the token if it's there, otherwise checks local storage and sets that, also sets the token in redux global store with props.addToken
  // I'm using localStorage right now, mainly for my own development purposes, it keeps me from having to hit login every time I edit code and want to look at the app.
  useEffect(() => {
    if (hash.access_token) {
      setToken(hash.access_token)
      localStorage.clear()
      localStorage.setItem('token', hash.access_token)
      addToken(hash.access_token)
      console.log(hash.access_token)
    } else {
      setToken(localStorage.getItem('token'))
      addToken(localStorage.getItem('token'))
    }
  }, [addToken]) /* addToken will never change, it's just a required dependency*/

  // calls the api, helps make sure everything is working
  useEffect(() => {
    const spotifyConnect = async (_token) => {
      // if the key doesn't exist, then it stops the function and allows for the Login component to be rendered
      if (!_token) {
        setAuthFailed(true)
        return
      }
      let response = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          Authorization: `Bearer ${_token}`,
        },
      })
      // sets state to the response of the api
      if (response.ok) setUserData(await response.json())
      // if the response didn't work, and it had a status of 401 unauthorized, sets failed to true, which renders the login component
      if (!response.ok && response.status === '401') setAuthFailed(true)
    }
    spotifyConnect(token)
  }, [token])

  // useEffect(() => {
  //   console.log(userData)
  // }, [userData])

  if (userData) {
    return (
      <>
        <Header userData={userData} />
        <Router
          initialEntries={[
            '/playlists',
            '/albums',
            '/search',
            { pathname: '/playlist', state: { endpoint: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX4osfY3zybD2' } },
          ]}
          initialIndex={3}>
          <Switch>
            <Route path='/playlists'>
              <MusicTypeSelector />
              <Playlists />
            </Route>
            <Route path='/likedsongs'>
              <LikedSongsPage />
            </Route>
            <Route path='/albums'>
              <MusicTypeSelector />
              <Albums />
            </Route>
            <Route path='/search'>
              <MusicTypeSelector />
              <Search />
            </Route>
            <Route path='/playlist'>
              <PlaylistPage />
            </Route>
            <Route path='/artist'>
              <ArtistPage />
            </Route>
            <Route path='/album'>
              <AlbumPage />
            </Route>
          </Switch>
        </Router>
      </>
    )
  } else if (authFailed) {
    return <Login />
  } else {
    return <Loading />
  }
}

// redux: this component isn't pulling anything from redux, but IS pushing the token to redux store
export default connect(null, { addToken })(Home)
