import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

function App() {
  return (
    <Container className="border bg-black text-white bg-dark">
      <Row>
        <Col className="text-center text-wrap ">
        <h5>This app lets you create playlists based on the BPM of songs. It's great for creating your own personalized running playlists.</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
