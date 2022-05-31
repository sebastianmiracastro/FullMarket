import React from 'react';

export const UIInputRegister=({nameInput, typeInput, valueInput, onChangeInput, placeholderInput, onKeyUpInput}) =>{
  return (
    <div>
        <input
          name={nameInput}
          type={typeInput}
          value={valueInput}
          onChange={onChangeInput}
          placeholder={placeholderInput}
          onKeyUp={onKeyUpInput}
        ></input>
    </div>
  )
}