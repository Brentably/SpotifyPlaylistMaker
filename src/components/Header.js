import React from 'react';


const Header = (props) => {
    const {userData} = props

    return (
        <>
        <div className="text-white text-center text-2xl sm:text-4xl md:text-5xl font-fredoka p-2 flex justify-between tracking-wide bg-black">
                <span>
                <img src={require("../icons/runnerman.svg")} alt="running / music logo" className="inline mr-2" style={{verticalAlign: 'baseline', height: "0.9em"}}/>
                BPM Playlist Maker
                </span>
                {/* pulls in the profile picture and the css just, uhhh, makes it circular and stuff */}
                
                <img src={userData.images[0].url} alt="profile" className="self-center mr-2" style={{maxWidth: "43.19px", maxHeight: "0.9em", width: "0.9em", objectFit: "cover", borderRadius: "50%"}}/> 
        </div>
        </>
    )
}


export default Header