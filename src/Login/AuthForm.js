import { useState, useRef, useContext } from "react";
import {Navigate} from 'react-router-dom'
import classes from "./AuthForm.module.css";
import CartContext from "../Contexts/CartContext";

const AuthForm = () => {
  const USERloginDedatail= localStorage.getItem('token')
  const [isLogin, setIsLogin] = useState(USERloginDedatail);
  const [loggedin , setLoggedin] = useState(USERloginDedatail);
  const CrtContext = useContext(CartContext)
  const email = useRef();
  const password = useRef();
  
 
  if(loggedin){
    localStorage.setItem('token',true)
    CrtContext.User(true)
    const cleanedEmail = email.current.value.replace(/[@.]/g, '');
    CrtContext.EmailChag(cleanedEmail)
  
   return <Navigate to='/Cart'/>
   
  }
 

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const Email = email.current.value;
    const Password = password.current.value;
   
    let URL;
    if (isLogin) {
      URL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAFi-B6uTTvM5DeigNJG7f4pDAADnDxI2w";
    } else {
      URL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAFi-B6uTTvM5DeigNJG7f4pDAADnDxI2w";
    }

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        email: Email,
        password: Password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "authentication faild";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
       
        setLoggedin(true)
        // window.location.replace('/profile')
       
       
      })
      .catch((err) => {
        alert(err.message);
      });
  };
 const details = <>
     <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={email} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={password} type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>  
 </>
    console.log(loggedin)
  return (
    
    <section className={classes.auth}>
      {loggedin ? <h2 style={{color:'white'}}>you are already Logged in</h2> : details}
      
    </section> 
  ) 
};

export default AuthForm;
