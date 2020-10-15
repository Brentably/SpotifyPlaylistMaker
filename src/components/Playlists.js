import React, { useEffect, useState, useCallback } from "react"
import Card from "./Card"
import Loading from "./Loading"
import fetchGet from "../helpers/fetchGet"
import InfiniteScroll from "react-infinite-scroller"
import { connect } from "react-redux"

const Playlists = (props) => {
  const { token } = props
  const [playlists, setPlaylists] = useState([])
  const [nextPlaylistUrl, setNextPlaylistUrl] = useState(
    "https://api.spotify.com/v1/me/playlists?offset=0&limit=40"
  )

  // useEffect(() => {
  //     console.log(playlists)
  //     // playlists && console.log(playlists.items[0])
  // }, [playlists])

  // when the scroller reaches the bottom, this is the load more function
  const handleLoadMore = async () => {
    //  returns there are no more playlists to load
    if (!nextPlaylistUrl) return

    const response = await fetchGet(nextPlaylistUrl)
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
        loader={
          <Loading key="Loading"/>
        }
      >
        {playlists.map((playlist) => (
          <Card
            key={playlist.id}
            type="playlist"
            imgSrc={playlist.images[0] ? playlist.images[0].url : "default"}
            name={playlist.name}
            owner={`by ${playlist.owner.display_name}`}
          />
        ))}
      </InfiniteScroll>
    </>
  ) : (
    <Loading />
  )
}

export default connect((store) => ({ token: store.token }), {})(Playlists)

// function mapStateToProps(globalState) {
//   // return an object where the keys are the name of the prop your component wants,
//   // values are the actual parts of the global state your component wants
// }

// export default connect(/* What parts of state do you want? */, /* What actions to dispatch? */)(App)
