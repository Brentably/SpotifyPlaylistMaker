import React from 'react'
import {useHistory} from "react-router-dom"

// COMPONENT INFO:
// When using Card 
// path is the path to route to when card is clicked
// endpoint is the endpoint that gets passed along is location.state to hydrate the page that card opens
// imgClass is if you want to style your image, if you're using svg or something like that

const Card = (props) => {
    const {path, header, subheader, img, endpoint = null} = props
    let history = useHistory()
    

    // when you click on a playlist / album / etc, this routes you to a generic playlist / album / etc, page with state holding the endpoint for that page, so you can dynamically render it
    function handleClick() {
        if(!endpoint) return
        history.push(`/${path}`, {endpoint: endpoint})
    }
    
    return (
        <div id="card" className="text-white flex font-nunito-semibold ellipsis items-center ml-2" style={{margin: "0.6rem"}} onClick={handleClick}>
            {/* allows whatever component that is rendering the card to just put default as a prop if there is no image there */}
            <img src={img} alt={path} className={'mr-2'} style={{objectFit: "cover", height: "3.4em", width: "3.4em"}} loading="lazy" />
            <div className="ellipsis">
            <div className="text-md ellipsis">{header}</div>
            <div className="text-sm text-silver">{subheader}</div>
            </div>
        </div>
    )
}

export default Card