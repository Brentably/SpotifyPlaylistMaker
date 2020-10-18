import React from 'react'
import defaultIcon from "../icons/defaultIcon.svg"
import {useHistory} from "react-router-dom"

// COMPONENT INFO:
// When using Card. 

const Card = (props) => {
    const {path, header, subheader, imgSrc, endpoint} = props
    let history = useHistory()

    // when you click on a playlist / album / etc, this routes you to a generic playlist / album / etc, page with state holding the endpoint for that page, so you can dynamically render it
    function handleClick() {
        history.push(`/${path}`, {endpoint: endpoint})
    }
    
    return (
        <div id="card" className="text-white flex font-nunito-semibold ellipsis items-center ml-2" style={{margin: "0.6rem"}} onClick={handleClick}>
            {/* allows whatever component that is rendering the card to just put default as a prop if there is no image there */}
            <img src={imgSrc === "default" ? defaultIcon : imgSrc} alt={path} className="mr-2" style={{objectFit: "cover", height: "3.4em", width: "3.4em"}} />
            <div className="ellipsis">
            <div className="text-md ellipsis">{header}</div>
            <div className="text-sm text-silver">{subheader}</div>
            </div>
        </div>
    )
}

export default Card