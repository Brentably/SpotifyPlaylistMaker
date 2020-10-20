import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
// import InfiniteScroll from "react-infinite-scroller"
import BrowseBar from './BrowseBar'

const BrowsePage = () => {
  const history = useHistory()

  return <BrowseBar back>Back to search</BrowseBar>
}

export default BrowsePage
