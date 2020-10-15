import React, {useEffect, useRef, useState} from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const NLink = styled(NavLink)`
  margin-right: 1em;
  transition: color 0.1s ease-out;
  &:active,
  :hover {
    color: #808a9f;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.1s ease-out;
  }
`

// This was a lengthy ass process of styling the links properly, but in the future, I think I will just set an onclick function to route to where I want to go, otherwise just use styled components, b/c overriding the default anchor style is a pain
const MusicTypeSelector = () => {
    const stickyHeader = useRef(null)
    const [stick, setStick] = useState(false)
    const [scrollVal, setScrollVal] = useState(null)
    const scrollValRef = useRef()
    scrollValRef.current = scrollVal


    function handleScroll() {
        // console.log(this.scrollY)
        // console.log(scrollValRef.current)
        if(this.scrollY > scrollValRef.current) {
          setStick(true)
        } else {
          setStick(false)
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        // On initial render, useEffect grabs the distance the stickyHeader is from the top, then sets the scrollValue to that value, which is saved and remembered, so once the stickyHeader's position is set to fixed, it doesn't override and say that the  sticky header has no distance from the top
        // the only problem here is that if someone opens the window, scrolls down, resizes the window and scrolls up, it'll look a little funny, but that's a edge / corner case, and I'm not too worried about that now. I may be able to fix that if I take a different approach with my if/else statement in the handleScroll, but then my handleScroll would have to know the stick value
        setScrollVal(stickyHeader.current.offsetTop)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  return (
      <>
    {stick? <div style={{width: "100vw", height: `${stickyHeader.current.clientHeight}px`}}></div> : null}
    <div className={stick ? "stick text-silver flex text-xl tracking-wide p-2 font-nunito-semibold" : "w-full text-silver flex tracking-wide text-xl p-2 font-nunito-semibold"} ref={stickyHeader}>
      <NLink to="/playlists" className="text-silver" activeClassName="selected">
        Playlists
      </NLink>
      <NLink to="/albums" className="text-silver" activeClassName="selected">
        Albums
      </NLink>
      <NLink to="/search" className="text-silver" activeClassName="selected">
        Search
      </NLink>
    </div>
    </>
  )
}

export default MusicTypeSelector
