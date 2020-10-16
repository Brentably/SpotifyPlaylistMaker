import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

const PlaylistPage = () => {

 // history.location.state is just the props of the component that rendered this page
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