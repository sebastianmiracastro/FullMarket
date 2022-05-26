import React from 'react'
import { LayoutRegister } from '../../../../Layout/Register-Layouts-Components/LayoutRegister/LayoutRegister'
import { UIHeaderRegister } from '../../../../UI/Register-UI-Components/UIRegister/UIHeaderRegister/UIHeaderRegister'
import '../../../../Styles/Register-Styles/StyleUIMainRegister/StyleUIMainRegister.css'

export const UIMainRegister=()=> {
  return (
    <div className='uiMainRegister'>
      <div className='uiHeaderRegister'>
        <UIHeaderRegister/>
      </div>
      <div className='layoutRegister' >
        <LayoutRegister/>
      </div> 

    </div>
  )
}
