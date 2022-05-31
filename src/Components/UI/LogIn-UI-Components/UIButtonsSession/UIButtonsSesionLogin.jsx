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

  function ShowMeessageCorrect() {
    swal({
      title: "Datos Correctos",
      text: "Bienvenido de nuevo",
      icon: "success",
      Button: "Acceptar",
      timer: "2000"
    })
<<<<<<< HEAD
    return navigate("/")
  }

  function ShowMeessageIncorect() {
=======
    navigate("/LoggedUser/MyProducts")
  } 
  else {  
>>>>>>> b606f18 (Register and MyProduct done#2 [30052022])
    swal({
      title: "Datos Incorrectos !!",
      text: "Correo o contraseña incorrectos",
      icon: "error",
      Button: "Aceptar",
      timer: "2000"
    })
     return navigate("/LogIn")
  }  
  
  const VerifyCard= async () => {
    
    const uidUser = await window.localStorage.getItem('uiduser')
    const response = await uidUser !== null ? ShowMeessageCorrect():ShowMeessageIncorect()
    setTimeout(uidUser,4000)
    return(response)
  //   if(window.localStorage.getItem('uiduser') !== null
  //   && window.localStorage.getItem('uiduser')
  //   ){
  //   swal({
  //     title: "Datos Correctos",
  //     text: "Bienvenido de nuevo",
  //     icon: "success",
  //     Button: "Acceptar",
  //     timer: "2000"
  //   })
  //   navigate("/")
  // } 
  // else {  
  //   swal({
  //     title: "Datos Incorrectos !!",
  //     text: "Correo o contraseña incorrectos",
  //     icon: "error",
  //     Button: "Aceptar",
  //     timer: "2000"
  //   })
  //   navigate("/LogIn")

  //  }//setTimeout(VerifyCard,4000)
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
const DireccionRegister = () => {
  navigate("/UserRegister")
}
  return (
    <>
      <form onSubmit={HandleSubmit} className="">
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
<<<<<<< HEAD
}


=======
}
>>>>>>> b606f18 (Register and MyProduct done#2 [30052022])
