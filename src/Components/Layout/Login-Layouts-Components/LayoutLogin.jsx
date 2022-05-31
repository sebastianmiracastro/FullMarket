import React from 'react'
import { UIHeaderLogin } from '../../UI/Login-UI-Components/UIHeaderLogin/UIHeaderLogin'
import { UINavBarLogin } from '../../UI/Login-UI-Components/UINavBarLogin/UINavBarLogin'
import { UIButtonsSessionLogin } from '../../UI/Login-UI-Components/UIButtonsSessionLogin/UIButtonsSessionLogin'

export const LayoutLogIn = () => {
  return (
      <>
    <div>
        <UIHeaderLogin />
        <UINavBarLogin />
        <UIButtonsSessionLogin />
    </div>
      </>
  )
}