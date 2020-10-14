import React from 'react'
import defaultIcon from "../icons/defaultIcon.svg"

const Card = (props) => {
    // console.log(props)
    return (
        <div id="card" className="text-white flex font-nunito-semibold ellipsis items-center" style={{margin: "0.6rem"}}>
            <img src={props.images[0] ? props.images[0].url : defaultIcon} alt="{props.musicType}" className="mr-2" style={{objectFit: "cover", height: "3.4em", width: "3.4em"}} />
            <div className="ellipsis">
            <div className="text-md ellipsis">{props.name}</div>
            <div className="text-sm text-silver">by {props.owner.display_name}</div>
            </div>
        </div>
    )
}

export default Card