import React from 'react'
import {RemoveRounded, AddRounded} from "@mui/icons-material";
import  { useEffect, useState } from "react";
import { actionType } from "./Reducer";
import { useStateValue } from "./StateProvider";
const CartItem = (name, imgsrc,price) => {
  const [qty, setQty] = useState(1);
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));
  const [{ cart, total }, dispatch] = useStateValue();

  useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty]);

  const updateQty = (action, id) => {
    if (action == "add") {
      setQty(qty + 1);
    } else {
      // initial state value is one so you need to check if 1 then remove it
      if (qty == 1) {
        cartItems.pop(id);
        dispatch({
          type: actionType.SET_CART,
          cart: cartItems,
        });
      } else {
        setQty(qty - 1);
        console.log(qty);
      }
    }
  };

  return (
    <div className='carditem'>
        <div className='imgBox'>
            <img src={imgsrc} alt=""/>
        </div>
        <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x{qty} </span>
          <div className="quantity">
            <RemoveRounded
              
            />
            <AddRounded
              
            />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">$</span>{" "}
        <span className="itemPriceValue">{price}</span>
      </p>
    </div>
  )
}
export default CartItem