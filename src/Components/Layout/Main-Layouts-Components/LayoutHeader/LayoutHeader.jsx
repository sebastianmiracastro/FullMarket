import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import '../../../Styles/Main-Styles/MainStyle.css'

export const LayoutHeader = () => {
  return (
    <>

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
