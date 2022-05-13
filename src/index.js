import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LayoutLoginFormulary from './Components/Layout/LayoutLoginFormulary/LayoutLoginFormulary.jsx'
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LayoutLoginFormulary/>
  </React.StrictMode>
);

reportWebVitals();
