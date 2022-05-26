import React from 'react'

export const UIDataUser=({
    photoUser,nameUser,aliasUser,
    emailUser,passwordUser,
    depertmentUser,municipalityUser,addressUser,
    phoneUser}) =>{
  return (
    <div>
        <img src={photoUser}></img>
        <p>{nameUser}</p>
        <p>{aliasUser}</p>
        <p>{emailUser}</p>
        <p>{passwordUser}</p>
        <p>{depertmentUser}</p>
        <p>{municipalityUser}</p>
        <p>{addressUser}</p>
        <p>{phoneUser}</p>    
    </div>
    
  )
}
