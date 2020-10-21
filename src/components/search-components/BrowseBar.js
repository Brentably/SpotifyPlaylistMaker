import React from 'react'
import forwardArrow from '../../icons/forwardArrow.svg'
import backArrow from '../../icons/backArrowActive.svg'
import { useHistory } from 'react-router-dom'

export const ForwardBrowseBar = ({ path = '/browsepage', className, children, data = {} }) => {
  const history = useHistory()
  // browsebar is passed an optional path to route the user to, optional classes can be added, children should be there, and data which is an object that contains the state that you want to pass to the page you're routing to
  return (
    <div className={`m-2 text-white text-left${className}`} onClick={() => history.push(`${path}`, data)}>
      {children}
      <img
        src={forwardArrow}
        alt='forward arrow'
        className={`inline fixed right-0`}
        style={{ maxHeight: '1.5rem', maxWidth: '1.5rem' }}
      />
    </div>
  )
}

export const BackBrowseBar = ({ path = '/browsepage', className, children, data = {} }) => {
  const history = useHistory()
  return (
    <div className={`m-2 text-white text-center sticky ${className}`} onClick={() => history.goBack()}>
      <img
        src={backArrow}
        alt='back arrow'
        className={`inline fixed left-0`}
        style={{ maxHeight: '1.5rem', maxWidth: '1.5rem'}}
      />
      {children}
    </div>
  )
}