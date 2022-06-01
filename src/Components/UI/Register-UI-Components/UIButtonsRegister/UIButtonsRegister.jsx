import React from "react";

export const UIButtonsRegister = ({ nameButtonsRegister, classButtonsRegister, onClickRegister }) => {
  return (
    <>
      <div className="headerRegister">
        <button onClick={onClickRegister} className={classButtonsRegister}>
          {" "}
          {nameButtonsRegister}
        </button>
      </div>
    </>
  );
};