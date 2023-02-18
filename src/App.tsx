import React from 'react';
import { Screen } from './components/Screen/Screen';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ecommerce-product" element={<Screen />} />
        <Route path="/collections" element={<Screen />} />
        <Route path="/men" element={<Screen />} />
        <Route path="/women" element={<Screen />} />
        <Route path="/about" element={<Screen />} />
        <Route path="/contact" element={<Screen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
