import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from './Components/Page/Main-Page/MainPage'
import { PageHomeRegister } from './Components/Page/Register-Page/PageHomeRegister'
import { LogInPage } from './Components/Page/LogIn-Page/LogInPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage />  } />
        <Route path="/UserRegister" element={ <PageHomeRegister /> } />
        <Route path="/LogIn" element= { <LogInPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
