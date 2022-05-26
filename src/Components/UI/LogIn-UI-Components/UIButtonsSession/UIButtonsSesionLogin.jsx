import React,{ useState} from "react";
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
    navigate("/")
   
  } 
  else {  
    swal({
      title: "Datos Incorrectos !!",
      text: "Correo o contraseña incorrectos",
      icon: "error",
      Button: "Aceptar",
      timer: "2000"
    })
    navigate("/")
  }
}
const HandleSubmit = async (e) => {

  dataForm.append("email", email);
  dataForm.append("password", password);
  e.preventDefault();
  console.log(dataForm);

  axios.post("https://fullmarket-provitional-backend.herokuapp.com/login",dataForm)
    .then((response) => {
      const token = response.data.token;
      const decoded = jwtDecode(token);
      window.localStorage.setItem("token", token)
      window.localStorage.setItem("uiduser", decoded.uid)
    })
    .catch((err) => {
      console.log(err);
    });
};

  return (
    <>
        <form onSubmit={HandleSubmit} className="">
        <div className="login-content">
          <div className="form">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Correo Electronico"
              required={true}
            ></input>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password" 
              name="password" 
              placeholder="password"
            ></input>
            <UIButtonsLogin
            type="sumbit"
            nameButtons="Iniciar Sesion"
            classButtons="btn-Applylog"
            onClick={VerifyCard}
            ></UIButtonsLogin>
            <a href="foo">Forgot Password?</a>
            <div className="hr" />
            <button className="btn-Applylog">Crear cuenta nueva</button>
          </div>
        </div>
      </form>   
    </>
  )
}

