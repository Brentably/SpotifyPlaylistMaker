import React from 'react'
import NavButton from '../nav-components/NavButton'
import {useHistory} from 'react-router-dom'

const LikedSongs = () => {
  const history = useHistory()

  return (
    <div className="page absolute bottom-0 left-0 right-0 top-0 text-white" >
    




   <NavButton history={history}/>
  </div>
  )
}


export default LikedSongs