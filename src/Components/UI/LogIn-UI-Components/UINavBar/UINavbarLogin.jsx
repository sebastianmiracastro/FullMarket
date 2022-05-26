import React from 'react'
import logo from '../../../Images/Logotype-Image/Logotype.png'
import logoFullMarket from '../../../Images/Logotype-Image/logotypeFMarket.png'
import '../../../Styles/LogIn-Styles/StyleLoginNavbar/StyleLoginNavbar.css'

export const UINavbarLogin = () => {
  return (
    <div className='uiNavbarLogin'>
        <img className='logo' src={logo}></img>
        <img className='logoFullMarket' src={logoFullMarket}></img>
    </div>
  )
}

export default UINavbarLogin;
