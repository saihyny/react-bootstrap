import React,{createContext} from "react";
const CartContext=createContext({
    items:[],
    total:0,
    Quantity:0,
    addItems:(item)=>{},
    removeItem:(id)=>{},
    isLoggedin:false,
    User:(token)=>{},
    email:'sai',
    EmailChag:(email)=>{}

});
export default CartContext;