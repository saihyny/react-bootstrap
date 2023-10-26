import React,{useContext} from "react"
import { Button } from "react-bootstrap"
import CartContext from "./Contexts/CartContext"
const CartButton = (props)=>{
    const CrtContext = useContext(CartContext)
    const sidebarfn = ()=>{
        if(props.tru===true)
        {
            props.onChange(false) 
            return;
        }
        props.onChange(true)
    }
    return (
        <Button onClick={sidebarfn}>
            Cart-
            <span>{CrtContext.Quantity}</span>
        </Button>
    )
}
export default CartButton;