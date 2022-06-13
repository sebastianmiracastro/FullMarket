import React, { useEffect, useState } from 'react';
import '../../Styles/Main-Styles/MainStyle.css';
import { NavLink } from 'react-router-dom';
import { UIButtons } from '../../UI/Main-UI-Components/UIButtons/UIButtons';
import { UILogos } from '../../UI/Main-UI-Components/UILogos/UILogos';
import { Auth } from '../../Helpers/Auth';
import { Logout } from '../../Helpers/Logout';
import { HiHome } from 'react-icons/hi';
import { AiFillBell } from "react-icons/ai";
import swal from 'sweetalert';
import { useNavigate } from "react-router";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';
import { UIModalNotification } from '../../UI/Notification-UI-Component/UIModalNotification'

/* ---------------------- MODAL LOGIC ------------------------ */ 

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle(){
  const top = 50 + rand();
  const left = 50 + rand(); 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyle = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    height: 700,
    backgroundColor: theme.palette.background.paper,
    border: "0.5px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

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

  /* ---------------------- See Notification Logic ------------------------------ */

  const classes = useStyle();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false)

  const handleModalOpen = () => {
    setOpen(true)
  }

  const handleModalClose = () => {
    setOpen(false)
  }

  const body = (
    <div className='modalWindowFeatures'>
      <div style={modalStyle} className={classes.paper}>
        {<UIModalNotification /> ? <UIModalNotification /> : "Loading..."}
        <button className='btnOkModal' type="button" onClick={handleModalClose}>
        OK
      </button>
      </div>
    </div>
  );

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
        {UserInSesion && (
          <AiFillBell className='notification-icon' onClick={handleModalOpen} />
        )}
      </div>
      <Modal open={open} onClose={handleModalClose}>
        {body}
      </Modal>
    </div>
  );
};
