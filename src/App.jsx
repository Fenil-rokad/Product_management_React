import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './home';
import Card from './Card';
import Product from './product';
import Login from './login';
import AddSeller from './addSeller';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addSeller" element={<AddSeller />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
