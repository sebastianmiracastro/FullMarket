import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {SingIn} from './Components/Layout/LayoutLoginFormulary/LayoutLoginFormulary';
import { LayoutCards } from './Components/Layout/LayoutLoginFormulary/LayoutCards';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SingIn/>}>
        </Route>
        <Route path='/Layout' element={<LayoutCards/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
