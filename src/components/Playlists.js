import React, { useEffect, useState } from 'react'
import PlaylistCard from './PlaylistCard'
import Loading from './Loading'


const Playlists = (props) => {
    const {token} = props
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

    // useEffect(() => {
    //     console.log(playlists)
    //     playlists && console.log(playlists.items[0])
    // }, [playlists])  




    return playlists ? (
      // if the undisplay prop is set to true, this div hides all the playlists, that way it doesn't have to call the api 
    <div className={props.undisplay ? "hidden" : "undefined"}>
    {playlists.items.map((playlist) => <PlaylistCard {...playlist} key={playlist.id}/> )}
    </div>)
    : 
    <Loading />
}

export default Playlists