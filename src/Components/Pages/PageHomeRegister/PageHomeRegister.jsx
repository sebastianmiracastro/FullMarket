import React from 'react'
import UIMainRegister from '../../../Components/UI/UIRegister/UIMainRegister/UIMainRegister'
import UINavbarRegister from '../../../Components/UI/UIRegister/UINavbarRegister/UINavbarRegister'

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
