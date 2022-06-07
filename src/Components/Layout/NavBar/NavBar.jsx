import React, { useEffect } from 'react';
import '../../Styles/Main-Styles/MainStyle.css';
import { NavLink } from 'react-router-dom';
import { UIButtons } from '../../UI/Main-UI-Components/UIButtons/UIButtons';
import { UILogos } from '../../UI/Main-UI-Components/UILogos/UILogos';
import { Auth } from '../../Helpers/Auth';
import { Logout } from '../../Helpers/Logout';
import { HiHome } from 'react-icons/hi';
import swal from 'sweetalert';
import { useNavigate } from "react-router";

export const NavBar = () => {
  // Función para validar que el usuario este en sesión
  const navigate = useNavigate();
  const UserInSesion = Auth();
  const token = localStorage.getItem('uiduser');

  useEffect(() => {
    token &&
      swal({
        title: 'Datos Correctos',
        text: 'Bienvenido de nuevo',
        icon: 'success',
        Button: 'Acceptar',
        timer: '5000',
      });
  }, [token]);
  return (
    <div className="primaryHeader">
      <div className="headerLogotype">
        <UILogos />
      </div>
      <div className="primaryBtnHeader">
        {/* <NavLink to="/">
          {" "}
          <UIButtons
            classButtons="btn-primaryHeader"
            nameButtons="Inicio"
          ></UIButtons>
        </NavLink> */}

        <NavLink to="/">
          <HiHome className="home-icon" />
        </NavLink>
        {UserInSesion ? (
          ''
        ) : (
          <NavLink to="/UserRegister">
            {' '}
            <UIButtons
              classButtons="btn-primaryHeader"
              nameButtons="Regístrate"
            ></UIButtons>
          </NavLink>
        )}
        {UserInSesion ? (
          ''
        ) : (
          <NavLink to="/LogIn">
            <UIButtons
              classButtons="btn-primaryHeader"
              nameButtons="Inicia Sesión"
            ></UIButtons>
          </NavLink>
        )}

        {UserInSesion ? (
          <NavLink to="/LoggedUser/MyProducts">
            <UIButtons
              classButtons="btn-primaryHeader"
              nameButtons="Mis Productos"
            ></UIButtons>
          </NavLink>
        ) : (
          ''
        )}

        {UserInSesion ? (
        
            <p  onClick={()=>Logout(navigate)} className="btn-Logout">Cerrar Sesión</p>
          
        ) : (
          ''
        )}
        {UserInSesion && (
          <NavLink to="/LoggedUser/AddProduct">
            <p className="btn-Add">Agregar Producto</p>
          </NavLink>
        )}
      </div>
    </div>
  );
};
