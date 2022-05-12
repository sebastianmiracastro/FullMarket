import React from 'react';
import LoginImage from '../../../Image/ImageLogin/imgLogin.png';
import '../../../Styles/StyleLogin/StyleHeaderLlogin/StyleHeaderLogin.css'

const UIHeaderLogin =() => {
  return (
    <div className=''> 
        <img className="Login" src={LoginImage} alt="Login" />
        <div className="content-title">
          <h2 className="title">Iniciar Sesión</h2>
        </div>
    </div>
  )
}
export default UIHeaderLogin;
