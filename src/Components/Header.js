
import '../App.css';
import React from 'react';
import {} from "@mui/material";
import {  useEffect} from "react";
import {SearchRounded, ShoppingCartRounded, BarChart} from "@mui/icons-material";
function Header() {
    useEffect(() => {
        const toggleIcon = document.querySelector(".toggleMenu");
        toggleIcon.addEventListener("click", () => {
          document.querySelector(".rightMenu").classList.toggle("active");
        });
      }, []);
  return (
    <header>
        <img src = "assets/cake1.jpeg" 
        alt = ""
        className='logo'/>
        <div className="inputBox">
             <SearchRounded className="searchicon"/>
             <input type ="text"  placeholder='Search'/>
        </div>

        <div className="shoppingCart">
            <ShoppingCartRounded className = "cart"/>
            <div className="cart_content">
                <p>2</p>
            </div>
        </div>
        <div className="profileContainer">
            <div className='imgBox'>
                <img src="" alt="" className="profilePic"/>
            </div>
            <h2 className="userName">ldhv</h2>
        </div>
        <div className='toggleMenu'>
             <BarChart className="toggleIcon"/>
        </div>
    </header>
  )
}

export default Header