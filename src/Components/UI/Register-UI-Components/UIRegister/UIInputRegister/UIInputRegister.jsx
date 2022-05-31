import React from 'react'

export const UIInputRegister=({nameInputtRegister, typeInputtRegister, valueInputtRegister, onChangeInputtRegister, placeholderInputtRegister, onKeyUpInputtRegister}) =>{
  return (
    <div>
        <input
          name={nameInputtRegister}
          type={typeInputtRegister}
          value={valueInputtRegister}
          onChange={onChangeInputtRegister}
          placeholder={placeholderInputtRegister}
          onKeyUp={onKeyUpInputtRegister}
        ></input>
    </div>
  )
}

