import React from 'react'

const PlaylistCard = (props) => {
    // console.log(props)
    return (
        <div className="text-white flex m-2 font-nunito-semibold" style={{whiteSpace: "nowrap", overflow: "hidden"}}>
            <img src={props.images[0].url} alt="Playlist" className="mr-2" style={{objectFit: "cover", maxWidth: "5em"}} />
            <div className="text-xl" style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{props.name}</div>
        </div>
    )
}

export default PlaylistCard