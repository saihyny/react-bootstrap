import React from "react";
import { Nav } from "react-bootstrap";
import './App.css'
import CartItems from "./CartItems";
const CartBox = (props) => {

    const closefn = ()=>{
        props.onClick(false)
    }
    return (
      <div className="sidebar">
        <div className="sidebar-content">
        <button className="Buttoncss" onClick={closefn}>close</button>
        <Nav className="flex-column" >
          <CartItems></CartItems>
        </Nav>
        </div>
      </div>
    );
  };
export default CartBox;