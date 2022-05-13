import React from "react";
import { UInputProduct } from "../../../UI/AddProduct-UI-Components/UInputProduct/UInputProduct";

export const LayoutInputProduct = () => {
  return (
    <>
      <UInputProduct
        classInput="inputAddProduct"
        typeInput="type"
        nameInput="type"
        valueInput={typeInput}
        onChange={(e) => setType(e.target.value)}
        placeholder="Tipo"
      />
      
      <UInputProduct
        classInput="inputAddProduct"
        typeInput="name"
        nameInput="name"
        valueInput={typeInput}
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
        valueInput={typeInput}
        onChange={(e) => setCondition(e.target.value)}
        placeholder="Condition"
      />
    </>
  );
};
