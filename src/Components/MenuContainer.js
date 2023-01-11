import React from 'react'
import '../App.css';
function Menucontainer({link, icon}) {
  return (
    <li>
        <a href={link}>
            <span className='icon'>{icon}</span>
        </a>
    </li>
  )
}

export default Menucontainer