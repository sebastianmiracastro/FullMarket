import React from 'react'
import { UIHeaderLogin } from '../../../UI/LogIn-UI-Components/UIHeader/UIHeaderLogin'
import { UINavbarLogin } from '../../../UI/LogIn-UI-Components/UINavBar/UINavbarLogin'
import { UIButtonsSesionLogin } from '../../../UI/LogIn-UI-Components/UIButtonsSession/UIButtonsSesionLogin'

export const LayoutLogIn = () => {
  return (
    <div className='cont-login'>
        <UIHeaderLogin />
        <UIButtonsSesionLogin />
    </div>
  )
}
