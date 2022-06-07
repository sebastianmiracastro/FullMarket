import React, { useState, useEffect } from "react";
import axios from "axios";
import { UILogos } from "../../UI/Main-UI-Components/UILogos/UILogos";


export const LayoutEditMyProducts = () => {
        
//GUARDANDO EN LOCAL STORAGE//
  const [text, setText] = useState(window.localStorage.getItem("text"));
  const setLocalStorage = (uidProduct) => {
    try {
      setText(text);
      window.localStorage.getItem("text");
    } catch (error) {
      console.log(error);
    }
  };
  ///////////////////////////////////////////////

  const [type, setType] = useState();
  const [name, setName] = useState();
  const [imgProduct, setImage] = useState();
  const [condition, setCondition] = useState();
  const [description, setDescription] = useState();
  const [availability, setAvailability] = useState();
  const [city, setCity] = useState();
  const [date, setDate] = useState();
  const [idOwner, setIdOwner] = useState();

  const [product, setProduct] = useState([]);



  const mostrar = async () => {
    await fetch(
      `https://fullmarket-provitional-backend.herokuapp.com/products/getoneproduct/${text}`
    )
      .then((res) => res.json())
      .then((data) => {
        setType(data.type);
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
        `https:/fullmarket-provitional-backend.herokuapp.com/products/editproduct/${text}`,
         formData,
         alert("ACTUALIZADOS"),
         window.location.reload(true)
       )
       .then()
       .catch((error) => {
         console.log(error);
       });
       
     event.preventDefault();
   };
  return (
    <>
    {/* <div className="addProductHeader">
      <div className="headerLogotype">
        <UILogos />
      </div>
    </div> */}
    <div className="spaceAddProduct"></div>
    <div className="containerFormData">
      <form onSubmit={Handle} className="form-edit-product">
        <h2>Editar Producto</h2>
        <input
          className="inputAddProduct"
          type="uid"
          name="uid"
          value={text}
          onChange={(e) => setLocalStorage(e.target.value)}
          placeholder=" "
          readOnly={true}
        ></input>

        <input
          className="inputAddProduct"
          type="type"
          name="type"
          value={type}
          onChange={(e) =>{setType(e.target.value)}}
          placeholder=" "
        ></input>
        <input
          className="inputAddProduct"
          type="name"
          name="name"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
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
        <input
          className="inputAddProduct"
          type="idOwner"
          name="idOwner"
          value={idOwner}
          onChange={(e) => setIdOwner(e.target.value)}
          placeholder=" "
        ></input>
        <button type="submit" className="button-page-edit">
          Guardar Cambios
        </button>
      </form>
    </div>
  </>
  )
}
