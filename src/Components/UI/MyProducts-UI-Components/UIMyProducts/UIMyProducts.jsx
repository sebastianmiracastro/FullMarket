import React from 'react';
import { UIButtonsMyProducts } from '../UIButtonsMyProducts/UIButtonsMyProducts';

export const UIMyProducts=({
  uidProductMyProduct,
  typeProductMyProduct,
  imgProductMyProduct,
  nameProductMyProduct,
  conditionProductMyProduct,
  descriptionProductMyProduct,
  availabilityProductMyProduct,
  dateProductMyProduct,
  cityProductMyProduct,
})=> {
  return (
   <>
      <div className="header-CardMyProducts">
        <h1>{typeProductMyProduct}</h1>
        <div className="body-CardMyProducts">
          <div className="img-CardMyProducts">
            <img
              src={imgProductMyProduct}
              className="img-CardMyProducts"
              alt={nameProductMyProduct}
            ></img>
          </div>
          <h2>{nameProductMyProduct}</h2>
          <p>Estado: {conditionProductMyProduct}</p>
          <div className="apply-Productss">
              <UIButtonsMyProducts
                classButtons="btn-Edit"
                nameButtons="Editar"
              ></UIButtonsMyProducts>
              <UIButtonsMyProducts
                classButtons="btn-Remove"
                nameButtons="Eliminar"
              ></UIButtonsMyProducts>
          </div>
        </div>
      </div>
      <div>
      </div>
    </>
  )
}
