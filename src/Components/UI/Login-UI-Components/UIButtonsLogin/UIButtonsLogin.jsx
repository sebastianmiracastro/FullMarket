import React from 'react';

export const UIButtonsLogin =({ nameButtons, classButtons , onClick}) => {
  return (
    <>
      <div className="headerInitialLog">
        <button onClick={onClick} className={classButtons}>
          {" "}
          {nameButtons}
        </button> 
      </div>
      <div className='spaceLog'></div>
    </>
  );
};
