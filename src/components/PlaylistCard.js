import React from 'react'

const PlaylistCard = (props) => {
    console.log(props)
    return (
        <div className="text-white flex m-2 font-nunito-semibold">
            <img src={props.images[0].url} alt="Playlist" className="mr-2" style={{objectFit: "cover", maxWidth: "4em"}} />
            <div className="text-sm">{props.name}</div>
        </div>
    )
}

export default PlaylistCard