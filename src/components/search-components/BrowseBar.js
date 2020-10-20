import React from 'react'
import forwardArrow from '../../icons/forwardArrow.svg'
import backArrow from '../../icons/backArrowActive.svg'
import { useHistory } from 'react-router-dom'

const BrowseBar = ({ forward, back, path = '/browsepage', className, children, data = {} }) => {
  const history = useHistory()
  // browsebar is passed in a forward/back prop to let the component know how it wants to look, an optional path to route the user to, optional classes can be added, children should be there, and data which is an object that contains the state that you want to pass to the page you're routing to

  function handleClick() {
    if (back) history.goBack()
    if (forward) history.push(`${path}`, data)
  }
  return (
    <div className={`m-2 text-white ${className} ${forward ? 'text-left' : 'text-center sticky'} `} onClick={handleClick}>
      <img
        src={backArrow}
        alt='back arrow'
        className={`${back ? undefined : 'hidden'} inline fixed left-0`}
        style={{ maxHeight: '1.5rem', maxWidth: '1.5rem'}}
      />
      {children}
      <img
        src={forwardArrow}
        alt='forward arrow'
        className={`${forward ? undefined : 'hidden'} inline fixed right-0`}
        style={{ maxHeight: '1.5rem', maxWidth: '1.5rem' }}
      />
    </div>
  )
}

export default BrowseBar
