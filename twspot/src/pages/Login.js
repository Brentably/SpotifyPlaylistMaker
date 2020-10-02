import React from 'react';
import { authEndpoint, clientId, redirectUri, scopes } from "../auth/config";


const Login = () => {
    return (
      <div className="bg-black p-5 rounded-lg text-center max-w-xs">
        <h1 className="text-white text-2xl mb-2">BPM Playlist Maker</h1>
        <h5 className="text-gray-200 text-wrap mb-4">This app allows you to create playlists based on the BPM of songs to create perfectly customized running playlists.</h5>
      <a className="btn text-white bg-green-700 hover:bg-green-800" href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=false`}>
        Connect to Spotify
      </a>
      </div>
    );
  }


export default Login