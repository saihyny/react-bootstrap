import React,{createContext} from "react";
const CartContext=createContext({
    items:[],
    total:0,
    Quantity:0,
    addItems:(item)=>{},
    removeItem:(id)=>{},

});
export default CartContext;