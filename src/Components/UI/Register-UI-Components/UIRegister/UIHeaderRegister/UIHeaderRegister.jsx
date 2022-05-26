import React from 'react';
import RegisterImage from '../../../../Images/Register-Image-Folder/RegisterImage.png'
import '../../../../Styles/Register-Styles/StyleUIHeaderRegister/StyleUIHeaderRegister/StyleUIHeaderRegister.css'

export const UIHeaderRegister =()=> {
  return (
    <div className='UiheaderRegister'> 
      <div className='registerText'>
        <h1 className='textRegisters'> REGISTRATE AQUÍ</h1>
      </div>
      <img className='registerImg' src={RegisterImage} ></img>
      <div className='registerTexts'>
        <p className='textRegister'>REGISTRATE AQUÍ TOTALMENTE GRATIS PARA UNA EXCELENTE EXPERIENCIA</p>
      </div>
    </div>
  )
}
