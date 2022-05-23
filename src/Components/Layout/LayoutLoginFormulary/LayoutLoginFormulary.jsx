import React from "react";
// import jwtDecode from "jwt-decode";
// import axios from "axios";
import UINavbarLogin from "../../UI/UILogin/UINavbarLogin";
import UIHeaderLogin from "../../UI/UILogin/UIHeaderLogin";
import { UIButtonsSesionLogin } from "../../UI/UILogin/UIButtonsSesionLogin";

const SingIn = () => {
    return (
        <>
        <div>
            <UIHeaderLogin/>
            <UINavbarLogin/>
            <UIButtonsSesionLogin />
        </div>
        </>
    )
}
export default SingIn;