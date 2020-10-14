import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Item = styled.div`
margin-right: 1em;
`
const MusicTypeSelector = (props) => {
    return (
        <div className="text-silver flex text-xl tracking-wide mt-2 p-2 font-nunito-semibold">
        <Link to="/playlists">
            <Item className={props.type === "Playlists" && "selected"} onClick={() => {props.setType("Playlists")}}>Playlists</Item>
        </Link>
        <Link to="/albums">
            <Item className={props.type === "Albums" && "selected"} onClick={() => {props.setType("Albums")}}>Albums</Item>
        </Link>
        <Link to="/artists">
            <Item className={props.type === "Artists" && "selected"} onClick={() => {props.setType("Artists")}}>Artists</Item>
        </Link>
        </div>
    )
}


export default MusicTypeSelector