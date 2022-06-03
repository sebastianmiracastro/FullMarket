import React, { useState } from "react";
import axios from "axios";
import { UInputProduct } from "../../UI/AddProduct-UI-Components/UInputProduct/UInputProduct";

export const LayoutInputProduct = () => {
  const [typeInput, setTypeInput] = useState("");
  const [name, setName] = useState("");
  const [imgProduct, setImage] = useState();
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [idOwner, setIdOwner] = useState("");

  const [alertNameProduct, setAlertNameProduct] = useState("");

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
        "https://backend-fullmarket-py.herokuapp.com/createnewproduct",
        formData
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
      nameAddProduct = "Correcto";
      setAlertNameProduct(nameAddProduct);
    } else {
      nameAddProduct =
        "Incorrecto";
      setAlertNameProduct(nameAddProduct);
    }
  };

  return (
    <>
      <form onSubmit={Handle} className="form-add-product">
        <select
          className="type-product-addproduct"
          type="type"
          value={typeInput}
          onChange={(e) => setTypeInput(e.target.value)}
        >
          <option value="type">Tipo</option>
          <option value="Regalo">Regalo</option>
          <option value="Intercambio">Intercambio</option>
        </select>
        <UInputProduct
          classInput="inputAddProduct"
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
          classInput="inputAddImgProduct"
          typeInput="file"
          nameInput="imgProduct"
          onChange={(e) => setImage(e.target.files[0])}
          placeholder="Photo"
        />
        <select
          className="condition-product-addproduct"
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
          classInput="inputAddProduct"
          typeInput="description"
          nameInput="description"
          valueInput={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción"
        />
        <UInputProduct
          classInput="inputAddProduct"
          typeInput="availability"
          nameInput="availability"
          valueInput={availability}
          onChange={(e) => setAvailability(e.target.value)}
          placeholder="Disponibilidad"
        />
        <UInputProduct
          classInput="inputAddProduct"
          typeInput="city"
          nameInput="city"
          valueInput={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Ciudad"
        />
        <UInputProduct
          classInput="inputAddProduct"
          typeInput="date"
          nameInput="date"
          valueInput={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
        />
        <UInputProduct
          classInput="inputAddProduct"
          typeInput="idOwner"
          nameInput="idOwner"
          valueInput={idOwner}
          onChange={(e) => setIdOwner(e.target.value)}
          placeholder="IdOwner"
        />
        <button type="submit" className="button">
          Publicar Producto
        </button>
      </form>
    </>
  );
};
