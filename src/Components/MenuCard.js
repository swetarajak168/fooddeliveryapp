import React from 'react'
import '../App.css';
import { ChevronRightRounded } from "@mui/icons-material";
function MenuCard({ imgSrc, name, isActive , description}) {
    return (
      <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
            <div className="imgBox">
               <img src={imgSrc} alt="" />
            </div>
            <h3>{name}</h3>
            <span>{description}</span>
            <i className="loadMenu">
            <ChevronRightRounded />
            </i>
      </div>
    );
  }

export default MenuCard