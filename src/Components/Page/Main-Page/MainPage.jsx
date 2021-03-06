import React from 'react';
import { Carousel } from '../../Layout/Carrousel-Layout-Components/Carousel.jsx';
import { LayoutCards } from '../../Layout/Main-Layouts-Components/LayoutCards/LayoutCards.jsx';
import { LayoutCategories } from '../../Layout/Main-Layouts-Components/LayoutCategories/LayoutCategories.jsx';

export const MainPage = () => {
  return (
    <>
    <Carousel/> 
    <LayoutCards />
    <LayoutCategories />
    </>
  )
};
