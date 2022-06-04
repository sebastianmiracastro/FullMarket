import React from "react";
import "../../Styles/Main-Styles/MainStyle.css"
import { NavLink } from "react-router-dom";
import { UIButtons } from "../../UI/Main-UI-Components/UIButtons/UIButtons";
import { UILogos } from "../../UI/Main-UI-Components/UILogos/UILogos";
import { Auth } from "../../Helpers/Auth"
import { Logout } from "../../Helpers/Logout"

export const NavBar = () => {
  
  // Función para validar que el usuario este en sesión  
  const UserInSesion = Auth(); 

  return (
    <div className="primaryHeader">
      <div className="headerLogotype">
        <UILogos />
      </div>
      <div className="primaryBtnHeader">
        { UserInSesion ? ""
        :
        <NavLink to="/UserRegister">
          {" "}
          <UIButtons
            classButtons="btn-primaryHeader"
            nameButtons="Regístrate"
          ></UIButtons>
        </NavLink>
        }

        { UserInSesion ? "" :
        <NavLink to="/LogIn">
          <UIButtons
            classButtons="btn-primaryHeader"
            nameButtons="Inicia Sesión"
          ></UIButtons>
        </NavLink>
        }

        { UserInSesion ?
          <NavLink to="/LoggedUser/MyProducts">
            <UIButtons
              classButtons="btn-primaryHeader"
              nameButtons="Mis Productos"
            ></UIButtons>
          </NavLink>
          :
          ""
        }

        { UserInSesion ?
          <a href="/" onClick={Logout} className="btn-primaryHeader">Cerrar Sesión</a>
          :
          ""
        }
      </div>
    </div>
  );
};
