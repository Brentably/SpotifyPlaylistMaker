import React from 'react'
import {ForwardArrow, BackArrowActive} from '../../icons/Arrows'
import { useHistory } from 'react-router-dom'

export const ForwardBrowseBar = ({ path = '/browsepage', className, children, data = {} }) => {
  const history = useHistory()
  // browsebar is passed an optional path to route the user to, optional classes can be added, children should be there, and data which is an object that contains the state that you want to pass to the page you're routing to
  return (
    <div
      className={`mx-2 my-3 text-white text-left flex justify-between ${className}`}
      onClick={() => history.push(`${path}`, data)}>
      {children}
      <ForwardArrow/>
    </div>
  )
}

export const BackBrowseBar = ({ path = '/browsepage', className, children, data = {} }) => {
  const history = useHistory()
  return (
    <div className={`m-2 flex justify-between text-white text-center sticky ${className}`} onClick={() => history.goBack()}>
      <div className="inline flex-1">
        <BackArrowActive/>
      </div>
      {children}
      <div id='empty for spacing' className='flex-1 inline'></div>
    </div>
  )
}
