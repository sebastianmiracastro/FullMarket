import React, { useEffect, useState } from "react";
import { UICards } from "../../../UI/Main-UI-Components/UICards/UICards";
import '../../../Styles/Main-Styles/MainStyle.css'

export const LayoutCards = () => {
  const URL = "https://fullmarket-provitional-backend.herokuapp.com/products/getallproducts";
  
  const [products, setProducts] = useState([]);
  
  const mostrar = async () => {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    mostrar();
  }, []);

  return (
    <>
    <main className="main-products">
      {products.map((element) => (
        <UICards
          key={element.name + 1}
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
    {/* <div className="footer-Main-Page">
      <div className="footer-column1">
        <div className="title-footer-column1">
          <h2>About</h2>
        </div>
      </div>
      
    </div>
   */}
    </>
    
  );
};
