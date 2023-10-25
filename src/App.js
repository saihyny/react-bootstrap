import React from "react";
import { Container, Navbar,Button } from "react-bootstrap";
import Headder from "./Counter";
import ButtonCart from "./CartButton";
import Products from "./Products";
import Footer from "./Footer";
function App() {
  return(
    <>
    <Navbar bg="dark" expand="sm" variant="dark">
      <Container >
       <Navbar.Brand href="/">Home</Navbar.Brand>
       <Navbar.Brand href="/">Store</Navbar.Brand>
       <Navbar.Brand href="/">Brand</Navbar.Brand>
       <ButtonCart></ButtonCart>
      </Container>
    </Navbar>
    <Headder></Headder>
    <Products/>
    <Button>See The Cart</Button>
    <Footer></Footer>
  </>
  );
 
}

export default App;
