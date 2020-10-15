import React, {useEffect, } from 'react'
import {connect} from 'react-redux'
import callAPI from '../helpers/callAPI'


const SearchResults = (props) => {
 const {token, query} = props

 useEffect(() => {
  (async () => {
   const response = await callAPI("url", token)


  })()
 }, [query, token])



 return (
  <div className="text-white text-xl">{query}</div>
 )
}

export default connect((store => ({token: store.token})), {})(SearchResults)