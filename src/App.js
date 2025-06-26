import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/menu";
import CartPage from "./pages/cart";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Checkout from "./pages/checkout";
function App() {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("Cart updated:", cart);
    }, [cart]);

    return (
        <Router>
            <Navbar cart={cart} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu cart={cart} setCart={setCart} />} />
                <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Router>
    );
}

export default App;