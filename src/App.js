import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage";

import "./App.css";
import "./navbar.css";
import HomePage from "./HomePage";
import CartContextProvider from "./Contexts/CartContextProvider";
import Store from "./Store";
import AuthForm from "./Login/AuthForm";
import CartItems from "./CartItems";
const Router = createBrowserRouter([
  { path: "/About", element: <AboutPage></AboutPage> },
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/Store",
    element: <Store />,
  },
  {
    path: "/Login",
    element: <AuthForm />,
  },
  {
    path: '/Cart',
    element: <CartItems/>
  }
]);
function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={Router}>
        <HomePage>
          <Link to="/"></Link>
          <Link to="/Store"></Link>
          <Link to="/Aboutss"></Link>
          <Link to="/Login"></Link>
        </HomePage>
      </RouterProvider>
    </CartContextProvider>
  );
}

export default App;
