import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from './Components/Page/Main-Page/MainPage'
import { PageHomeRegister } from './Components/Page/Register-Page/PageHomeRegister'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage />  } />
        <Route path="/UserRegister" element={ <PageHomeRegister /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
