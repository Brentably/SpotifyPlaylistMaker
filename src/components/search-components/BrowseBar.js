import React from 'react'
import forwardArrow from '../../icons/forwardArrow.svg'
import backArrow from '../../icons/backArrowActive.svg'
import { useHistory } from 'react-router-dom'

export const ForwardBrowseBar = ({ path = '/browsepage', className, children, data = {} }) => {
  const history = useHistory()
  // browsebar is passed an optional path to route the user to, optional classes can be added, children should be there, and data which is an object that contains the state that you want to pass to the page you're routing to
  return (
    <div
      className={`mx-2 my-3 text-white text-left flex justify-between ${className}`}
      onClick={() => history.push(`${path}`, data)}>
      {children}
      <img src={forwardArrow} alt='forward arrow' className={`mr-3`} style={{ maxHeight: '1.5rem', maxWidth: '1.5rem' }} />
    </div>
  )
}

export const BackBrowseBar = ({ path = '/browsepage', className, children, data = {} }) => {
  const history = useHistory()
  return (
    <div className={`m-2 flex justify-between text-white text-center sticky ${className}`} onClick={() => history.goBack()}>
      <div className="inline flex-1">
        <img src={backArrow} alt='back arrow' className={``} style={{ maxHeight: '1.5rem', maxWidth: '1.5rem' }} />
      </div>
      {children}
      <div id='empty for spacing' className='flex-1 inline'></div>
    </div>
  )
}
