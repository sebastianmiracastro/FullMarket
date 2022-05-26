import React, { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
//import './SingIn.css'
import { useNavigate } from "react-router";


const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate()
  var dataForm = new FormData();

  const HandleSubmit = async (e) => {
    dataForm.append("email", email);
    dataForm.append("password", password);
    e.preventDefault();
    console.log(dataForm);

    axios
      .post(
        "https://fullmarket-provitional-backend.herokuapp.com/login",dataForm)
      .then((response) => {
        const token = response.data.token;
        const decoded = jwtDecode(token);
        console.log(decoded.uid);
        window.localStorage.setItem("uiduser", decoded.uid);
        if(response){
            navigate("/LayoutDateUser")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={HandleSubmit} className="">
        <div className="content-title">
          <h2 className="title">Iniciar Sesión</h2>
        </div>
        <div className="login-content">
          <div className="form">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Correo Electronico"
            ></input>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="password"
            ></input>
            <button type="submit" className="btn">
              Iniciar Sesion{" "}
            </button>
            <a href="foo">Forgot Password?</a>
            <div className="hr" />
            {/* <NavLink to='/Login'> */}
            <button className="btn">Crear cuenta nueva</button>
            {/* </NavLink> */}
          </div>
        </div>
      </form>
    </div>
  );
};
export default SingIn;