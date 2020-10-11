import React, { useContext, useEffect, useState } from 'react'
import {TokenContext} from '../Home'
import Login from './Login'
import PlaylistCard from './PlaylistCard'
const Playlists = () => {
    const token = useContext(TokenContext)
    const [playlists, setPlaylists] = useState(null)
    useEffect(() => {
        const spotifyConnect = async (key) => {
          if(!key) return
          let response = await fetch('https://api.spotify.com/v1/me/playlists?offset=0&limit=20', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
              'Authorization': `Bearer ${key}`
            }})
            if(response.ok) setPlaylists(await response.json())
          }
          spotifyConnect(token)
      }, [token])

    useEffect(() => {
        console.log(playlists)
        playlists && console.log(playlists.items[0])
    }, [playlists])  




    return playlists ? (
    <>
    {playlists.items.map((playlist) => <PlaylistCard {...playlist} key={playlist.id}/> )}
    </>)
    : 
    <Login />
}

export default Playlists