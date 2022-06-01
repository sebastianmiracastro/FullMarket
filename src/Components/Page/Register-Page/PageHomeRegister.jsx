import React from 'react'
import { UIMainRegister } from '../../UI/Register-UI-Components/UIRegister/UIMainRegister/UIMainRegister';
import { UINavbarRegister } from '../../UI/Register-UI-Components/UIRegister/UINavbarRegister/UINavbarRegister';
import '../../Styles/Register-Styles/StylesRegister/StylesRegister.css'

export const PageHomeRegister =()=> {
  return (
    <div>
      <UINavbarRegister/>
      <div className='line'></div>
      <UIMainRegister/>
      <div className='line'></div>
    </div>
  )
}
