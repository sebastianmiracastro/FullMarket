import React from "react";
import { UIButtons } from "../../../UI/Main-UI-Components/UIButtons/UIButtons.jsx";
import { UILogos } from "../../../UI/Main-UI-Components/UILogos/UILogos.jsx";
import { BiSearchAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import '../../../../Styles/Main-Styles/MainStyle.css';

export const LayoutHeader = () => {
  return (
    <>
      <div className="primaryHeader">
        <div className="headerLogotype">
          <UILogos />
        </div>
        <div className="primaryBtnHeader">
          <NavLink to="Register">
            {" "}
            <UIButtons
              classButtons="btn-primaryHeader"
              nameButtons="Regístrate"
            ></UIButtons>
          </NavLink>
          <NavLink to="/LogIn">
            <UIButtons
              classButtons="btn-primaryHeader"
              nameButtons="Inicia Sesión"
            ></UIButtons>
          </NavLink>
        </div>
      </div>
      <div className="spacePrincipal"></div>
      <div className="containerSearch">
        <input
          className="primarySearch"
          type="search"
          id="search"
          placeholder="   Buscar productos, categorías y más..."
        ></input>
        <div className="iconSearch">
          <BiSearchAlt />
        </div>
      </div>
    </>
  );
};
