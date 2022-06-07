import React, {useState,useEffect} from 'react';
import { UIButtonsMyProducts } from '../UIButtonsMyProducts/UIButtonsMyProducts';
import { NavLink } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import "../../../Styles/Main-Styles/MainStyle.css"

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
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export const UIMyProducts=({
  uidProduct,
  typeProduct,
  imgProduct,
  nameProduct,
  conditionProduct,
})=> {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [text, setText] = useState(window.localStorage.getItem("text"));
  
  const saveID = async (uidProduct) => {
    console.log("Entre a la funcion Save ID");
    try {
      console.log("Entre al try");
      setText(text);
      window.localStorage.setItem("text", uidProduct);
    } catch (error) {
      console.log(error);
    }
  };


  const featuresProduct = async () => {
    await fetch(
      `https://fullmarket-provitional-backend.herokuapp.com/products/getoneproduct/${uidProduct}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };



  const deleteProduct = async (event) => {
    axios
      .delete(
         `https://fullmarket-provitional-backend.herokuapp.com/products/deleteproduct/${uidProduct}`,
        alert("ELIMINADO"),
        window.location.reload(true)
      )
      .then()
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">ELIMINAR PRODUCTO</h2>
      <p id="simple-modal-description">
        ¿Estas seguro de eliminar {nameProduct}?.
      </p>
      <div className="cont-buttons-modal-eliminar">
        <button type="button" className="btn-eliminar" onClick={deleteProduct}>
          ELIMINAR
        </button>
        <button type="button" className="btn-cancelar" onClick={handleClose}>
          CANCELAR
        </button>
      </div>
    </div>
  );

  return (
   <>
   <div className='container-My-Products-card'>
     <div className="header-Card">
       <h1>{typeProduct}</h1>
     </div>
     <div className="body-Card">
       <div className="img-Card">
         <img
         src={imgProduct}
         className="img-Card"
         alt={nameProduct}
         onClick={featuresProduct}
         ></img>
       </div>
       <h2>{nameProduct}</h2>
       <p>Estado: {conditionProduct}</p>
       <div className="apply-My-Products">
         <NavLink to='/LoggedUser/MyProducts/EditProduct'>
           <UIButtonsMyProducts
           classButtonsMyProducts="btn-Edit"
           nameButtonsMyProducts="Editar"
           onClickMyProducts={() => saveID(uidProduct)}
          />
         </NavLink>
    
         <NavLink to=''>
           <UIButtonsMyProducts
           classButtonsMyProducts="btn-Remove"
           nameButtonsMyProducts="Eliminar"
           onClickMyProducts={handleOpen}
           />
         </NavLink>
       </div>
    </div>
   </div>
  <div>
    <Modal open={open} onClose={handleClose}>
      {body}
    </Modal>
  </div>
    </>
  )
}
