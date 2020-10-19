import React, {useEffect, useContext} from 'react'
// import fetchGet from '../helpers/fetchGet'
import {GlobalContext} from '../hooks/GlobalContext'


const SearchResults = ({query}) => {
  const {context: {token}} = useContext(GlobalContext)
 useEffect(() => {
  // const formattedQuery = query.length > 0 ? query.toLowerCase().split().join('+') : ""
  // (async () => {
  //  const response = await fetchGet("url", token)
  //  const body = await response.json()
  //  console.log(body)

  // })()
  console.log('RESULTS')
 }, [query, token])



 return (
  <div className="text-white text-xl">{query}</div>
 )
}

export default SearchResults