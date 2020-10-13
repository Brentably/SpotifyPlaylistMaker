import React, { useEffect, useState, useCallback} from 'react'
import Card from './Card'
import Loading from './Loading'
import callAPI from '../helpers/callAPI'
import InfiniteScroll from 'react-infinite-scroller';;

const Playlists = (props) => {
  const {token} = props
  const [playlists, setPlaylists] = useState([])
  const [nextPlaylistUrl, setNextPlaylistUrl] = useState('https://api.spotify.com/v1/me/playlists?offset=0&limit=40')


  
  // useEffect(() => {
    //     console.log(playlists)
    //     // playlists && console.log(playlists.items[0])
    // }, [playlists])  
    
    
// when the scroller reaches the bottom, this is the load more function
  const handleLoadMore = async () => {
    //  returns there are no more playlists to load
    if(!nextPlaylistUrl) return;

    const response = await callAPI(nextPlaylistUrl, token)
    if(response.ok) {
      const body = await response.json()
      // puts playlists in state, which triggers a re-render
      setPlaylists((prevPlaylists) => {
        return [...prevPlaylists, ...body.items]
      })
      console.log(body)
      // and sets the next playlist url for the next time the load more function is called
      setNextPlaylistUrl(body.next)
    }
  }

// annoying syntax used to load the initial data on the first render
  const initHandleLoadMore = useCallback(handleLoadMore, []);
  useEffect(() => {initHandleLoadMore()}, [initHandleLoadMore])
      
  // if state has been updated
  return (playlists.length > 0) ? (
    // if the undisplay prop is set to true, this div hides all the playlists, that way it doesn't have to call the api.
    // there's got to be a better way to do this though...
  <div className={props.undisplay ? "hidden" : "undefined"}>
    <InfiniteScroll
  pageStart={0}
  loadMore={handleLoadMore}
  hasMore={Boolean(nextPlaylistUrl)}
  loader={<div className="loader" key={0}>Loading ...</div>}
    >
  {playlists.map(playlist => <Card {...playlist} key={playlist.id} musicType="Playlist"/> )}
    </InfiniteScroll>
  </div>)
  : 
  <Loading />
}

export default Playlists



// function mapStateToProps(globalState) {
//   // return an object where the keys are the name of the prop your component wants,
//   // values are the actual parts of the global state your component wants
// }

// export default connect(/* What parts of state do you want? */, /* What actions to dispatch? */)(App)