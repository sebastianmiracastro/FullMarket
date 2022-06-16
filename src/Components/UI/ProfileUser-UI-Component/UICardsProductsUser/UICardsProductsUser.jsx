import "../../../Styles/Main-Styles/MainStyle.css"
import React, { useState } from "react";
import { Auth } from '../../../Helpers/Auth';
import Skeleton from '@mui/material/Skeleton';

export const UICardsProductsUser = ({
  uidProduct,
  typeProduct,
  imgProduct,
  nameProduct,
  conditionProduct,
}
  ) => {

    const [isloading, setIsLoading] = useState(true);

    const UserInSesion = Auth();
  
  return (
    <>
    <div className='container-card'>
      <div className="header-Card">
        <div className="iconInfo">
          {isloading ? (
            ''
                    )  
          : 
          <Skeleton
          variant="circular"
          animation="wave"
          width={25}
          height={25}
          />}
        </div>
        {isloading ? (
            <h1>{typeProduct}</h1>
        ) 
        : 
        <Skeleton
        animation="wave"
        width={120}
        height={50}
        />}
      </div>
      <div className="body-Card">
        <div className="img-Card">
          {isloading ? (
          <img
            src={imgProduct}
            className="img-Card"
            alt={nameProduct}
          ></img>
          ) 
          : 
          <Skeleton
          variant="rectangle"
          animation="wave"
          width={130}
          height={110}
          />}
        </div>
        {isloading ? (
          <h2>{nameProduct}</h2>
        ) 
        :   
        <Skeleton
        animation="wave"
        width={150}
        height={35}
        />}
        {isloading ? (
        <p>Estado: {conditionProduct}</p>
        ) 
        :
        <Skeleton
        animation="wave"
        width={150}
        height={35}
        />}
          {UserInSesion ? ( 
            ''
          ) : (
            ''
          )}
      </div>
    </div>
    </>
  )
}
