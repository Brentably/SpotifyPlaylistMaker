import React, { useEffect, useState, useCallback, useContext } from 'react'
import Card from '../Card'
import Loading from '../Loading'
import LikedSongsCard from './LikedSongsCard'
import fetchGet from '../../helpers/fetchGet'
import InfiniteScroll from 'react-infinite-scroller'
import { GlobalContext } from '../../hooks/GlobalContext'

const Playlists = () => {
  const {context: {token}} = useContext(GlobalContext)
  const [playlists, setPlaylists] = useState([])
  const [nextPlaylistUrl, setNextPlaylistUrl] = useState('https://api.spotify.com/v1/me/playlists?offset=0&limit=40')

  // useEffect(() => {
  //     console.log(playlists)
  //     // playlists && console.log(playlists.items[0])
  // }, [playlists])

  // when the scroller reaches the bottom, this is the load more function
  const handleLoadMore = async () => {
    //  returns there are no more playlists to load
    if (!nextPlaylistUrl) return

    const response = await fetchGet(nextPlaylistUrl, token)
    if (response.ok) {
      const body = await response.json()
      // puts playlists in state, which triggers a re-render
      setPlaylists((prevPlaylists) => {
        return [...prevPlaylists, ...body.items]
      })

      // and sets the next playlist url for the next time the load more function is called
      setNextPlaylistUrl(body.next)
    }
  }

  // annoying syntax used to load the initial data on the first render
  const initHandleLoadMore = useCallback(handleLoadMore, [])
  useEffect(() => {
    initHandleLoadMore()
  }, [initHandleLoadMore])

  // if state has been updated
  return playlists.length > 0 ? (
    // if the undisplay prop is set to true, this div hides all the playlists, that way it doesn't have to call the api.
    // there's got to be a better way to do this though...
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={handleLoadMore}
        // the api returns NULL if you've loaded all the playlists, which will set the hasMore boolean to false, and stop infinite scroll from trying to load any more
        hasMore={Boolean(nextPlaylistUrl)}
        loader={<Loading key='Loading' />}>
        <LikedSongsCard />
        {/* <LikedSongsCard /> */}

        {playlists.map((playlist) => {
          // console.log(playlist)
          return (
            <Card
              key={playlist.id}
              item={playlist}
              type={playlist.type}
            />
          )
        })}
      </InfiniteScroll>
    </>
  ) : (
    <Loading />
  )
}

export default Playlists
