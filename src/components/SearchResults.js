import React, { useEffect, useContext, useState } from 'react'
import fetchGet from '../helpers/fetchGet'
import { GlobalContext } from '../hooks/GlobalContext'

const SearchResults = ({ query }) => {
  const {
    context: { token },
  } = useContext(GlobalContext)
  const [albums, setAlbums] = useState([])
  const [artists, setArtists] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [tracks, setTracks] = useState([])
  const [albumsUrl, setAlbumsUrl] = useState("")
  const [artistsURL, setArtistsUrl] = useState("")
  const [playlistsUrl, setPlaylistsUrl] = useState("")
  const [tracksUrl, setTracksUrl] = useState("")

  useEffect(() => {
    if (query.length < 1) return
    const formattedQuery = query.split(' ').join('%20')
    // console.log(formattedQuery)
    const url = `https://api.spotify.com/v1/search?q=${formattedQuery}&type=album,artist,playlist,track&market=from_token`
    // console.log(url)
    ;(async () => {
      const response = await fetchGet(url, token)
      const body = await response.json()
      console.log(body)
      let data = body
      console.log(data)
      setAlbums([...data.albums.items])
      setAlbumsUrl(data.albums.next)
      setArtists([...data.artists.items])
      setArtistsUrl(data.artists.next)
      setPlaylists([...data.playlists.items])
      setPlaylistsUrl(data.playlists.next)
      setTracks([...data.tracks.items])
      setTracksUrl(data.tracks.next)
    })()
  }, [query, token])

  return <div className='text-white text-xl'>{query}</div>
}

export default SearchResults
