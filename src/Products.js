import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
const Products = (props) => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <Container style={{ marginTop: 20 }}>
      <Row xs={1} >
        {productsArr.map((item,index) => (
          <Col key={index} className="d-flex justify-content-center align-items-center" style={{ marginTop: 20 }}>
            <div className="text-center">
          <h2>{item.title}</h2>
          <Image src={item.imageUrl} alt="Image 1" fluid thumbnail />
          <h3>${item.price}</h3>
          <Button>Add</Button>
        </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Products;
