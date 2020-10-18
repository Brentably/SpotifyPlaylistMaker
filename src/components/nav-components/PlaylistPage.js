import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import NavButton from './NavButton'

const PlaylistPage = () => {

 // history.location.state is just the props of the component that rendered this page
const history = useHistory()
const {endpoint} = history.location.state


useEffect(() => {


}, [])


 return (
  <div className="page absolute bottom-0 left-0 right-0 text-white bg-white" style={{top: "50px"}}>
   <NavButton history={history}/>
    PlaylistPage
  </div>
 )
}


export default connect((store) => ({ token: store.token }), {})(PlaylistPage)