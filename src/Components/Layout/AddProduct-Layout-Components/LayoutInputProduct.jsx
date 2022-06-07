import React, { useState } from 'react';
import axios from 'axios';
import { UInputProduct } from '../../UI/AddProduct-UI-Components/UInputProduct/UInputProduct';

export const LayoutInputProduct = () => {
  const [typeInput, setTypeInput] = useState('');
  const [name, setName] = useState('');
  const [imgProduct, setImage] = useState();
  const [condition, setCondition] = useState('');
  const [description, setDescription] = useState('');
  const [availability, setAvailability] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const idOwner = localStorage.getItem('uiduser');

  const [alertNameProduct, setAlertNameProduct] = useState('');

  var formData = new FormData();

  const Handle = async (event) => {
    formData.append("type", typeInput);
    formData.append("name", name);
    formData.append("imgProduct", imgProduct);
    formData.append("condition", condition);
    formData.append("description", description);
    formData.append("availability", availability);
    formData.append("city", city);
    formData.append("date", date);
    formData.append("idOwner", idOwner);
    axios
      .post(
        'https:/fullmarket-provitional-backend.herokuapp.com/products/createnewproduct',
        formData,
        window.location.reload(true)
      )
      .then()
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  };

  const validationNameProduct = () => {
    let validationNameAddProduct = /^[a-zA-Z\t]+|(^$)/;
    let nameAddProduct;
    if (name.match(validationNameAddProduct)) {
      nameAddProduct = 'Correcto';
      setAlertNameProduct(nameAddProduct);
    } else {
      nameAddProduct = 'Incorrecto';
      setAlertNameProduct(nameAddProduct);
    }
  };

  return (
   
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
          placeholder="Descripción"
        />
        <UInputProduct
          classInput="inputAddProduct input-custom"
          typeInput="availability"
          nameInput="availability"
          valueInput={availability}
          onChange={(e) => setAvailability(e.target.value)}
          placeholder="Disponibilidad"
        />
        <UInputProduct
          classInput="inputAddProduct input-custom"
          typeInput="city"
          nameInput="city"
          valueInput={city}
          onChange={(e) => setCity(e.target.value)}
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
        {/* <UInputProduct
          classInput="inputAddProduct"
          typeInput="idOwner"
          nameInput="idOwner"
          valueInput={idOwner}
          onChange={(e) => setIdOwner(e.target.value)}
          placeholder="IdOwner"
        /> */}
        <button type="submit" className="button-add-product">
          Publicar Producto
        </button>
      </form>
    </div>
   
  );
};
