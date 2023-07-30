import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { CartProvider } from './context/cartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CartProvider>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </CartProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);