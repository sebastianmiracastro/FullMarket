import React,{ useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import swal from 'sweetalert';
import '../../../Styles/LogIn-Styles/StyleLoginButtons/StyleLoginButtons.css'
import { UIButtonsLogin } from '../../../UI/LogIn-UI-Components/UIButtons/UIButtonsLogin';
import { useNavigate } from "react-router";

export const UIButtonsSesionLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  var dataForm = new FormData();  
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    swal({
      title: "Validando Información",
      text: "Espere un momento",
      icon: "info",
      timer: "5000000"
    })
  dataForm.append("email", email);
  dataForm.append("password", password);
  e.preventDefault();
  axios.post("https://fullmarket-provitional-backend.herokuapp.com/users/login",dataForm)

    .then((response) => {
      if(response) {
        const token = response.data.token;
        const decoded = jwtDecode(token);
        window.localStorage.setItem("token", token)
        window.localStorage.setItem("uiduser", decoded.uid)
        // swal({
        //   title: "Datos Correctos",
        //   text: "Bienvenido de nuevo",
        //   icon: "success",
        //   Button: "Acceptar",
        //   timer: "2000"
        // })
        navigate("/")
        window.setTimeout(window.location.reload(true),2000)
      }
    })
    .catch((err) => {
      swal({
        title: "Datos Incorrectos !!",
        text: "Correo o contraseña incorrectos",
        icon: "error",
        Button: "Aceptar",
        timer: "2000"
      })
    });
};
const DireccionRegister = () => {
  navigate("/UserRegister")
}
  return (
    <>
      <form onSubmit={HandleSubmit} className="cont-form-login">
        <div className="login-content">
          <div className="form">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
            ></input>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password" 
              name="password" 
              placeholder="Contraseña"
            ></input>
            <UIButtonsLogin
            type="sumbit"
            nameButtons="Iniciar Sesion"
            classButtons="btn-Applylog"
            ></UIButtonsLogin>
            <a href="foo">He olvidado mi contraseña</a>
            <div className="Line-hr" />
            <UIButtonsLogin 
            onClick={DireccionRegister} 
            type="sumbit"
            nameButtons="Crear cuenta nueva"
            classButtons="btn-Applylog" 
            ></UIButtonsLogin>
          </div>
        </div>
      </form>   
    </>  
  )
}


