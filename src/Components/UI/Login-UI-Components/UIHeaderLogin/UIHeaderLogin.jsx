import React from 'react';
import LoginImage from '../../../../Image/Login-Image/imgLogin.png';
// import '../../../Styles/LogIn-Styles/StyleHeaderLogin/StyleHeaderLogin.css'

export const UIHeaderLogin =() => {
  return (
    <>
      <img className="Login" src={LoginImage} alt="Login" />
        <div className="content-title">
          <h2 className="title">Iniciar Sesión</h2>
        </div>
    </>
  )
}
