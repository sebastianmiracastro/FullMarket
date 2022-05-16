import React,{ useState} from "react";
import UINavbarLogin from "../../UI/UILogin/UINavbarLogin";
import UIHeaderLogin from "../../UI/UILogin/UIHeaderLogin";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { UIButtonsSesionLogin } from "../../UI/UILogin/UIButtonsSesionLogin";


const SingIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    var dataForm = new FormData();
    
    //   const navigate = useNavigate();
    const HandleSubmit = async (e) => {
  
      dataForm.append("email", email);
      dataForm.append("password", password);
      e.preventDefault();
      console.log(dataForm);
  
      axios.post("https://fullmarket-provitional-backend.herokuapp.com/login",dataForm)
        .then((response) => {
          const token = response.data.token;
          const decoded = jwtDecode(token);
          console.log(decoded);
          console.log(token);
          window.localStorage.setItem("token", token)
          window.localStorage.setItem("uiduser", decoded.uid)
        })
        .catch((err) => {
          console.log(err);
        });
    };  
    return (
        <>
        <div>
            <UIHeaderLogin/>
            <UINavbarLogin/>
        </div>
        <from onSubmit={HandleSubmit} className="">
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
                    <UIButtonsSesionLogin className="btn-Apply" />
                    <a href="foo">Forgot Password?</a>
                    <div className="hr" />
                </div>
            </div>    
        </from>    
        </>
    )
}
export default SingIn;