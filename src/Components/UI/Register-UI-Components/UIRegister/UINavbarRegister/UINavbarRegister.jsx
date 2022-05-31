import React from 'react'
import Logotype from '../../../../Images/Logotype-Image/Logotype.png'
import logotypeFMarket from '../../../../Images/Logotype-Image/logotypeFMarket.png'
import '../../../../Styles/Register-Styles/StylesRegister/StylesRegister.css'

export const UINavbarRegister =()=> {
  return (
     <div className='uiNavbarRegister'>
        <img className="logo" src={Logotype} ></img>
        <img className='logotypeFMarket' src={logotypeFMarket} ></img>

    </div>
  )
}
