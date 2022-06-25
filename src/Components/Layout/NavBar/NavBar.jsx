import React, { useEffect, useState } from 'react';
import '../../Styles/Main-Styles/MainStyle.css';
import { NavLink } from 'react-router-dom';
import { UIButtons } from '../../UI/Main-UI-Components/UIButtons/UIButtons';
import { UILogos } from '../../UI/Main-UI-Components/UILogos/UILogos';
import { Auth } from '../../Helpers/Auth';
import { Logout } from '../../Helpers/Logout';
import { HiHome } from 'react-icons/hi';
import { AiFillBell, AiOutlineSend } from "react-icons/ai";
import swal from 'sweetalert';
import { useNavigate } from "react-router";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';
import { UIModalNotification } from '../../UI/Notification-UI-Component/UIModalNotification'
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
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

  //AQUI ES DONDE SE ENVIA LA NOTIFICACION PARA QUE APAREZCA SIEMPRE QUE SE RECARGUE LA PAGINA
  // useEffect(() => {
  //   token &&
  //     swal({
  //       title: 'Datos Correctos',
  //       text: 'Bienvenido de nuevo',
  //       icon: 'success',
  //       Button: 'Acceptar',
  //       timer: '5000',
  //     });
  // }, [token]);

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
      <div style={modalStyle} className="cont-modal-notification">
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
        <div className="buttons-navbar">
          {UserInSesion ? (
            ''
          ) : (
            <NavLink to="/UserRegister">
              {' '}
              <UIButtons
                classButtons="btn-primaryHeader"
                nameButtons="Regístrarse"
              ></UIButtons>
            </NavLink>
          )}
          {UserInSesion ? (
            ''
          ) : (
            <NavLink to="/LogIn">
              <UIButtons
                classButtons="btn-primaryHeader"
                nameButtons="Iniciar Sesión"
              ></UIButtons>
            </NavLink>
          )}
          {UserInSesion ? (
          <>
          <AiOutlineMenu className="btn btn-primary btn-primaryHeader" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" ></AiOutlineMenu>
          <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">FullMarket</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
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
          
              {UserInSesion ? 
              <NavLink to="/">
                <HiHome className="home-icon" />
              </NavLink>
              : ''
              }

              {UserInSesion && (
                <NavLink to="/LoggedUser/AddProduct" className="nav-link">
                  <MdOutlineAddShoppingCart className="btn-Add"/>
                </NavLink>
              )}
              {UserInSesion && (
                <a>
                  <AiFillBell className='notification-icon' onClick={handleModalOpen} />
                </a>
              )}
              {UserInSesion && (
                <a>
                  <NavLink to="/LoggedUser/PrivateInformation/ChatHistory" className="nav-link">
                    <AiOutlineSend className='notification-icon' />
                  </NavLink>
                </a>
              )} 
              {UserInSesion ? (
                <a>
                  <HiOutlineLogout  onClick={()=>Logout(navigate)} className="btn-Logout"  />
                </a>
                  // <p  onClick={()=>Logout(navigate)} className="btn-Logout">Cerrar Sesión</p>
              ) : (
                ''
              )}
            </div>
          </div> 
          </>
          )
          :
          ""
          }
        </div>
      </div>
      <Modal open={open} onClose={handleModalClose}>
        {body}
      </Modal>
    </div>
  );
};
