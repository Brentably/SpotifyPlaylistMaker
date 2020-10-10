import React, { useContext, useEffect } from 'react';


const Header = (props) => {
    const {userData} = props

    return (
        <>
        <div className="text-white text-center text-2xl sm:text-4xl md:text-5xl fredoka-font p-2">
            
                <img src={require("../icons/runnerman.svg")} alt="running / music logo" className="inline mr-2" style={{verticalAlign: 'baseline', height: "0.9em"}}/>
                BPM Playlist Maker
            
                <img src={userData.images[0].url} alt="profile" className="inline ml-2" style={{verticalAlign: 'baseline', maxWidth: "43.19px", maxHeight: "0.9em", width: "0.9em", objectFit: "cover", borderRadius: "50%"}}/> 
        </div>
        </>
    )
}


export default Header