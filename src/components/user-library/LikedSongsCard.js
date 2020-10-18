import React from 'react'
import likedSongsIcon from '../../icons/likedSongs.svg'
import { useHistory } from 'react-router-dom'

const LikedSongsCard = () => {
  const history = useHistory()
  const path = "likedsongs"
  const endpoint = "https://api.spotify.com/v1/me/tracks"


  function handleClick() {
    history.push(`/${path}`, { endpoint: endpoint })
  }

  return (
    <div
      id='card'
      className='text-white flex font-nunito-semibold ellipsis items-center ml-2'
      style={{ margin: '0.6rem' }}
      onClick={handleClick}>
      {/* allows whatever component that is rendering the card to just put default as a prop if there is no image there */}
      <div className='likedSongsImage'>
        <img src={likedSongsIcon} alt='liked songs heart' />
      </div>
      <div className='ellipsis'>
        <div className='text-md ellipsis'>Liked Songs</div>
        <div className='text-sm text-silver'></div>
      </div>
    </div>
  )
}

export default LikedSongsCard
