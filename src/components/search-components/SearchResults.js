import React, { useEffect, useContext } from 'react'
import fetchGet from '../../helpers/fetchGet'
import { GlobalContext } from '../../hooks/GlobalContext'
import Loading from '../Loading'
import {ForwardBrowseBar} from './BrowseBar'
import Card from '../Card'


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


  useEffect(() => console.log(data), [data])

  return data ? (
    <>
    <Card item={data.tracks[0]} type='track' hero/>
    <Card item={data.tracks[1]} type='track' hero/>
    <Card item={data.artists[0]} type='artist' hero/>
    <Card item={data.artists[1]} type='artist' hero/>
    <Card item={data.playlists[0]} type='playlist' hero/>
    <Card item={data.playlists[1]} type='playlist' hero/>
    <Card item={data.albums[0]} type='album' hero/>
      <ForwardBrowseBar data={{data: data.artists, next: data.artistsUrl, type: "artist"}}>
        See all artists
      </ForwardBrowseBar>
      <ForwardBrowseBar data={{data: data.tracks, next: data.tracksUrl, type: "track"}}>
        See all songs
      </ForwardBrowseBar>
      <ForwardBrowseBar data={{data: data.playlists, next: data.playlistsUrl, type: "playlist"}}>
        See all playlists
      </ForwardBrowseBar>
      <ForwardBrowseBar data={{data: data.albums, next: data.albumsUrl, type: "album"}}>
        See all albums
      </ForwardBrowseBar>
    </>
  ) : (
    <Loading />
  )
}

export default SearchResults
