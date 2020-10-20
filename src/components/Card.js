import React from 'react'
import { useHistory } from 'react-router-dom'
import defaultIcon from '../icons/defaultIcon.svg'

// COMPONENT INFO:
// When using Card
// path is the path to route to when card is clicked
// endpoint is the endpoint that gets passed along is location.state to hydrate the page that card opens
// imgClass is if you want to style your image, if you're using svg or something like that

const Card = ({ item, type }) => {
  // puts in track / playlist / artist / album and returns the proper data to put it into a card
  let img
  let header
  let subheader
  let endpoint
  let path
  switch (type) {
    case 'album':
    case 'albums':
      img = item.images[0] ? item.images[0].url : defaultIcon
      header = item.name
      subheader = [...item.artists.map((artist) => artist.name)].join(', ')
      endpoint = item.href
      path = '/album'
      break
    case 'artist':
    case 'artists':
      img = item.images[0] ? item.images[0].url : defaultIcon
      header = item.name
      endpoint = item.href
      path = '/artist'
      break
    case 'playlist':
    case 'playlists':
      img = item.images[0] ? item.images[0].url : defaultIcon
      header = item.name
      subheader = `by ${item.owner.display_name}`
      endpoint = item.href
      path = '/playlist'
      break
    case 'track':
    case 'tracks':
      img = item.album.images[0] ? item.album.images[0].url : defaultIcon
      header = item.name
      subheader = item.artists.map((artist) => artist.name).join(',')
      endpoint = null
      path = null
      break
    default:
      img = defaultIcon
      header = 'HEADER'
      subheader = 'SUBHEADER'
      endpoint = null
      path = null
  }

  let history = useHistory()

  // when you click on a playlist / album / etc, this routes you to a generic playlist / album / etc, page with state holding the endpoint for that page, so you can dynamically render it
  function handleClick() {
    if (!path) return
    history.push(`${path}`, { endpoint: endpoint })
  }

  return (
    <div id='card' className='text-white flex font-nunito-semibold ellipsis items-center m-2' onClick={handleClick}>
      {/* allows whatever component that is rendering the card to just put default as a prop if there is no image there */}
      <img
        src={img}
        alt={type}
        className={'mr-2'}
        style={{ objectFit: 'cover', height: '3.4em', width: '3.4em' }}
        loading='lazy'
      />
      <div className='ellipsis'>
        <div className='text-md ellipsis'>{header}</div>
        <div className='text-sm text-silver'>{subheader}</div>
      </div>
    </div>
  )
}

export default Card
