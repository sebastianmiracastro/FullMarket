import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";


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

export const LayoutEditMyProducts = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  // ---- Saving information in local storage (uidProduct) ---- //
  const [text, setText] = useState(window.localStorage.getItem("text"));
  const setLocalStorage = (uidProduct) => {
    try {
      setText(setLocalStorage);
      window.localStorage.getItem("text");
    } catch (error) {
      console.clear()
    }
  };
  /// ---- //

  const [type, setType] = useState();
  const [category, setCategory] = useState();
  const [name, setName] = useState();
  const [imgProduct, setImage] = useState();
  const [condition, setCondition] = useState();
  const [description, setDescription] = useState();
  const [availability, setAvailability] = useState();
  const [city, setCity] = useState();
  const [date, setDate] = useState();
  const [idOwner, setIdOwner] = useState();

  const mostrar = async () => {
    await fetch(
      `https://fullmarket-provitional-backend.herokuapp.com/products/getoneproduct/${text}`
    )
      .then((res) => res.json())
      .then((data) => {
        setType(data.type);
        setCategory(data.category)
        setName(data.name);
        setImage(data.imgProductURL);
        setCondition(data.condition);
        setDescription(data.description);
        setAvailability(data.availability);
        setCity(data.city);
        setDate(data.date);
        setIdOwner(data.idOwner);
      });
  };
  
  useEffect(() => {
    mostrar();
  }, []);

  let formData = new FormData();
  const Handle = async (event) => {
    formData.set("type", type);
    formData.set("category", category);
    formData.set("name", name);
    formData.set("imgProduct", imgProduct);
    formData.set("condition", condition);
    formData.set("description", description);
    formData.set("availability", availability);
    formData.set("city", city);
    formData.set("date", date);
    formData.set("idOwner", idOwner);

    axios
      .put(
        `https://fullmarket-provitional-backend.herokuapp.com/products/editproduct/${text}`,
        formData,
  
        //  window.location.reload(true)
      )
      .then(
        setTimeout(() => {
          window.location.reload(true);
        }, 1000)
      )
      .catch((error) => {
        ''
      });
    event.preventDefault();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Actualizado</h2>
      <p id="simple-modal-description">
        Actualizado exitosamente.
      </p>
      <div className="cont-buttons-modal-eliminar">
        <button type="button" className="btn-cancelar" onClick={handleClose}>
          OK
        </button>
      </div>
    </div>
  );
  return (
    <>
      <div className="spaceAddProduct"></div>
      <div className="containerFormData">
        <form onSubmit={Handle} className="form-edit-product">
          <h2>Editar Producto</h2>

          <select
          className="inputAddProduct"
          type="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="type">Tipo</option>
          <option value="Regalo">Regalo</option>
          <option value="Intercambio">Intercambio</option>
        </select>
        <select
          className='inputAddProduct'
          type="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Categoria">Categoria</option>
            <option value="Electrodomestico">Electrodomestico</option>
            <option value="Ropa">Ropa</option>
            <option value="Accesorio">Accesorio</option>
            <option value="Domestico">Domestico</option>
          </select>
          <input
            className="inputAddProduct"
            type="name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder=" "
          ></input>
          <input
            className="inputAddImgProduct"
            type="file"
            name="imgProduct"
            onChange={(e) => setImage(e.target.files[0])}
            placeholder=" "
          ></input>
          <input
            className="inputAddProduct"
            type="condition"
            name="condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            placeholder=" "
          ></input>
          <input
            className="inputAddProduct"
            type="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder=" "
          ></input>
          <input
            className="inputAddProduct"
            type="availability"
            name="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            placeholder=" "
          ></input>
          <input
            className="inputAddProduct"
            type="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder=" "
          ></input>
          <input
            className="inputAddProduct"
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder=" "
          ></input>
          <NavLink to='/LoggedUser/MyProducts'>

          </NavLink>
          <button type="submit" onClick={handleOpen} className="button-page-edit">
            Guardar Cambios
          </button>
        </form>
      </div>
      <div>
        <Modal open={open} onClose={handleClose}>
          {body}
        </Modal>
      </div>
    </>
  );
};
