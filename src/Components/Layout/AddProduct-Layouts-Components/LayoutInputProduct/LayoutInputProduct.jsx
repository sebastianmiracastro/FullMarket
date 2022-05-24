import React, { useState} from "react";
import axios from "axios";
import { UInputProduct } from "../../../UI/AddProduct-UI-Components/UInputProduct/UInputProduct";

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

  return (
    <>
    <form onSubmit={Handle} className="form12">
      <UInputProduct
        classInput="inputAddProduct"
        typeInput="type"
        nameInput="type"
        valueInput={typeInput}
        onChange={(e) => setTypeInput(e.target.value)}
        placeholder="Tipo"
      />
      <UInputProduct
        classInput="inputAddProduct"
        typeInput="name"
        nameInput="name"
        valueInput={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
      />
      <UInputProduct
        classInput="inputAddImgProduct"
        typeInput="file"
        nameInput="imgProduct"
        onChange={(e) => setImage(e.target.files[0])}
        placeholder="Photo"
      />
      <UInputProduct
        classInput="inputAddProduct"
        typeInput="condition"
        nameInput="condition"
        valueInput={condition}
        onChange={(e) => setCondition(e.target.value)}
        placeholder="Condition"
      />
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
