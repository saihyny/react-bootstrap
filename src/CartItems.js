import React,{useState} from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const CartItems = () => {
  let cartElements = [
    {
     id:1,
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
        id:2,
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
        id:3,
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];
  const removFn = (id)=>{
   const updated =  cartElements.filter((item)=>{
        return item.id !== id
    })
  
  
  }
  return (
    <Container style={{ marginTop: 20 }}>
      <Row xs={1}>
        {cartElements.map((item, index) => (
          <Col
            key={index}
            className="d-flex justify-content-center align-items-center"
            style={{ marginTop: 20 }}
          >
            <div className="text-center">
              <h2>{item.title}</h2>
              <Image src={item.imageUrl} alt="Image 1" fluid thumbnail />
              <h3>${item.price}</h3>
              <h3>{item.quantity}</h3>
              <Button>Add</Button>
              <Button onClick={removFn(item.id)}>Remove</Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CartItems;
