import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Card from './components/Card';
import Product from './components/product';
import Login from './components/login';
import AddSeller from './components/addSeller';

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
