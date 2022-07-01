import React, { useState } from 'react';
import axios from 'axios';
import { UInputProduct } from '../../UI/AddProduct-UI-Components/UInputProduct/UInputProduct';
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

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
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const LayoutInputProduct = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [typeInput, setTypeInput] = useState('');
  const [name, setName] = useState('');
  const [imgProduct, setImage] = useState();
  const [condition, setCondition] = useState('');
  const [description, setDescription] = useState('');
  const [availability, setAvailability] = useState('');
  const [category, setCategory] = useState('')
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const idOwner = localStorage.getItem('uiduser');

  const [alertNameProduct, setAlertNameProduct] = useState('');
  const [alertDescriptionProduct, setAlertDescriptionProduct] = useState('');

  var formData = new FormData();

  const Handle = async (event) => {
    formData.append("type", typeInput);
    formData.append("name", name);
    formData.append("imgProduct", imgProduct);
    formData.append("condition", condition);
    formData.append("description", description);
    formData.append("availability", availability);
    formData.append("category", category)
    formData.append("city", city);
    formData.append("date", date);
    formData.append("idOwner", idOwner);
    axios
      .post(
        'https://fullmarket-provitional-backend.herokuapp.com/products/createnewproduct',
        formData,
      )
        .then(setTimeout(() => {
          window.location.reload(true)
        }, 2000))
        .catch((error) => {
          ''
        });
      event.preventDefault();
    };

    
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Agregado exitosamente</h2>
      <p id="simple-modal-description">
        Se agregó exitosamente el producto
      </p>
      <div className="cont-buttons-modal-eliminar">
        <button type="button" className="btn-cancelar" onClick={handleClose}>
          OK
        </button>
      </div>
    </div>
  );

  const validationNameProduct = () => {
    let validationNameAddProduct = /^[a-zA-Z\t]+|(^$)/;
    let nameAddProduct;
    if (name.match(validationNameAddProduct)) {
      nameAddProduct = 'Correcto';
      setAlertNameProduct(nameAddProduct);
    } else {
      nameAddProduct = 'Incorrecto. Recuerde agregar letras.';
      setAlertNameProduct(nameAddProduct);
    }
  };

  const validationDescriptionProduct = () => {
    let validationDescriptionAddProduct = /^[a-zA-Z\t]+|(^$)/;
    let descriptionAddProduct;
    if (description.match(validationDescriptionAddProduct)) {
      descriptionAddProduct = 'Correcto';
      setAlertDescriptionProduct(descriptionAddProduct);
    } else {
      descriptionAddProduct = 'Incorrecto. Recuerde agregar letras.';
      setAlertDescriptionProduct(descriptionAddProduct);
    }
  };

  return (
  <>
    <div className='cont-add-product'>
      <form onSubmit={Handle} className="form-add-product custom-form">
        <h2>Agregar Producto</h2>
        <select
          className="type-product-addproduct custom-select"
          type="type"
          value={typeInput}
          onChange={(e) => setTypeInput(e.target.value)}
        >
          <option value="type">Tipo</option>
          <option value="Regalo">Regalo</option>
          <option value="Intercambio">Intercambio</option>
        </select>
        <select
          className='condition-product-addproduct custom-select'
          type="condition"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Categoria">Categoria</option>
            <option value="Electrodomestico">Electrodomestico</option>
            <option value="Ropa">Ropa</option>
            <option value="Accesorio">Accesorio</option>
            <option value="Domestico">Domestico</option>
          </select>
          <UInputProduct
            classInput="inputAddProduct input-custom"
            typeInput="name"
            nameInput="name"
            valueInput={name}
            onChange={(e) => setName(e.target.value)}
            onKeyUp={validationNameProduct}
            required
            placeholder="Nombre"
          />
          <p className="alert-validation-addproduct">{alertNameProduct}</p>
          <UInputProduct
            classInput="inputAddImgProduct input-custom"
            typeInput="file"
            nameInput="imgProduct"
            onChange={(e) => setImage(e.target.files[0])}
            placeholder="Photo"
          />
          <select
            className="condition-product-addproduct custom-select"
            type="condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          >
            <option value="condition">Condicion</option>
            <option value="Nuevo">Nuevo</option>
            <option value="Casi nuevo">Casi nuevo</option>
            <option value="Usado">Usado</option>
          </select>

          <UInputProduct
            classInput="inputAddProduct input-custom"
            typeInput="description"
            nameInput="description"
            valueInput={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyUp={validationDescriptionProduct}
            required
            placeholder="Descripción"
          />
          <p className="alert-validation-addproduct">{alertDescriptionProduct}</p>
          <select
            className='condition-product-addproduct custom-select'
            type="condition"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            >
              <option value="Disponibilidad">Disponibilidad</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          <UInputProduct
            classInput="inputAddProduct input-custom"
            typeInput="city"
            nameInput="city"
            valueInput={city}
            onChange={(e) => setCity(e.target.value)}
            required
            placeholder="Ciudad"
          />
          <UInputProduct
            classInput="inputAddProduct input-custom"
            typeInput="date"
            nameInput="date"
            valueInput={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Date"
          />
          <button type="submit" onClick={handleOpen} className="button-add-product">
            Publicar Producto
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
