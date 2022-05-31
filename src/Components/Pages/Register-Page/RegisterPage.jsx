import React from 'react';
import { UIMainRegister } from '../../UI/Register-UI-Components/UIMainRegister/UIMainRegister';
import { UINavBarRegister } from '../../UI/Register-UI-Components/UINavBarRegister/UINavBarRegister';
// import '../../Styles/Register-Styles/StylePageHomeRegister/StylePageHomeRegister.css'

export const RegisterPage = () => {
  return (
    <div>
      <UINavBarRegister/>
      <div className='line'></div>
      <UIMainRegister/>
      <div className='line'></div>
    </div>
  )
}
