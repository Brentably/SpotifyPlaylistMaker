import React from 'react';


const Header = (props) => {
    const {userData} = props

    return (
        <>
        <div className=" text-center text-lg sm:text-xl md:text-2xl font-fredoka p-2 flex justify-between tracking-wide text-white">
                <span className="flex justify-center self-center">
                {/* <img src={require("../icons/runnerman.svg")} alt="running / music logo" className="inline mr-1 self-center" style={{verticalAlign: 'middle', height: "1.2em"}}/> */}
                BPM Playlist Maker
                </span>
                {/* pulls in the profile picture and the css just, uhhh, makes it circular and stuff */}
                
                <img src={userData.images[0].url} alt="profile" className="self-center mr-2" style={{maxHeight: "1.2em", width: "1.2em", objectFit: "cover", borderRadius: "50%"}}/> 
        </div>
        </>
    )
}


export default Header