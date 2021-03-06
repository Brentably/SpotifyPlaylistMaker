import React from 'react'
import styled from 'styled-components'
import backArrow from '../../icons/backArrow.svg'
import backArrowActive from '../../icons/backArrowActive.svg'

const Button = styled.button`
  /* top: 0.25rem; */
  /* left: 0.25rem; */
  background-color: rgba(0, 0, 0, 0.7);
  /* border-radius: 50%; */
  /* width: 2rem; */
  /* height: 2rem; */
  /* padding: 0.2rem; */
  background-image: url(${backArrow});
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: content-box;
  &:active {
    background-image: url(${backArrowActive})
  }

`

// rn this is just a back button. I think I'll keep it that way b/c who uses the forward buttons anyway???

const NavButtons = ({history, className}) => {
  function handleClick() {
    console.log('BLEEP BLOOOP TIIIME WARRRP')
    history.goBack()
  }

  return <Button className={`w-8 h-8 rounded-full ${className}`}  onClick={handleClick}></Button>
}

export default NavButtons
