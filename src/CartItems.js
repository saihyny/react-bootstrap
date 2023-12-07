import React, { useContext,useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import CartContext from "./Contexts/CartContext";
import "./CartItems.css";

const CartItems = () => {
   const [userDetails,setUserData]=useState([])
  const CrtContext = useContext(CartContext);
  const user = CrtContext.email;
  let userData
  useEffect(()=>{
    fetch(`https://crudcrud.com/api/c446ac2f986443e19f26c292b95547d5/${user}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the response body as JSON
    })
    .then((data) => {
      // Use the data here
       userData  = data;
       setUserData(data)
    })
  })


 
  
  return (
    <Container style={{ marginTop: 25 }}>
      <Row xs={1}>
        {userDetails && userDetails.map((item, index) => (
          <Col key={index} className="d-flex align-items-center">
            <div className="small-image" style={{ textAlign: "left" }}>
              <Image src={item.items.imageUrl} alt="Image 1" fluid thumbnail />
            </div>
            <h6>{item.items.title}</h6>
            <h8>Price = ${item.items.price}</h8>
            <h8>Quantity ={item.items.quantity}</h8>

            <Button>Add</Button>
            <Button>Remove</Button>
            {index < CrtContext.items.length - 1 && (
              <div className="horizontal-line"></div>
            )}
          </Col>
        ))}
      </Row>
      <div style={{ textAlign: "center" }}>
        {CrtContext.total>0 && <Button onClick={()=>{alert('thank you  for order')}}>Order Now</Button>}
        <h3>Total = ${CrtContext.total}</h3>
      </div>
    </Container>
  );
};

export default CartItems;
