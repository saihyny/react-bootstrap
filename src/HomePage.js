import React, { useState } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Headder from "./Counter";
import Products from "./Products";
import Footer from "./Footer";
import Sidebar from "./CartBox";
import CartButton from "./CartButton";
import "./App.css";
import "./navbar.css";

const HomePage = (props) => {
  const [open, setOpenClose] = useState(false);
  let openn = open;
  const openfun = () => {
    setOpenClose(true);
  };
  const closefun = () => {
    setOpenClose(false);
  };

  return (
    <div style={{ backgroundColor: "orange" }}>
      {open && <Sidebar onClick={setOpenClose}></Sidebar>}

      <Navbar className="fixed-top" bg="dark" expand="sm" variant="dark">
        <Container>
          <Link to="/">Home</Link>
          <Link to="/Store">Store</Link>
          <Link to="/About">About</Link>
          <Link to="/Login">Login</Link>
          <CartButton onChange={setOpenClose} tru={openn}></CartButton>
        </Container>
      </Navbar>

      <div onClick={closefun}>
        <Headder></Headder>
        <Products />
      </div>
      <Button onClick={openfun}>See The Cart</Button>

      <Footer></Footer>
    </div>
  );
};
export default HomePage;
