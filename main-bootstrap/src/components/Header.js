import React from 'react';


const Header = () => {
    return (
        <>
        <div className="text-white text-center fredoka-font p-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl hidden sm:inline">
                <img src={require("../Icons/runnerman.svg")} alt="music notes" className="inline mr-2" style={{verticalAlign: 'baseline', height: "0.9em"}}/>
                BPM Playlist Maker
            </h1>
        </div>
        </>
    )
}


export default Header