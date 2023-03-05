import React from 'react'

export const CartItem = (name, imgsrc,qty,price) => {
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
