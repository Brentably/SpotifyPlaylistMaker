import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'
import {BackBrowseBar} from './BrowseBar'
import Loading from '../Loading'
import fetchGet from '../../helpers/fetchGet'
import { GlobalContext } from '../../hooks/GlobalContext'
import Card from '../Card'

const BrowsePage = () => {
  const {
    context: { token },
  } = useContext(GlobalContext)
  const history = useHistory()
  const type = history.location.state.type
  const newType = type.split("")
newType[0] = newType[0].toUpperCase()
  const capsType = newType.join("")
  const [data, setData] = useState([...history.location.state.data])
  const [next, setNext] = useState(history.location.state.next)

  useEffect(() => {
    console.log(data)
    console.log(type)
    console.log(next)
  }, [next, data, type])

  const handleLoadMore = async () => {
    //  returns if there are no more thingsto load
    if (!next) return
    const response = await fetchGet(next, token)
    if (response.ok) {
      const body = await response.json()
      // items must change depending on the type
      let items = body[`${type}`].items
      console.log(items)
      setNext(body[`${type}`].next)
      setData((prevData) => {
        return [...prevData, ...items]
      })

      // and sets the next url for the next time the load more function is called
    }
  }

  

  return (
    <>
      <BackBrowseBar>{`${capsType}`}</BackBrowseBar>
      <InfiniteScroll
        pageStart={0}
        loadMore={handleLoadMore}
        // the api returns NULL if you've loaded all the playlists, which will set the hasMore boolean to false, and stop infinite scroll from trying to load any more
        hasMore={Boolean(next)}
        loader={<Loading key='Loading' />}
        threshold={500}>
        {data.map((item) => {
          // console.log(item)
          return <Card key={item.id} item={item} type={type} />
        })}
      </InfiniteScroll>
    </>
  )
}

export default BrowsePage
