import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Front-end/HomePage';
import IntelHome from './Front-end/IntelHome';
import ErrorPage from './Front-end/ErrorPage';
import GlobalIntel from './Front-end/GlobalIntel';
import data from './logements.json';



ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intel" element={<IntelHome />} />
        <Route path="/about" element={<GlobalIntel />} />
        <Route path="/error" element={<ErrorPage />} />
        {/* Route par défaut pour les URL incorrectes */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();


