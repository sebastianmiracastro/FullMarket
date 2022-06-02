import React from 'react';
import RegisterImage from '../../../../Images/Register-Image-Folder/RegisterImage.png';
import '../../../../Styles/Register-Styles/StylesRegister/StylesRegister.css'

export const UIHeaderRegister =()=> {
  return (
    <div className='UiheaderRegister'> 
    <div className='registerTexts'>
        <p className='textRegisters' > REGISTRESE AQUÍ</p>
      </div>
      <img className='registerImg' src={RegisterImage} ></img>
      <div className='registerText'>
        <p className='textRegister'>REGISTRESE AQUÍ TOTALMENTE GRATIS</p>
      </div>
    </div>
  )
}
