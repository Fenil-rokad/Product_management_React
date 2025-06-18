import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex place-content-between">
      <h1 className='text-3xl font-bold text-purple-950	'>🏪 Zomato Mall</h1>
      <div className="flex gap-6 text-lg ">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/product" className="hover:underline">Product</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/addSeller" className="hover:underline">Add Seller</Link>
      </div>
    </nav>
  );
};

export default Nav;
