import React, { useEffect, useState } from "react";
import { UIButtons } from "../UIButtons/UIButtons.jsx";
import { NavLink } from "react-router-dom";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { Auth } from '../../../Helpers/Auth';
import swal from 'sweetalert';
import axios from "axios";
import Skeleton from '@mui/material/Skeleton';

// ---- MaterialUI modal window setting ---- //
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
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

export const UICards = ({
  uidProduct,
  typeProduct,
  imgProduct,
  nameProduct,
  conditionProduct,
  descriptionProduct,
  availabilityProduct,
  dateProduct,
  cityProduct,
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

  // ---- Get information of each product through its respective ID ---- //
  const featuresProduct = async () => {
    await fetch(
      `https://fullmarket-provitional-backend.herokuapp.com/products/getoneproduct/${uidProduct}`
      )
      .then((res) => res.json())
      .then((data) => {
        setUidProductApply(data.uidProduct)
        setUidUserApply(data.idOwner)
      }).catch((err) => {
        ''
      })
    };

    /* ------------ Get Name User ------------- */

    const nameUser = async () => {
      const userSend = window.localStorage.getItem('uiduser')
      await fetch(
        `https://fullmarket-provitional-backend.herokuapp.com/users/getoneuser/${userSend}`
      ).then((res) => res.json())
      .then((data) => {
        setNameUserApply(data.name)
      }).catch((err) => {
        ''
      })
    }

    /* ------------- Get Name Product -------------- */

    
    const nameProductF = async () => {
    setTimeout( async() => { 
      await fetch(
        `https://fullmarket-provitional-backend.herokuapp.com/products/getoneproduct/${uidProductApply}`
      ).then((res) => res.json())
      .then((data) => {
        setNameProductApply(data.name)
      }).catch((err) => {
        console.clear()
      })
    })
    }
    

    useEffect( ()  => {
      nameUser()
      nameProductF()
      featuresProduct();   
    });
  // ---- //
  // ------ Logic To Apply To Product ------ //

  const URLAllProducts = 'https://fullmarket-provitional-backend.herokuapp.com/products/getallproducts'

  const [products, setProducts] = useState([])


const mostrar = async () => {
   await fetch(URLAllProducts)
   .then(res => res.json())
   .then(data => {
    setProducts(data)
    setIsLoading(true)}) 
    .catch((err) => {
      ''
    })
  }
  useEffect(() => {
    mostrar()
  },[]);

  let formData = new FormData();

  const TypeNotifications = 'Aplico'

  const sendNotification = async () => {
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
      <div style={modalStyle} className={classes.paper}>
        {
          isloading ? (
          <h2 className='titleModalWindows' id="simple-modal-title">
            {typeProduct}: {nameProduct}
          </h2>
          ) 
          :
          <Skeleton
          animation="wave"
          width={120}
          height={50}
          />}
        {
          isloading ? (
          <img className='imgModalWindow' src={imgProduct} alt="" /> 
          ) 
          :
          <Skeleton
          animation="wave"
          width={120}
          height={50}
          />}
        {
          isloading ? (
          <p className='pModalDescription'>Descripcion: {descriptionProduct}</p>
          ) 
          : 
          <Skeleton
          animation="wave"
          width={120}
          height={50}
          />
        }
        {
          isloading ? (
          <p className='pModalAvailability'>Disponible: {availabilityProduct}</p>
          ) 
          : 
          <Skeleton
          animation="wave"
          width={120}
          height={50}
          />
        }
        {
          isloading ? (
          <p>{dateProduct}</p>
          ) 
          :
          <Skeleton
          animation="wave"
          width={120}
          height={50}
          />
        }
        {
          isloading ? (
          <p>{cityProduct}</p>
          ) 
          :
          <Skeleton
          animation="wave"
          width={120}
          height={50}
          />
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
          <BsFillInfoCircleFill onClick={handleOpen} />
          )  
          : 
          <Skeleton
          variant="circular"
          animation="wave"
          width={25}
          height={25}
          />}
        </div>
        {isloading ? (
            <h1>{typeProduct}</h1>
        ) 
        : 
        <Skeleton
        animation="wave"
        width={120}
        height={50}
        />}
      </div>
      <div className="body-Card">
        <div className="img-Card">
          {isloading ? (
          <img
            src={imgProduct}
            className="img-Card"
            alt={nameProduct}
          ></img>
          ) 
          : 
          <Skeleton
          variant="rectangle"
          animation="wave"
          width={130}
          height={110}
          />}
        </div>
        {isloading ? (
          <h2>{nameProduct}</h2>
        ) 
        :   
        <Skeleton
        animation="wave"
        width={150}
        height={35}
        />}
        {isloading ? (
        <p>Estado: {conditionProduct}</p>
        ) 
        :
        <Skeleton
        animation="wave"
        width={150}
        height={35}
        />}
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
  );
};
