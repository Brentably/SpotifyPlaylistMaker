import React from 'react';

const auth = () => {
  
}


function App() {
  return (
    <div className="bg-black p-5 rounded-lg text-center max-w-xs">
      <h1 className="text-white text-2xl mb-2">BPM Playlist Maker</h1>
      <h5 className="text-gray-200 text-wrap mb-4">This app allows you to create playlists based on the BPM of songs to create perfectly customized running playlists.</h5>
    <button className="btn text-white bg-green-700 hover:bg-green-800" onClick={auth}>
      Connect to Spotify
    </button>
    </div>
  );
}

export default App;
