import React from 'react';
// import MusicNote from '../Icons/MusicNotes';
// import RunningMan from '../Icons/RunningMan';


const Header = () => {
    return (
        <>
        <div className="text-center fredoka-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-green-800">

            
            <h1 className="inline pt-10">
                <img src={require("../Icons/RunningMan.png")} alt="music notes" className="inline icons mx-4" />
                BPM Playlist Maker
                <img src={require("../Icons/MusicNotes.png")} alt="music notes" className="inline icons mx-4" />
            </h1>
            

        </div>
        </>
    )
}


export default Header