import React, { useEffect, useState } from "react";
import { UICards } from "../../../UI/Main-UI-Components/UICards/UICards";
import '../../../Styles/Main-Styles/MainStyle.css';
import { LayoutHeader } from "../LayoutHeader/LayoutHeader";

export const LayoutCards = () => {
  const URL = "https://fullmarket-provitional-backend.herokuapp.com/products/getallproducts";
  
  const [products, setProducts] = useState([]);
  
  const mostrar = async () => {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const filtrarBusqueda = async (event) => {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        event.target.value != "" ? setProducts(data.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()))) : setProducts(data);        
      }) 
  };

  useEffect(() => {
    mostrar();
  }, []);

  return (
    <>  
    <main className="main-products">
      <LayoutHeader event={filtrarBusqueda} />
      {products.map((element) => (
        <UICards
          key={element.uid + 1}
          uidProduct = {element.uid}
          typeProduct={element.type}
          imgProduct={element.imgProductURL}
          nameProduct={element.name}
          conditionProduct={element.condition}
          availabilityProduct={element.availability}
          dateProduct={element.date}
          descriptionProduct={element.description}
          cityProduct={element.city}
        />
      ))}
    </main>
    </>
  );
};
