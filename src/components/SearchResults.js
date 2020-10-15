import React, {useEffect, } from 'react'
import {connect} from 'react-redux'
import fetchGet from '../helpers/fetchGet'


const SearchResults = ({token, query}) => {

 useEffect(() => {
  const formattedQuery = query.toLowerCase().split().join('+')
  (async () => {
   const response = await fetchGet("url", token)


  })()
 }, [query, token])



 return (
  <div className="text-white text-xl">{query}</div>
 )
}

export default connect((store => ({token: store.token})), {})(SearchResults)