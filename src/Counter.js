import React from "react";
import { Container, Row } from "react-bootstrap";

const Headder = props =>{
    return  <Container style={{backgroundColor:"gray", marginTop:36,textAlign:"center", } } fluid>
        <Row><h1 style={{ fontSize: '100px',fontStyle:'oblique' , color:'aqua'}}>Roadside</h1></Row>
  </Container>
}
export default Headder;