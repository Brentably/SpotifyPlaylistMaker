import React, { useEffect, useContext } from 'react'
import fetchGet from '../../helpers/fetchGet'
import { GlobalContext } from '../../hooks/GlobalContext'
import Loading from '../Loading'
import BrowseBar from './BrowseBar'


const SearchResults = ({ query, data, setData }) => {
  const {
    context: { token },
  } = useContext(GlobalContext)

  useEffect(() => {
    if (query.length < 1) return
    const formattedQuery = query.split(' ').join('%20').split('').filter(character => character !== "`").join('')

    console.log(formattedQuery)
    const url = `https://api.spotify.com/v1/search?q=${formattedQuery}&type=album,artist,playlist,track&market=from_token`
    console.log(url)
    ;(async () => {
      const response = await fetchGet(url, token)
      const body = await response.json()
      console.log(body)
      setData({
        albums: [...body.albums.items],
        albumsUrl: body.albums.next,
        artists: [...body.artists.items],
        artistsUrl: body.artists.next,
        playlists: [...body.playlists.items],
        playlistsUrl: body.playlists.next,
        tracks: [...body.tracks.items],
        tracksUrl: body.tracks.next,
      })
    })()
  }, [token, setData, query])

  // useEffect(() => console.log(data), [data])

  return data ? (
    <>
      <BrowseBar forward data={{data: data.artists, next: data.artistsUrl, type: "artists"}}>
        See all artists
      </BrowseBar>
      <BrowseBar forward data={{data: data.tracks, next: data.tracksUrl, type: "tracks"}}>
        See all songs
      </BrowseBar>
      <BrowseBar forward data={{data: data.playlists, next: data.playlistsUrl, type: "playlists"}}>
        See all playlists
      </BrowseBar>
      <BrowseBar forward data={{data: data.albums, next: data.albumsUrl, type: "albums"}}>
        See all albums
      </BrowseBar>
    </>
  ) : (
    <Loading />
  )
}

export default SearchResults
