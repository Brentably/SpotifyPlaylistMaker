import React from 'react'
import defaultIcon from "../icons/defaultIcon.svg"

const Card = (props) => {
    // console.log(props)
    return (
        <div className="text-white flex m-2 font-nunito-semibold ellipsis items-center">
            <img src={props.images[0] ? props.images[0].url : defaultIcon} alt="{props.musicType}" className="mr-2" style={{objectFit: "cover", height: "3.5em", width: "3.5em"}} />
            <div className="ellipsis">
            <div className="text-md ellipsis">{props.name}</div>
            <div className="text-sm text-silver">by {props.owner.display_name}</div>
            </div>
        </div>
    )
}

export default Card