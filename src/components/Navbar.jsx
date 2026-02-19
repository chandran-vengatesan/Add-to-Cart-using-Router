import React from 'react';
import { Link } from 'react-router-dom'; // Import Link kandippa venum
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo-ah click panna home page-ku poga 'to="/"' */}
        <Link to="/" className="text-2xl font-bold text-blue-600">Guvi Store</Link>

        {/* Cart button-ah click panna cart page-ku poga 'to="/cart"' */}
        <Link to="/cart">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg transition flex items-center gap-2">
            <FiShoppingCart size={20} />
            <span>Cart ({cartCount})</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;