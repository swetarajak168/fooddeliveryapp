import React from 'react'
import '../App.css';
import { ChevronRightRounded } from "@mui/icons-material";
function SubMenuContainer({name}) {
  return (
    <div className='subMenuContianer'>
        <h3>{name}</h3>
        <div className="viewAll">
        <p>View All</p>
        <i>
          <ChevronRightRounded />
        </i>
      </div>
    </div>
  )
}

export default SubMenuContainer