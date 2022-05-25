import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { LoginPage } from './Components/Pages/Login-Page/LoginPage';
import { seeRedirec } from './Components/Pages/seeRedirec'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LoginPage /> } />
        <Route path='/seee' element={ <seeRedirec /> } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
