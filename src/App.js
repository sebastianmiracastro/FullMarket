import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainPage } from "./Components/Pages/Main-Page/MainPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
