import React from 'react'
import logo from '../../../../Image/Logo-FullMarket/logo.png'
import logotypeFMarket from '../../../../Image/LogotypeFMarket/logotypeFMarket.png'
import StyleUINavbarRegister from '../../../../Styles/StyleRegister/StyleUINavbarRegister/StyleUINavbarRegister.css'

export const UINavbarRegister =()=> {
  return (
     <div className='uiNavbarRegister'>
        <img className="logo" src={logo} ></img>
        <img className='logotypeFMarket' src={logotypeFMarket} ></img>

    </div>
  )
}
