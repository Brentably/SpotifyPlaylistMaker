import React, { useContext, useEffect } from 'react';
import {TokenContext} from '../pages/Home'

const Header = (props) => {
    let token = useContext(TokenContext)
    useEffect(()=>{
        console.log(token)
    })
    let {userData} = props

    return (
        <>
        <div className="text-white text-center fredoka-font p-2">
            <h1 className="text-2xl sm:text-4xl md:text-5xl sm:inline text-left">
                <img src={require("../icons/runnerman.svg")} alt="music notes" className="inline mr-2" style={{verticalAlign: 'baseline', height: "0.9em"}}/>
                BPM Playlist Maker
            </h1>
            <img src={userData.images[0].url} alt="profile"/> 
        </div>
        </>
    )
}


export default Header