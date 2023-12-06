
import Headder from './Counter'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import { Container, Navbar, Button } from "react-bootstrap";
import React,{useContext} from 'react';
import CartContext from './Contexts/CartContext';
function Store() {
  const CrtContext = useContext(CartContext)
  
  const Navigate = useNavigate();
  const details = <>
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
 const NavigateFu = ()=>{
  setTimeout(( )=>{Navigate('/Login')},2000)
  
 }
 console.log(CartContext.isLoggedin)
  return (
    <>
     {CrtContext.isLoggedin ? details : NavigateFu() }
  
   
    </> 

  )
}

export default Store