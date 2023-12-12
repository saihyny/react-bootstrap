import React from "react";
import { createBrowserRouter, RouterProvider, Link} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import "./App.css";
import "./navbar.css";
import HomePage from "./HomePage";
import CartContextProvider from "./Contexts/CartContextProvider";
import Store from "./Store";
const Router = createBrowserRouter([
  { path: "/About", element: <AboutPage></AboutPage> },
  {
    path: "/", element:<HomePage></HomePage>
  },
  {
    path: "/Store", element:<Store/>
  }
]);
function App() {
 

  return (
    
      <CartContextProvider>
        <RouterProvider router={Router}>
       <HomePage>
          <Link href="/"></Link>
          <Link href="/Store"></Link>
          <Link href="/About"></Link>
       </HomePage>
        </RouterProvider>
        
      </CartContextProvider>
   
  );
}

export default App;
