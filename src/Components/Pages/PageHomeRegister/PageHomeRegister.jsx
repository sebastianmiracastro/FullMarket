import React from 'react'
import {UIMainRegister} from '../../../Components/UI/UIRegister/UIMainRegister/UIMainRegister';
import { UINavbarRegister } from '../../UI/UIRegister/UINavbarRegister/UINavbarRegister';
import StylePageHomeRegister from '../../../Styles/StyleRegister/StylePageHomeRegister/StylePageHomeRegister.css'

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
