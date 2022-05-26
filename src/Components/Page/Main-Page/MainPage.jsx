import React from 'react';
import { LayoutCards } from '../../Layout/Main-Layouts-Components/LayoutCards/LayoutCards.jsx';
import { LayoutHeader } from '../../Layout/Main-Layouts-Components/LayoutHeader/LayoutHeader.jsx';
import '../../Styles/Main-Styles/MainStyle.css'


export const MainPage = () => {
  return (
    <>
    <LayoutHeader />
    <LayoutCards />
    </>
  )
};
