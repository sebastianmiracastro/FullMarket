import React, {useState, useEffect} from 'react';
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { Auth } from '../../../Helpers/Auth';
import { UIButtons } from "../UIButtons/UIButtons.jsx";
import { NavLink } from "react-router-dom";
import { BsFillInfoCircleFill } from "react-icons/bs";
import swal from 'sweetalert';
import axios from "axios";
import Skeleton from '@mui/material/Skeleton';

// ---- MaterialUI modal window setting ---- //
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
    position: "absolute",
    width: 400,
    width: 600,
    height: 730,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    border: "0.5px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    },
})); 
 // ---- //

export const UICategories = ({
    uidProductCategory,
    typeProductCategory,
    imgProductCategory,
    categoryProduct,
    nameProductCategory,
    conditionProductCategory,
    descriptionProductCategory,
    availabilityProductCategory,
    dateProductCategory,
    cityProductCategory
}) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const [data, setData] = React.useState(null);
    const [isloading, setIsLoading] = React.useState(false);
  
    /* -------------------- InfoUser (useState) ----------------------- */
    const [uidUserApply, setUidUserApply] = useState('')
    const [nameUserApply, setNameUserApply] = useState('')
  
    /* ----------------------Info Product (useState) --------------------------------- */
    const [uidProductApply, setUidProductApply] = useState ('')
    const [nameProductApply, setNameProductApply] = useState('')
  
    const UserInSesion = Auth();

const handleOpen = () => {
    setOpen(true);
};
const handleClose = () => {
    setOpen(false);
};

    
  let formData = new FormData();
  const TypeNotifications = 'Aplico'

  const sendNotification = async () => {
    swal({
      title: "Enviando Notificación Al Usuario",
      text: "Espere un momento",
      icon: "info",
      timer: "7000000000"
      })
      formData.append("usersendnoti", nameUserApply)
      formData.append("userreceivernoti", uidUserApply)
      formData.append("userreceivernotiproduct", nameProductApply)
      formData.append("typenoti", TypeNotifications)
      setTimeout( async() => {
        await axios.post('https://fullmarket-provitional-backend.herokuapp.com/notification/sendnotification', formData)
        .then((res => {
          swal({
            title: "Notificacion Enviada",
            text: "Espera Una Respuesta Del Propietario",
            icon: "success",
            timer: "2500"
          })
        }))
        .catch(( err => {
          swal({
            title: "No Se Pudo Completar La Accion",
            text: "Intentalo Mas Tarde",
            icon: "error",
            timer: "2500"
          })
        }))
      }, 3000)
    }
        
  const body = (
  <div className='modalWindowFeatures'>
    <div style={modalStyle} className="makeStyles-paper-1">
      {
        isloading ? (
        <Skeleton
        animation="wave"
        width={120}
        height={50}
        />
        ) 
        :
        <h2 className='titleModalWindows' id="simple-modal-title">
          {typeProductCategory}: {nameProductCategory}
        </h2>
      }
      {
        isloading ? (
        <Skeleton
        animation="wave"
        width={120}
        height={50}
        />
        ) 
        :
        <img className='imgModalWindow' src={imgProductCategory} alt="" /> 
      }
      {
        isloading ? (
        <Skeleton
        animation="wave"
        width={120}
        height={50}
        />
        ) 
        : 
        <p className='pModalDescription'>Descripcion: {descriptionProductCategory}</p>
      }
      {
        isloading ? (
        <Skeleton
        animation="wave"
        width={120}
        height={50}
        />
        ) 
        : 
        <p className='pModalAvailability'>Disponible: {availabilityProductCategory}</p>
      }
      {
        isloading ? (
        <Skeleton
        animation="wave"
        width={120}
        height={50}
        />
        ) 
        :
        <p>{dateProductCategory}</p>
      }
      {
        isloading ? (
        <Skeleton
        animation="wave"
        width={120}
        height={50}
        />
        ) 
        :
        <p>{cityProductCategory}</p>
      }
      <button className='btnOkModal' type="button" onClick={handleClose}>
          OK
      </button>
    </div>
  </div>
  );


return (
    <>
    <div className='container-card'>
        <div className="header-Card">
            <div className="iconInfo">
                {isloading ? (
                <Skeleton
                variant="circular"
                animation="wave"
                width={25}
                height={25}
                />
                )  
                : 
                <BsFillInfoCircleFill onClick={handleOpen} />
                }
            </div>
            {isloading ? (
            <Skeleton
            animation="wave"
            width={120}
            height={50}
            />
            ) 
            : 
            <h1>{typeProductCategory}</h1>
            }
        </div>
        <div className="body-Card">
            <div className="img-Card">
                {isloading ? (
                <Skeleton
                variant="rectangle"
                animation="wave"
                width={130}
                height={110}
                />
                ) 
                : 
                <img
                    src={imgProductCategory}
                    className="img-Card"
                    alt={nameProductCategory}
                ></img>
                }
            </div>
            {isloading ? (
            <Skeleton
            animation="wave"
            width={150}
            height={35}
            />
            ) 
            : 
            <h2>{nameProductCategory}</h2>  
            }
            {isloading ? (
            <Skeleton
            animation="wave"
            width={150}
            height={35}
            />
            ) 
            :
            <p>Estado: {conditionProductCategory}</p>
            }
            {UserInSesion ? ( 
            <div className="apply-Product">
                <UIButtons
                    classButtons="btn-Apply"
                    nameButtons="Aplicar"
                    onClick={sendNotification}
                ></UIButtons>
            </div>
            ) : (
            <div className="apply-Product">
                <NavLink to="/LogIn" className="">
                    <UIButtons
                    classButtons="btn-Apply"
                    nameButtons="Aplicar"
                    ></UIButtons>
                </NavLink>
            </div>
            )}
        </div>
        <div className="modal-window-products">
            <Modal open={open} onClose={handleClose}>
                {body}
            </Modal>
        </div>
    </div>
    </>
)}
