import React from 'react';
import RegisterImage from '../../../../Images/Register-Image-Folder/RegisterImage.png';
import '../../../../Styles/Register-Styles/StylesRegister/StylesRegister.css'

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
