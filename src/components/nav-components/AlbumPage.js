import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import NavButton from './NavButton'
import fetchGet from '../../helpers/fetchGet'

const AlbumPage = ({token}) => {
  // history.location.state when calling history.push(to: '', state: {}) fill the state param with the endpoint to hydrate the page properly
const history = useHistory()
const {endpoint} = history.location.state
const [data, setData] = useState(null)


useEffect(() => {
(async () => {
  const response = await fetchGet(`${endpoint}`, token)
  const body = await response.json()
  setData(body)
})()
}, [])


 return (
  <div className="page absolute bottom-0 left-0 right-0 top-0 text-white" >
    




   <NavButton history={history}/>
  </div>
 )
}


export default connect((store) => ({ token: store.token }), {})(AlbumPage)