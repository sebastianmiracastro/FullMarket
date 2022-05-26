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
  const [msgEmail,setMsgEmail] = useState("")
  const [msgPassword, setMsgPassword] = useState("")
  
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
  } 
  else {  
    swal({
      title: "Datos Incorrectos !!",
      text: "Correo o contraseña incorrectos",
      icon: "error",
      Button: "Aceptar",
      timer: "2000"
    })
  }
}
const handleCharacterEmail =()=>{
  let validationEmail =/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  let parrafo
  if(email.match(validationEmail)){
    parrafo="Información valida"
    setMsgEmail(parrafo)
  }else{
    parrafo="Información incorrecta, por favor verifiquela"
    setMsgEmail(parrafo)
  }
}
const handleCharacterPassword=()=>{
  let validationPassword= /^[a-z0-9_-]{6,18}$/
  let parrafo
  if(password.match(validationPassword)){
    parrafo="Contraseña correcta"
    setMsgPassword(parrafo)
    
  }else{
    parrafo ="Contraseña Incorrecta"
    setMsgPassword(parrafo)
  }
}
const HandleSubmit = async (e) => {

  dataForm.append("email", email);
  dataForm.append("password", password);
  e.preventDefault();

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
              onKeyUp={handleCharacterEmail}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Correo Electronico"
              required={true}
            ></input>
            <p className="msg-Alert">{msgEmail}</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password" 
              name="password" 
              placeholder="password"
              onKeyUp={handleCharacterPassword}
            ></input>
            <p className="msg-Alert" >{msgPassword}</p>
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

