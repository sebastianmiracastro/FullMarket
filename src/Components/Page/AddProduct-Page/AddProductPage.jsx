import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutInputProduct } from '../../Layout/AddProduct-Layout-Components/LayoutInputProduct'

export const AddProductPage = () => {

  let navigate = useNavigate();

  useEffect(() => {
    if(!window.localStorage.getItem('uiduser')){
      navigate("/") 
    }
    },[]);

  return (
    <LayoutInputProduct />
  )
}
