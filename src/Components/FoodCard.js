import React from 'react'
import '../App.css';
import { AddRounded} from "@mui/icons-material";
function FoodCard({imgSrc, name, description,itemId}) {
  const [isCart, setCart] = useState(null);
  useEffect(() => {
    if (isCart) {
      cartData.push(isCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [isCart]);

  return (
    <div classs="foodCard" id={itemId}>
        <div class="imgBox">
            <img src={imgSrc} alt="" className='itemImg'/>

        </div>
         <div className="itemContent">
            <h3 className="itemName">{name}</h3>
            <div className="bottom">
                <div className='desc'>
                        <span>{description}</span>
                </div>
                <i
            className="addToCart"
            onClick={() => {
              setCart(Items.find((n) => n.id === itemId));
            }}
          >
            <AddRounded />
          </i>
            </div>
         </div>
        
    </div>
  )
}

export default FoodCard;