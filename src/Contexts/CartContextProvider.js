import React,{useReducer,useState} from "react";
import CartContext from "./CartContext";
const CartContextProvider = (props)=>{
    // const theToken = localStorage.getItem('token')
   const [isLogged,setIsLogin]= useState(false)
   const ChechUserFn=(token)=>{
    
      if(token){
        localStorage.setItem('token',true)
        setIsLogin(true)
      }
   }
  
  
    const defaultState = {
        items:[],
        total:0,
        Quantity:0,
    }
    const ReducerFu = (state,action)=>{
       
        if(action.type==='add')
        {
            
            let updateditems;
            let updatedtotal;
            let updatedQuant;
            const ExistingItem = state.items.findIndex((item) => {
                return item.id === action.item.id;
              });
         
            if(ExistingItem!==-1)
            {
                
                updateditems=state.items;
                updatedtotal=state.total;
                updatedQuant=state.Quantity;
                alert('item already in your cart')
                return{
                    items:updateditems,
                    total:updatedtotal,
                } 
            }
            if(state.items.length===0)
            {
              
                updateditems=state.items.concat(action.item)
                updatedtotal=Number(action.item.price);
                updatedQuant=Number(action.item.quantity)
               
            }
            else
            {
     
                updateditems=state.items.concat(action.item)
                updatedtotal=state.total+Number(action.item.price);
                updatedQuant=state.Quantity+Number(action.item.quantity)
            }
            return{
                items:updateditems,
                total:updatedtotal,
                Quantity:updatedQuant,
            }
        }
        return defaultState;
    }
    const AddItems = (item)=>{
       DispatchFn({type:'add',item:item})
    }
    const RemoveItem = (id)=>{
       DispatchFn({type:'remove',id:id})
    }
    const [state,DispatchFn]=useReducer(ReducerFu,defaultState)
    const CrtContext = {
        items:state.items,
        total:state.total,
        Quantity:state.Quantity,
        addItems:AddItems,
        removeItem:RemoveItem,
        isLoggedin:isLogged,
        User:ChechUserFn
    }
    console.log(CartContext.isLoggedin)
    
    return (
      <CartContext.Provider value={CrtContext}>
        {props.children}
      </CartContext.Provider>
    )
}
export default CartContextProvider;