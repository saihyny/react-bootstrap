import React from 'react'
import Headder from './Counter'
import Footer from './Footer'
import { Container, Navbar, Button } from "react-bootstrap";
function Store() {
  return (
    <>
  
    <div style={{ backgroundColor: "orange",marginBottom:0 }}>
        <Navbar className="fixed-top" bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/Store">Store</Navbar.Brand>
          <Navbar.Brand href="/About">About</Navbar.Brand>
        </Container>
      </Navbar>
      <Headder/>
      <h1 style={{textAlign:'center' , fontSize:'300px'}}
      >THIS IS STORE</h1>
    <Footer/>
    </div>
    </>
  )
}

export default Store