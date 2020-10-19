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

// This was a lengthy ass process of styling the links properly
const MusicTypeSelector = () => {
    const musicTypeHeader = useRef(null)
    const [stick, setStick] = useState(false)
    const breakpoint = useRef()



    // the breakpoint ref is so that handleScroll has access to the breakpoint value, which is only determined after the first render
    function handleScroll() {
        // console.log(this.scrollY)
        // console.log(breakpoint.current)
        if(this.scrollY > breakpoint.current) {
          setStick(true)
        } else {
          setStick(false)
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        // On initial render, useEffect grabs the distance the playlistHeader is from the top, then sets the scroll breakpoint to that value, which is saved and remembered for future comparison of where to stop/start being sticky
        // the only problem here is that if someone opens the window, scrolls down, resizes the window and scrolls up, it'll look a little funny, but that's a edge / corner case, and I'm not too worried about that now. I may be able to fix that if I take a different approach with my if/else statement in the handleScroll, but then my handleScroll would have to know the stick value
        breakpoint.current = musicTypeHeader.current.offsetTop
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  return (
      <>
    {stick? <div style={{width: "100vw", height: `${musicTypeHeader.current.clientHeight}px`}}></div> : null}
    <div className={stick ? "stick text-silver flex text-xl tracking-wide p-2 font-nunito-semibold" : "w-full text-silver flex tracking-wide text-xl p-2 font-nunito-semibold"} ref={musicTypeHeader}>
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
