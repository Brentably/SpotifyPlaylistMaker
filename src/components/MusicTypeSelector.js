import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const NLink = styled(NavLink)`
margin-right: 1em;
&:active, :hover {
    color: #808a9f;
    text-decoration: none;
    cursor: default;
}

`


// This was a lengthy ass process of styling the links properly, but in the future, I think I will just set an onclick function to route to where I want to go, otherwise just use styled components, b/c overriding the default anchor style is a pain
const MusicTypeSelector = () => {
    return (
        <div className="text-silver flex text-xl tracking-wide mt-2 p-2 font-nunito-semibold">
        <NLink to="/playlists" className="text-silver" activeClassName="selected">Playlists</NLink>
        <NLink to="/albums" className="text-silver" activeClassName="selected">Albums</NLink>
        <NLink to="/search" className="text-silver" activeClassName="selected">Search</NLink> 
        </div>
    )
}


export default MusicTypeSelector