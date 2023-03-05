import { HomeRounded } from '@mui/icons-material'
import React from 'react'
import "../App.css";
import MenuContainer from './MenuContainer';
import {
    AccountBalanceWalletRounded,
    Chat,
    Favorite,
    
    Settings,
    SummarizeRounded,
  } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className='footerMenu'>
        <ul id="menu">
            {/* prettier ignore*/}
            <MenuContainer link={'#'} icon={<HomeRounded/>} isHome/>
            {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Chat />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<AccountBalanceWalletRounded />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Favorite />} />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<SummarizeRounded />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Settings />}  />
          <div className="indicator"></div>
        </ul>
    </div>
  )
}

export default Footer