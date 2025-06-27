import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ cart }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-3">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <Link to="/" className="text-white font-semibold text-2xl"><i className="fa-solid fa-utensils pe-2"></i> Food Order</Link>
        <div className="block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-yellow-400"><svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg></button>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
          <div className="lg:flex-grow">
            <Link to="/" className="block lg:inline-block text-white hover:text-yellow-400 px-4">Home</Link>
            <Link to="/menu" className="block lg:inline-block text-white hover:text-yellow-400 px-4">Menu</Link>
            <Link to="/cart" className="block lg:inline-block text-white hover:text-yellow-400 px-4">Cart ({cart.length})</Link>
            <Link to="/checkout" className="block lg:inline-block text-white hover:text-yellow-400 px-4">Checkout</Link>
            <Link to="/contact" className="block lg:inline-block text-white hover:text-yellow-400 px-4">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;