import React from 'react'
import { LayoutRegister } from '../../../Layout/LayoutRegister/LayoutRegister'
import {UIHeaderRegister} from '../../../../Components/UI/UIRegister/UIHeaderRegister/UIHeaderRegister'
import StyleUIMainRegister from '../../../../Styles/StyleRegister/StyleUIMainRegister/StyleUIMainRegister.css'

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
