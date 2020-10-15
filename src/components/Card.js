import React from 'react'
import defaultIcon from "../icons/defaultIcon.svg"

const Card = (props) => {
    return (
        <div id="card" className="text-white flex font-nunito-semibold ellipsis items-center ml-2" style={{margin: "0.6rem"}}>
            {/* allows whatever component that is rendering the card to just put default as a prop if there is no image there */}
            <img src={props.imgSrc === "default" ? defaultIcon : props.imgSrc} alt={props.type} className="mr-2" style={{objectFit: "cover", height: "3.4em", width: "3.4em"}} />
            <div className="ellipsis">
            <div className="text-md ellipsis">{props.name}</div>
            <div className="text-sm text-silver">{props.owner}</div>
            </div>
        </div>
    )
}

export default Card