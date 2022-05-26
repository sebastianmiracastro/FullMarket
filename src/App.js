//import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import LayoutCards from './Components/Layout/LayoutCards/LayoutCards';
// import { PageHomeRegister } from "./Components/Pages/PageHomeRegister/PageHomeRegister";
import { LayoutDateUser } from "./Components/Layout/LayoutDateUser/LayoutDateUser";
import SingIn from "./Components/Layout/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SingIn/>}></Route>
        <Route exact path="/LayoutDateUser" element={<LayoutDateUser/>}></Route>
       {/* <Route exact path='/Register' element={<PageHomeRegister/>}></Route>
       <Route exact path='/LayoutCards' element={<LayoutCards/>}></Route> */}
       </Routes>  
     </BrowserRouter>
  );
}

export default App;
