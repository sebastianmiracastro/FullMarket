import React from 'react'
import Logotype from '../../../../Images/Logotype-Image/Logotype.png'
import logotypeFMarket from '../../../../Images/Logotype-Image/logotypeFMarket.png'
import '../../../../Styles/Register-Styles/StylesRegister/StylesRegister.css'

export const UINavbarRegister =()=> {
  return (
     <div className='uiNavbarRegister'>
        <img className="img-Logotype-Register" src={Logotype} ></img>
        <img className='img-Logotype-Register' src={logotypeFMarket} ></img>
    </div>
  )
}
