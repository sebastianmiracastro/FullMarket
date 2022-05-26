import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from './Components/Page/Main-Page/MainPage'
import { PageHomeRegister } from './Components/Page/Register-Page/PageHomeRegister'
import { LogInPage } from './Components/Page/LogIn-Page/LogInPage'
import { AddProductPage } from './Components/Page/AddProduct-Page/AddProductPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage />  } />
        <Route path="/UserRegister" element={ <PageHomeRegister /> } />
        <Route path="/LogIn" element= { <LogInPage /> } />
        <Route path="/LoggedUser/AddProduct" element= { <AddProductPage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
