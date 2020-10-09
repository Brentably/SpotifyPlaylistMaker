import React from 'react';


const Header = () => {
    return (
        <>
        <div className="text-white text-center">

            
            <h1 className="">
                <img src={require("../Icons/runnerman.svg")} alt="music notes" className="inline w-8" style={{verticalAlign: 'baseline'}}/>
                BPM Playlist Maker
            </h1>
            

        </div>
        </>
    )
}


export default Header