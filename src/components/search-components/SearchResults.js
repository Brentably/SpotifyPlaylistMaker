import React, { useEffect, useContext, useState } from 'react'
import fetchGet from '../../helpers/fetchGet'
import { GlobalContext } from '../../hooks/GlobalContext'
import Loading from '../Loading'
import BrowseBar from './BrowseBar'


const SearchResults = ({ query }) => {
  const {
    context: { token },
  } = useContext(GlobalContext)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (query.length < 1) return
    const formattedQuery = query.split(' ').join('%20')
    // console.log(formattedQuery)
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
  }, [query, token])

  // useEffect(() => console.log(data), [data])

  return data ? (
    <>
      <BrowseBar forward data={{artists: data.artists, artistsUrl: data.artistsUrl}}>
        See all artists
      </BrowseBar>
      <BrowseBar forward data={{tracks: data.tracks, tracksUrl: data.tracksUrl}}>
        See all songs
      </BrowseBar>
      <BrowseBar forward data={{playlists: data.playlists, playlistsUrl: data.playlistsUrl}}>
        See all playlists
      </BrowseBar>
      <BrowseBar forward data={{albums: data.albums, albumsUrl: data.albumsUrl}}>
        See all albums
      </BrowseBar>
    </>
  ) : (
    <Loading />
  )
}

export default SearchResults
