import React, { useEffect, useState, useCallback } from "react"
import Card from "./Card"
import Loading from "./Loading"
import callAPI from "../helpers/callAPI"
import InfiniteScroll from "react-infinite-scroller"
import { connect } from "react-redux"

const Albums = (props) => {
  const { token } = props
  const [albums, setAlbums] = useState([])
  const [nextAlbumUrl, setNextAlbumUrl] = useState(
    "https://api.spotify.com/v1/me/albums?offset=0&limit=40"
  )



  // when the scroller reaches the bottom, this is the load more function
  const handleLoadMore = async () => {
    //  returns there are no more playlists to load
    if (!nextAlbumUrl) return

    const response = await callAPI(nextAlbumUrl, token)
    if (response.ok) {
      const body = await response.json()
      // puts playlists in state, which triggers a re-render
      setAlbums((prevAlbums) => {
        const newAlbums = [...body.items].map((item) => item.album)
        return [...prevAlbums, ...newAlbums]
      })
      console.log(body)
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
    // if the undisplay prop is set to true, this div hides all the playlists, that way it doesn't have to call the api.
    // there's got to be a better way to do this though...
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={handleLoadMore}
        // the api returns NULL if you've loaded all the playlists, which will set the hasMore boolean to false, and stop infinite scroll from trying to load any more
        hasMore={Boolean(nextAlbumUrl)}
        loader={
          <Loading key="239rehoufwds"/>
        }
      >
        {albums.map((album) => {
          let owner = [...album.artists.map((artist) => artist.name)].join(", ")
          return <Card key={album.id} type="album" name={album.name} owner={owner} imgSrc={album.images[0] ? album.images[0].url : "default"}/>
        })}
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  )
}

export default connect((store) => ({ token: store.token }), {})(Albums)
