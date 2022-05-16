import React from 'react'

export const UIButtonsLogin =({handleuser}) => {
  return (
    <>
      <div className="headerInitial">
      <button onClick={handleuser} className="btn-Apply">
      Iniciar Sesion{" "}
        </button>
      </div>
    </>
  );
};
export default UIButtonsLogin;
