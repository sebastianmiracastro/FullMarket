import React from "react";

export const UInputProduct = ({ classInput, typeInput, nameInput, valueInput, onChange, placeholder,
}) => {
  return (
    <input
      className={classInput}
      type={typeInput}
      name={nameInput}
      value={valueInput}
      onChange={onChange}
      placeholder={placeholder}
    ></input>
  );
};
