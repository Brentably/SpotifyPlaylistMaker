import React from 'react'
import styled from 'styled-components'


const Item = styled.div`
margin-right: 1em;
`
const MusicTypeSelector = (props) => {
console.log(props)
    return (
        <div className="text-silver flex text-xl tracking-wide mt-2 p-1">
        <Item className={props.type === "Playlists" && "selected"} onClick={() => {props.setType("Playlists")}}>Playlists</Item>
        <Item className={props.type === "Albums" && "selected"} onClick={() => {props.setType("Albums")}}>Albums</Item>
        <Item className={props.type === "Artists" && "selected"} onClick={() => {props.setType("Artists")}}>Artists</Item>
        </div>
    )
}


export default MusicTypeSelector