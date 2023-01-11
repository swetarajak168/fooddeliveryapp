import React from 'react'
import '../App.css';
import { AddRounded} from "@mui/icons-material";
function FoodCard({imgSrc, name, description,itemId}) {
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
                <i className='addtoCart'><AddRounded/></i>
            </div>
         </div>
        
    </div>
  )
}

export default FoodCard;