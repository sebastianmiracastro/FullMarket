import React from 'react'
import Logotype from '../../../../Image/Logotype-Image/Logotype.png';
import logotypeFMarket from '../../../../Image/Logotype-Image/logotypeFMarket.png';

export const UINavBarRegister =()=> {
  return (
     <div className='uiNavbarRegister'>
        <img className="logo" src={Logotype} ></img>
        <img className='logotypeFMarket' src={logotypeFMarket} ></img>

    </div>
  )
}