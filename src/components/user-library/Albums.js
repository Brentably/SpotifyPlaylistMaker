import React, { useEffect, useState, useCallback, useContext } from 'react'
import Card from '../Card'
import Loading from '../Loading'
import fetchGet from '../../helpers/fetchGet'
import InfiniteScroll from 'react-infinite-scroller'
import { GlobalContext } from '../../hooks/GlobalContext'

const Albums = () => {
  const {context: {token}} = useContext(GlobalContext)
  const [albums, setAlbums] = useState([])
  const [nextAlbumUrl, setNextAlbumUrl] = useState('https://api.spotify.com/v1/me/albums?offset=0&limit=40')

  // when the scroller reaches the bottom, this is the load more function
  const handleLoadMore = async () => {
    //  returns there are no more playlists to load
    if (!nextAlbumUrl) return

    const response = await fetchGet(nextAlbumUrl, token)
    if (response.ok) {
      const body = await response.json()
      // puts playlists in state, which triggers a re-render
      setAlbums((prevAlbums) => {
        const newAlbums = [...body.items].map((item) => item.album)
        return [...prevAlbums, ...newAlbums]
      })
      // console.log(body)
      // and sets the next playlist url for the next time the load more function is called
      setNextAlbumUrl(body.next)
    }
  }

  // annoying syntax used to load the initial data on the first render
  const initHandleLoadMore = useCallback(handleLoadMore, [])
  useEffect(() => {
    initHandleLoadMore()
  }, [initHandleLoadMore])

  // if state has been updated
  return albums.length > 0 ? (

    <InfiniteScroll
      pageStart={0}
      loadMore={handleLoadMore}
      // the api returns NULL if you've loaded all the playlists, which will set the hasMore boolean to false, and stop infinite scroll from trying to load any more
      hasMore={Boolean(nextAlbumUrl)}
      loader={<Loading key='239rehoufwds' />}>


      {albums.map((album) => {
        return (
          <Card
            key={album.id}
            item={album}
            type="album"
          />
        )
      })}
    </InfiniteScroll>
  ) : (
    <Loading />
  )
}

export default Albums
