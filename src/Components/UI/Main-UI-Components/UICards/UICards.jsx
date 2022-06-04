import React, { useEffect } from "react";
import { UIButtons } from "../UIButtons/UIButtons.jsx";
import { NavLink } from "react-router-dom";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

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
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // ---- Get information of each product through its respective ID ---- //
  const featuresProduct = async () => {
    await fetch(
      `https:/backend-fullmarket-py.herokuapp.com/getoneproduct/${uidProduct}`
    )
      .then((res) => res.json())
      .then((data) => (data));
  };
  useEffect(() => {
    featuresProduct();
  }, []);
  // ---- //

  const body = (
    <div className='modalWindowFeatures'>
      <div style={modalStyle} className={classes.paper}>
        <h2 className='titleModalWindows' id="simple-modal-title">
          {typeProduct}: {nameProduct}
        </h2>

        <img className='imgModalWindow' src={imgProduct} alt="" />  {/* Show the picture */}
        <p className='pModalDescription'>Descripcion: {descriptionProduct}</p>
        <p className='pModalAvailability'>Disponible: {availabilityProduct}</p>
        <p>{dateProduct}</p>
        <p>{cityProduct}</p>
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
          <BsFillInfoCircleFill onClick={handleOpen} />
        </div>
        <h1>{typeProduct}</h1>
      </div>
      <div className="body-Card">
        <div className="img-Card">
          <img
            src={imgProduct}
            className="img-Card"
            alt={nameProduct}
          ></img>
        </div>
        <h2>{nameProduct}</h2>
        <p>Estado: {conditionProduct}</p>
        <div className="apply-Product">
          <NavLink to="/LogIn" className="">
            <UIButtons
              classButtons="btn-Apply"
              nameButtons="Aplicar"
            ></UIButtons>
          </NavLink>
        </div>
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
