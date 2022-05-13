import React from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import UINavbarLogin from "../../UI/UILogin/UINavbarLogin";
import UIHeaderLogin from "../../UI/UILogin/UIHeaderLogin";
import UIButtonsLogin from "../../UI/UILogin/UIButtonsLogin";

const SingIn = () => {
    return (
        <>
        <UIHeaderLogin/>
        <UINavbarLogin/>
        <UIButtonsLogin/>
        </>
    )
}
export default SingIn;