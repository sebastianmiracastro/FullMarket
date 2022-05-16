import React from 'react'
import '../../../Styles/StyleLogin/StyleLoginButtons/StyleLoginButtons.css'
import { UIButtonsLogin } from "../../UI/UILogin/UIButtonsLogin";
import swal from 'sweetalert';

export const UIButtonsSesionLogin = () => {

  const VerifyCard= () => {
    if (window.localStorage.getItem('uiduser') !== null
    && window.localStorage.getItem('uiduser')
  ) {
    swal({
      title: "Datos Correctos",
      text: "Bienvenido de nuevo",
      icon: "success",
      Button: "Acceptar",
      timer: "2000"
    })
    // navigate("/LayoutCards")
  } 
  else {
    swal({
      title: "Datos Incorrectos !!",
      text: "Correo o contraseña incorrectos",
      icon: "error",
      Button: "Aceptar",
      timer: "2000"
    })
    // navigate("/")
  }}
  return (
      <UIButtonsLogin 
      class
      Buttons="btn-Apply"
      nameButtons="Iniciar Sesion"
      onClick={VerifyCard}
      ></UIButtonsLogin> 
  )
}

