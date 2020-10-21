import React from 'react'
import likedSongsIcon from '../../icons/heart-white.svg'
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
      <div className='likedSongsImage mr-2 flex justify-center items-center' style={{objectFit: "cover", height: "3.5rem", width: "3.5rem"}}>
        <img src={likedSongsIcon} alt='liked songs heart' style={{width: "1.4em", height: "1.4em"}}/>
      </div>
      <div className='ellipsis'>
        <div className='text-base ellipsis'>Liked Songs</div>
        <div className='text-sm text-silver'></div>
      </div>
    </div>
  )
}

export default LikedSongsCard
