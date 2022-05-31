import React from 'react'
import { UIButtons } from '../Main-UI-Components/UIButtons/UIButtons'


export const UIMyProducts=({
  uidProduct,
  typeProduct,
  imgProduct,
  nameProduct,
  conditionProduct,
  descriptionProduct,
  availabilityProduct,
  dateProduct,
  cityProduct,
})=> {
  return (
   <>
      <div className="header-Card">
        <h1>{typeProduct}</h1>
        <div className="body-Card">
          <div className="img-Card">
            <img
              src={imgProduct}
              className="img-Card"
              alt={nameProduct}
            ></img>
          </div>
          <h2>{nameProduct}</h2>
          <p>Estado: {conditionProduct}</p>
          <div className="apply-Product">
              <UIButtons
                classButtons="btn-Apply"
                nameButtons="Editar"
              ></UIButtons>
              <UIButtons
                classButtons="btn-Apply"
                nameButtons="Editar"
              ></UIButtons>
          </div>
        </div>
      </div>
      <div>
      </div>
    </>
  )
}
