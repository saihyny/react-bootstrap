import React,{useState} from "react";
import { Container, Navbar,Button } from "react-bootstrap";
import Headder from "./Counter";
import Products from "./Products";
import Footer from "./Footer";
import Sidebar from "./CartBox";
import CartButton from "./CartButton";
import './App.css'
function App() {
  const [open,setOpenClose]= useState(false)

  const openfun = ()=>{
    setOpenClose(true)
  }
  const closefun = ()=>{
    setOpenClose(false)
  }

  return(
    <div style={{backgroundColor:'orange'}}>
     { open && <Sidebar onClick={setOpenClose}></Sidebar>}
    <Navbar bg="dark" expand="sm" variant="dark" style={{ zIndex: 2 }}>
      <Container  >
       <Navbar.Brand href="/">Home</Navbar.Brand>
       <Navbar.Brand href="/">Store</Navbar.Brand>
       <Navbar.Brand href="/">Brand</Navbar.Brand>
       <CartButton onChange={setOpenClose}></CartButton>
      </Container>
    </Navbar>
    <div onClick={closefun}>
    <Headder style={{ zIndex: 1 }}></Headder>
    <Products/>
    </div>
    <Button onClick={openfun}>See The Cart</Button>
    <Footer></Footer>
   
  </div>
  );
 
}

export default App;
