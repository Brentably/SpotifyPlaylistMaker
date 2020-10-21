import React from 'react'
import backArrowActiveSVG from './backArrowActive.svg'
import forwardArrowSVG from './forwardArrow.svg'

export const BackArrowActive = () => <img src={backArrowActiveSVG} alt='back arrow' style={{ maxHeight: '1.5rem', maxWidth: '1.5rem' }} />


export const ForwardArrow = () => <img src={forwardArrowSVG} alt='forward arrow' className={`mr-2`} style={{ maxHeight: '1.5rem', maxWidth: '1.5rem' }} />