import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainPage } from "./Components/Pages/Main-Page/MainPage.jsx";
import { RegisterPage } from "./Components/Pages/Register-Page/RegisterPage";
import { LoginPage } from "./Components/Pages/Login-Page/LoginPage";
import { AddProductPage } from "./Components/Pages/Add-Product-Page/AddProductPage";
import { EditProductPage } from "./Components/Pages/Edit-Product-Page/EditProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/AddProduct" element={<AddProductPage />} />
        <Route path="/EditProduct" element={<EditProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
