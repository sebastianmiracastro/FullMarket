import React, { useState, useEffect } from 'react';
import { UICategories } from '../../../UI/Main-UI-Components/UICategories/UICategories';
import '../../../Styles/Main-Styles/MainStyle.css';

export const LayoutCategories = () => {
  const URL =  "https://fullmarket-provitional-backend.herokuapp.com/products/productsbycategory/Accesorio"
  const [categories, setCategories] = useState([]);
  
  const categoriesProduct = async () => {
    await fetch(URL)
    .then((res) => res.json())
    .then((data) => setCategories(data));
  };
  
  console.log("CATEGORIES", categories);

  useEffect(() => {
    categoriesProduct()
  }, []);

  return (
    <>  
    <main className="main-products">
      <h1 className="title-categories">Accesorios</h1>
      {categories.map((element) => (
        <UICategories
          key={element.uid + 1}
          uidProductCategory = {element.uid}
          typeProductCategory={element.type}
          categoryProduct={element.category}
          imgProductCategory={element.imgProductURL}
          nameProductCategory={element.name}
          conditionProductCategory={element.condition}
          availabilityProductCategory={element.availability}
          dateProductCategory={element.date}
          descriptionProductCategory={element.description}
          cityProductCategory={element.city}
        />
      ))}
    </main>
    </>
  );
};