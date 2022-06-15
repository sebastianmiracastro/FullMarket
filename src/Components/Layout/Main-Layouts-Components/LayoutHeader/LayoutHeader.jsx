import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import '../../../Styles/Main-Styles/MainStyle.css'

export const LayoutHeader = ({event}) => {
  return (
    <>
      <div className="spacePrincipal"></div>
      <div className="containerSearch">
        <input
        onChange={event}
          className="primarySearch"
          type="search"
          id="search"
          placeholder="   Buscar productos, categorías y más..."
        ></input>
      </div>
    </>
  );
};
