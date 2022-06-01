import React from "react";

export const UIButtonsMyProducts = ({ nameButtonsMyProducts, classButtonsMyProducts, onClickMyProducts }) => {
  return (
    <>
      <div className="headerRegister">
        <button onClick={onClickMyProducts} className={classButtonsMyProducts}>
          {" "}
          {nameButtonsMyProducts}
        </button>
      </div>
    </>
  );
};