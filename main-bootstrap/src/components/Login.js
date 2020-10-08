import React from "react"
import { authEndpoint, clientId, redirectUri, scopes } from "../auth/config"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



const Login = () => {
  return (
    <>
    <Modal show={true} centered className="">
      <Modal.Header className="fredoka-font bg-dark">BPM Playlist Maker</Modal.Header>
      <Modal.Body>
        This app allows you to create playlists based on the BPM of songs to
        create perfectly customized running playlists.
      
        <a
        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
          "%20"
          )}&response_type=token&show_dialog=false`}
          >
        Connect to Spotify
      </a>
      </Modal.Body>
    </Modal>
    </>
  )
}

export default Login
