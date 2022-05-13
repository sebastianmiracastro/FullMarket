import React from 'react'
import logo from '../../../Image/imageLoginNavbar/FMarket1.png'
import logoFullMakert from '../../../Image/imageLoginNavbar/FMarket2.png'
import '../../../Styles/StyleLogin/StyleLoginNabar/StyleLoginNabar.css'

export const UINavbarLogin = () => {
  return (
    <div className='uiNavbarLogin'>
        <img className='logo' src={logo}></img>
        <img className='logoFullMakert' src={logoFullMakert}></img>
    </div>
  )
}

export default UINavbarLogin;
