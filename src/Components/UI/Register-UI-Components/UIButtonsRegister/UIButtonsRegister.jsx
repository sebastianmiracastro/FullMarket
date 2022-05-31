import React from 'react'

export const UIButtonsRegister = ({ nameButtons, classButtons, onClick }) => {
  return (
    <>
      <div className="headerInitial">
        <button onClick={onClick} className={classButtons}>
          {" "}
          {nameButtons}
        </button>
      </div>
      <div className="space"></div>
    </>
  )
}
