import React from 'react'
import '../App.css';
import {  useState} from "react";
import Banner from './Banner';
import PaymentCard from './PaymentCard';
import MenuCard  from './MenuCard';
import FoodCard  from './FoodCard';
import CartItem  from './CartItem';
import SubMenuContainer from './SubMenuContainer';
import { MenuItems, Items} from "./Data";
import { useStateValue } from "./StateProvider";
function Main(){
    const [isMainData, setMainData] =useState(
        Items.filter(element=> element.itemId ==="cake01")
      );
      const [{ cart, total }, dispatch] = useStateValue();
      const [totalPrice, setTotalPrice] = useState(0);
    

      const setData = (itemId) => {
        setMainData(Items.filter((element) => element.itemId === itemId));
      };
  return (
    <>
    
     <main>
        <>
          <div className="mainContainer">
            <div className='banner'>
                 <Banner name={"aman"} discount={"20"} link={"#"}/>
                 <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
                   alt=""
                  className="deliveryPic"/>
            
            </div>
            <div className='foodContainer'>
                <div className="menuCard">
                    <SubMenuContainer name={"menu category"}/>
                </div>
                <div className='rowContainer'>
                    
                      {MenuItems &&
                         MenuItems.map((data) => (
                           <div key={data.id} onClick={() => setData(data.itemId)} >
                                <MenuCard
                                    imgSrc={data.imgSrc}
                                    name={data.name}
                                    description={data.description}
                                    isActive={data.id === "1" ? true : false}
                                />
                          </div>
                      ))}
                    </div>
                </div>
                <div className='foodItemContainer'>
                    {
                        isMainData && isMainData.map((data) =>(
                            <FoodCard 
                                key={data.id}
                                itemId={data.id}
                                imgSrc={data.imgSrc}
                                name={data.name}
                                description={data.description}
                            />
                        ))
                    }
                

                </div>
                    
            </div>
         
          <div className="rightMenu">
            <div className="paymentcardContainer">
                    <div className="paymentCard">
                        <PaymentCard/>
                    </div>
            </div>
            {!cart ? (
            <div className="addSomeItem">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                alt=""
                className="emptyCart"
              />
            </div>
          ) : (
            <div className="cartCheckOutContianer">
              <div className="cartContainer">
                <SubMenuContainer />

                <div className="cartItems">
                  {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        qty={"4"}
                        price={data.price}
                      />
                    ))}
                </div>
              </div>
              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>$ </span> {total}
                </p>
              </div>
              <button className="checkOut">Check Out</button>
            </div>
          )}
          </div>
        </>
     </main>
     </>
  )
  
}

export default Main