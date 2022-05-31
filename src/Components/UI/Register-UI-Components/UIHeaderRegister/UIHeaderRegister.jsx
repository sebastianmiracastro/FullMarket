import React from 'react';
import RegisterImage from '../../../../Image/Register-Image/RegisterImage.png';

export const UIHeaderRegister =()=> {
  return (
    <div className='UiheaderRegister'> 
      <div className='registerTexts'>
        <p className='textRegisters' > REGISTRATE AQUÍ</p>
      </div>
        <div className='registerText'>
        <p className='textRegister'>REGISTRATE AQUÍ TOTALMENTE GRATIS</p></div>
      <img className='registerImg' src={RegisterImage} ></img>
    </div>
  )
}