import React from 'react'

export const UIInputEditUser=({nameInputEditUser, typeInputEditUser, valueInputEditUser,  placeholderInputEditUser,onChangeInputEditUser, onKeyUpInputEditUser})=> {
  return (
    <div>
        <input
           name={nameInputEditUser}
           type={typeInputEditUser}
           value={valueInputEditUser}
           placeholder={placeholderInputEditUser}
           onKeyUp={onKeyUpInputEditUser}
           onChange={onChangeInputEditUser}
        ></input>
    </div>
  )
}
