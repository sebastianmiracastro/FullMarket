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
        <div className='container-My-Products-card'>
        <div className="header-Card">
          <h1>{typeProductMyProduct}</h1>
        </div>
        <div className="body-Card">
          <div className="img-Card">
            <img
              src={imgProductMyProduct}
              className="img-Card"
              alt={nameProductMyProduct}
            ></img>
          </div>
          <h2>{nameProductMyProduct}</h2>
          <p>Estado: {conditionProductMyProduct}</p>
            <div className="apply-My-Products">
              <UIButtonsMyProducts
                classButtonsMyProducts="btn-Edit"
                nameButtonsMyProducts="Editar"
              ></UIButtonsMyProducts>
              <UIButtonsMyProducts
                classButtonsMyProducts="btn-Remove"
                nameButtonsMyProducts="Eliminar"
              ></UIButtonsMyProducts>
            </div>
        </div>
      </div>
    </>
  )
}
