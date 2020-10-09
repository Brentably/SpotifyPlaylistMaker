import React from "react"
import { authEndpoint, clientId, redirectUri, scopes } from "../auth/config"
// import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import styled from "styled-components"

const ModalHeader = styled.div`
text-align: center;
font-size: 2.5rem;
`
const Body = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const CenteredDiv = styled.div`
color: white;
width: 400px;

`

const ModalBody = styled.div`
word-wrap: break-word;
margin: 0 1em;
text-align: center;
`



const Login = () => {
  return (
    <Body>
      <CenteredDiv>
        <ModalHeader className="fredoka-font">BPM Playlist Maker</ModalHeader>
        <ModalBody >
          This app allows you to create playlists based on the BPM of songs to
            create perfectly customized running playlists.<br/>
          
          <Button
            variant="success"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=false`}
            className="my-3"
          >
            Connect to Spotify
          </Button>
        </ModalBody>
        </CenteredDiv>
    </Body>
  )
}

export default Login



