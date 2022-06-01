import React from 'react'

export const UIButtonsDataUser=({ classButtonsDataUser,nameButtonsDataUser,onClickDataUser}) =>{
  return (
    <div className='headerDataUser'>
        <button onClick={onClickDataUser} className={classButtonsDataUser}>
          {" "}
          {nameButtonsDataUser}
        </button>
    </div>
  )
}
