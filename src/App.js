import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AddProductPage } from "./Components/Pages/Add-Product-Page/AddProductPage";
import { EditProductPage } from "./Components/Pages/Edit-Product-Page/EditProductPage";
import { MainPage } from "./Components/Pages/Main-Page/MainPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/AddProduct" element={<AddProductPage />} />
        <Route path="/EditProduct" element={<EditProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
