import React, { useEffect, useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import NavButton from './NavButton'
import fetchGet from '../../helpers/fetchGet'
import {GlobalContext} from "../../hooks/GlobalContext"

const ArtistPage = () => {
const {context: {token}} = useContext(GlobalContext)
  // history.location.state when calling history.push(to: '', state: {}) fill the state param with the endpoint to hydrate the page properly
const history = useHistory()
const {endpoint} = history.location.state
const [data, setData] = useState(null)


useEffect(() => {
(async () => {
  const response = await fetchGet(`${endpoint}`, token)
  const body = await response.json()
  setData(body)
  console.log(data)
})()
}, [data, endpoint, token])


 return (
  <div className="page absolute bottom-0 left-0 right-0 top-0 text-white" >
    




   <NavButton history={history}/>
  </div>
 )
}


export default ArtistPage