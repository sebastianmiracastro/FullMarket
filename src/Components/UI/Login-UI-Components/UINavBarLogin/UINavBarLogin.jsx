import React from 'react'
import logo from '../../..//../Image/Logotype-Image/Logotype.png';
import logoFullMarket from '../../../../Image/Logotype-Image/logotypeFMarket.png';
// import '../../../Styles/LogIn-Styles/StyleLoginNavbar/StyleLoginNavbar.css'

export const UINavBarLogin = () => {
  return (
    <div className='uiNavbarLogin'>
        <img className='logo' src={logo}></img>
        <img className='logoFullMarket' src={logoFullMarket}></img>
    </div>
  )
}
