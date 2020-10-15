import React, {useEffect, useRef, useState} from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import Search from "./Search"

const NLink = styled(NavLink)`
  margin-right: 1em;
  &:active,
  :hover {
    color: #808a9f;
    text-decoration: none;
    cursor: default;
  }
`

// This was a lengthy ass process of styling the links properly, but in the future, I think I will just set an onclick function to route to where I want to go, otherwise just use styled components, b/c overriding the default anchor style is a pain
const MusicTypeSelector = () => {
    const stickyHeader = useRef(null)
    const [stick, setStick] = useState(false)

    function handleScroll() {
        console.log(this.scrollY)
        console.log(stickyHeader.current.offsetTop)
        // console.dir(stickyHeader.current)
        if(this.scrollY > stickyHeader.current.offsetTop) {
            setStick(true)
        } else setStick(false)

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })
  return (
      <>
    {stick? <div style={{width: "100vw", height: `${stickyHeader.current.clientHeight}px`}}></div> : null}
    <div className={stick ? "sticky text-silver flex text-xl pt-2 tracking-wide p-2 font-nunito-semibold" : "static text-silver flex text-xl toffsetTop p-2 font-nunito-semibold"} ref={stickyHeader}>
      <NLink to="/playlists" className="text-silver" activeClassName="selected">
        Playlists
      </NLink>
      <NLink to="/albums" className="text-silver" activeClassName="selected">
        Albums
      </NLink>
      <NLink to="/search">
        <Search />
      </NLink>
    </div>
    </>
  )
}

export default MusicTypeSelector
