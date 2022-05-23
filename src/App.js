//import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LayoutCards from './Components/Layout/LayoutCards/LayoutCards';
import { PageHomeRegister } from "./Components/Pages/PageHomeRegister/PageHomeRegister";

function App() {
  
 // const [ idUser , setIdUser] =useState("")
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path='/Register' element={<PageHomeRegister/>}></Route>
        <Route exact path='/LayoutCards' element={<LayoutCards/>}></Route>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
