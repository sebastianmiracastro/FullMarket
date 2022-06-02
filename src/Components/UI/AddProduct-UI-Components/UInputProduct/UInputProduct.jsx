import React from "react";

export const UInputProduct = ({ classInput, typeInput, nameInput, valueInput, onChange, onKeyUp, placeholder }) => {
  return (
    <input
      className={classInput}
      type={typeInput}
      name={nameInput}
      value={valueInput}
      onChange={onChange}
      onKeyUp={onKeyUp}
      placeholder={placeholder}
    ></input>
  );
};
