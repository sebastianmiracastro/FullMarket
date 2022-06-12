import React from 'react';
import LoginImage from '../../../Images/LogIn-Image-Folder/imgLogin.png'
import '../../../Styles/LogIn-Styles/StyleHeaderLogin/StyleHeaderLogin.css'

export const UIHeaderLogin =() => {
  return (
    <>
    <div className="content-title">
      <h2 className="title">Iniciar Sesión</h2>
    </div>
    <img className="Login" src={LoginImage} alt="Login" />
    </>
  )
}
export default UIHeaderLogin;
