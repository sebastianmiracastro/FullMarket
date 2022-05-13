import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LayoutCards from './Components/Layout/LayoutCards/LayoutCards';
import { PageHomeRegister } from "./Components/Pages/PageHomeRegister/PageHomeRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<PageHomeRegister/>}></Route>
        <Route exact path='/LayoutCards' element={<LayoutCards/>}></Route>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
