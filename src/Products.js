import React,{useContext} from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import CartContext from "./Contexts/CartContext";

const Products = (props) => {
  const CrtContext = useContext(CartContext)
  const productsArr = [
    {
      id:1,
      title: "Colors",
      quantity:1,
      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id:2,
      title: "Black and white Colors",
      quantity:2,
      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id:3,
      title: "Yellow and Black Colors",
      quantity:3,
      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id:4,
      title: "Blue Color",
      quantity:4,
      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
 const Addfunction = (items)=>{
   const user = CrtContext.email;
    fetch(`https://crudcrud.com/api/c446ac2f986443e19f26c292b95547d5/${user}`,{
      method: "POST",
      body: JSON.stringify({
        items:items,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
  CrtContext.addItems(items)
     
    
 }
 
  return (
    <Container style={{ marginTop: 20 }}>
      <Row xs={1} >
        {productsArr.map((item,index) => (
          <Col key={index} className="d-flex justify-content-center align-items-center" style={{ marginTop: 20 }}>
            <div className="text-center">
          <h2>{item.title}</h2>
          <Image src={item.imageUrl} alt="Image 1" fluid thumbnail />
          <h3>${item.price}</h3>
          <h3>{item.quantity}</h3>
          <Button onClick={()=>{Addfunction(item)}}>Add</Button>
        </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Products;
