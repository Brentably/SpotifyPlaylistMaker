import React from 'react'

const PlaylistCard = (props) => {
    // console.log(props)
    return (
        <div className="text-white flex m-2 font-nunito-semibold w-screen" style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
            <img src={props.images[0].url} alt="Playlist" className="mr-2" style={{objectFit: "cover", maxWidth: "5em"}} />
            <div className="text-xl">{props.name}</div>
        </div>
    )
}

export default PlaylistCard