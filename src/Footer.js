import React from "react";
import { Container, Row } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';

const Footer = (props) => {
  return (
    <Container style={{ backgroundColor: "black", marginTop: 3, textAlign: "center",marginBottom:"0" }} fluid>
      <Row>
        <h1 style={{ fontSize: '65px', fontStyle: 'oblique', color: 'aqua' }}>Roadside</h1>
      </Row>
      <footer>
        <ul className="social-media-icons">
          <li><a href="/"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
        </ul>
      </footer>
    </Container>
  );
}

export default Footer;
