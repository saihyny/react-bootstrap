import React, { useContext } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import CartContext from "./Contexts/CartContext";
import "./CartItems.css";

const CartItems = () => {
  const CrtContext = useContext(CartContext);
  return (
    <Container style={{ marginTop: 25 }}>
      <Row xs={1}>
        {CrtContext.items.map((item, index) => (
          <Col key={index} className="d-flex align-items-center">
            <div className="small-image" style={{ textAlign: "left" }}>
              <Image src={item.imageUrl} alt="Image 1" fluid thumbnail />
            </div>
            <h6>{item.title}</h6>
            <h8>Price = ${item.price}</h8>
            <h8>Quantity ={item.quantity}</h8>

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
