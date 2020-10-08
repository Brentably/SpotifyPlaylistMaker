import React from 'react';
// import MusicNote from '../Icons/MusicNotes';
// import RunningMan from '../Icons/RunningMan';


const Header = () => {
    return (
        <>
        <div className="">

            
            <h1 className="">
                <img src={require("../Icons/RunningMan.png")} alt="music notes" className="" />
                BPM Playlist Maker
                <img src={require("../Icons/MusicNotes.png")} alt="music notes" className="" />
            </h1>
            

        </div>
        </>
    )
}


export default Header