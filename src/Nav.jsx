import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex flex-col sm:flex-row items-center justify-between">
      <h1 className="text-2xl sm:text-3xl font-bold text-purple-950 mb-2 sm:mb-0">🏪 YumHub</h1>
      <div className="flex flex-wrap gap-4 sm:gap-6 text-base sm:text-lg">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/product" className="hover:underline">Product</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/addSeller" className="hover:underline">Add Seller</Link>
      </div>
    </nav>
  );
};

export default Nav;