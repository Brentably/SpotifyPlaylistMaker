import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import NavButton from './NavButton'
import Loading from '../Loading'
import fetchGet from '../../helpers/fetchGet'
import defaultImage from '../../icons/defaultIcon.svg'
import styled from 'styled-components'
import decodeHTML from '../../helpers/decodeHTML'


const TopPlaylist = styled.div`
  background-color: ${props => props.backgroundColor};
`


const PlaylistPage = ({token}) => {
  // history.location.state when calling history.push(to: '', state: {}) fill the state param with the endpoint to hydrate the page properly
const history = useHistory()
const {endpoint} = history.location.state
const [data, setData] = useState(null)

useEffect(() => {
(async () => {
  const response = await fetchGet(`${endpoint}`, token)
  const body = await response.json()
  setData(body)
  console.log(body)
})()
}, [endpoint, token])


 return data? (
  <div className="page absolute bottom-0 left-0 right-0 top-0 text-white" >
    <TopPlaylist backgroundColor={data.primary_color ? `${data.primary_color}` : "#535353"} >
      <img src={data.images[0] ? data.images[0].url : defaultImage} alt="playlist" />
      <div>{data.name}</div>
      <div>{data.owner.display_name}</div>
      <div>{data.description ? decodeHTML(data.description) : ""}</div>
    </TopPlaylist>
    <div className="bottomPlaylist">

    </div>

   <NavButton history={history}/>
  </div>
 ) : <Loading/>
}


export default connect((store) => ({ token: store.token }), {})(PlaylistPage)