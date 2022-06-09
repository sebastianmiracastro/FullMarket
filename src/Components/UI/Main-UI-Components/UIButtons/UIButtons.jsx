import React from "react";

export const UIButtons = ({ nameButtons, classButtons, onClick, onChange }) => {
  return (
    <>
      <div className="headerInitial">
        <button onClick={onClick} className={classButtons} onChange={onChange}>
          {" "}
          {nameButtons}
        </button>
      </div>
      <div className="space"></div>
    </>
  );
};
