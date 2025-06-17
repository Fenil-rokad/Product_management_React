import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Card from './components/Card';
import Product from './components/Product';
import Login from './components/Login';
import AddSeller from './components/AddSeller';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addSeller" element={<AddSeller />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
