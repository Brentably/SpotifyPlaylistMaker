import React from 'react';
// import MusicNote from '../Icons/MusicNotes';
// import RunningMan from '../Icons/RunningMan';


const Header = () => {
    return (
        <>
        <div className="bg-gray-700 text-center fredoka-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="">
            
            <h1 className="inline pt-10">
                <img src={require("../Icons/RunningMan.png")} alt="music notes" className="inline icons mx-4" />
                BPM Playlist Maker
                <img src={require("../Icons/MusicNotes.png")} alt="music notes" className="inline icons mx-4" />
            </h1>
            
            </span>
        </div>
        </>
    )
}


export default Header