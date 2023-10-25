import React from "react"
import { Button } from "react-bootstrap"

const CartButton = (props)=>{
    const sidebarfn = ()=>{
        props.onChange(true)
    }
    return (
        <Button onClick={sidebarfn}>
            Cart-
            <span>0</span>
        </Button>
    )
}
export default CartButton;