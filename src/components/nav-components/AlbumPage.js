import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

const PlaylistPage = () => {

 
const history = useHistory()
const {endpoint} = history.location.state
console.log(endpoint)

useEffect(() => {


}, [])


 return (
  <div>HELLo</div>
 )
}


export default connect((store) => ({ token: store.token }), {})(PlaylistPage)