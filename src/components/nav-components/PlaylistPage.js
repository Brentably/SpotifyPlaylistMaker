import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import NavButton from './NavButton'
import Loading from '../Loading'
import Card from '../Card'
import fetchGet from '../../helpers/fetchGet'
import defaultImage from '../../icons/defaultIcon.svg'
import styled from 'styled-components'
import decodeHTML from '../../helpers/decodeHTML'
import InfiniteScroll from 'react-infinite-scroller'
import { GlobalContext } from '../../hooks/GlobalContext'

const PlaylistTop = styled.div`
  /* props.backgroundColor allows for future background color responsiveness */
  background: rgb(19, 19, 19);
  background: linear-gradient(0deg, rgba(19, 19, 19, 1) 0%, rgba(48, 48, 48, 1) 35%, ${(props) => props.backgroundColor} 100%);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* align-items: center; */
  font-size: 1.5rem;
`
const PlaylistBottom = styled.div`
  /* position: absolute;
  top: 13em;
  left: 0;
  right: 0;
  bottom: 0; */
  z-index: 1000;
  /* background: rgb(0,0,0); */
  /* background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%); */
`

const Header = styled.div`
  width: 100%;
`

const PlaylistPage = () => {
  // history.location.state when calling history.push(to: '', state: {}) fill the state param with the endpoint to hydrate the page properly
  const {
    context: { token },
  } = useContext(GlobalContext)
  const history = useHistory()
  const { endpoint } = history.location.state
  const [data, setData] = useState(null)
  const [nextTrackUrl, setNextTrackUrl] = useState(null)
  const [tracks, setTracks] = useState(null)

  useEffect(() => {
    ;(async () => {
      const response = await fetchGet(`${endpoint}?market=from_token`, token)
      const body = await response.json()
      setData(body)
      setNextTrackUrl(body.tracks.next)
      setTracks(body.tracks.items)
      console.log(body)
    })()
  }, [endpoint, token])

  const handleLoadMore = async () => {
    if (!nextTrackUrl) return
    const response = await fetchGet(nextTrackUrl, token)
    if (response.ok) {
      const body = await response.json()
      setTracks((prevTracks) => {
        return [...prevTracks, ...body.items]
      })

      setNextTrackUrl(body.next)
    }
  }

  return data && tracks ? (
    <div className='text-white'>
      <PlaylistTop backgroundColor={data.primary_color ? `${data.primary_color}` : '#535353'}>
        <Header>
          <div className='m-2 text-center'>{data.name}</div>
          <NavButton history={history} className="top-0 left-0 m-2 fixed"/>
        </Header>
        <img
          src={data.images[0] ? data.images[0].url : defaultImage}
          alt='playlist'
          style={{ height: '7em', width: '7em' }}
          className='self-center'
        />
        <div id='ownerAndDescription' className='self-start p-3'>
          <div className='text-base'>by {data.owner.display_name}</div>
          <div className='text-silver text-sm'>{data.description ? decodeHTML(data.description) : ''}</div>
        </div>
      </PlaylistTop>
      <PlaylistBottom>
        <InfiniteScroll
          pageStart={0}
          loadMore={handleLoadMore}
          hasMore={Boolean(nextTrackUrl)}
          loader={<Loading key='Loading' />}>
          {tracks.map((index) => {
            const track = index.track
            const owners = track.artists.map((artist) => artist.name).join(',')
            const source = track.album.images[0] ? track.album.images[0].url : defaultImage
            // console.log(track)
            return <Card key={track.id} header={track.name} subheader={owners} img={source} />
          })}
        </InfiniteScroll>
      </PlaylistBottom>
    </div>
  ) : (
    <Loading />
  )
}

export default PlaylistPage
