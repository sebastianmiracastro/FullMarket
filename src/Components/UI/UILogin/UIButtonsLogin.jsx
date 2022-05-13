import React from 'react'

export const UIButtonsLogin =({ nameButtons, classButtons , onClick}) => {
  return (
    <>
    <div className='Content-Bunttons'>
        <button onClick={onClick} className={classButtons}>
            {""}
            {nameButtons}
        </button>
    </div>
    </>
  );
};

export default UIButtonsLogin;
