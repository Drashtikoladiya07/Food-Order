import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Menu({ cart, setCart }) {
    const foodItems = [
        { id: 1, name: "Spinach Salad", price: 160, image: "https://bootstrapmade.com/content/demo/Delicious/assets/img/menu/spinach-salad.jpg" },
        { id: 2, name: "Caesar Selections", price: 180, image: "https://bootstrapmade.com/content/demo/Delicious/assets/img/menu/caesar.jpg" },
        { id: 3, name: "Tuscan Grilled", price: 90, image: "https://bootstrapmade.com/content/demo/Delicious/assets/img/menu/tuscan-grilled.jpg" },
        { id: 4, name: "Mozzarella Stick", price: 140, image: "https://bootstrapmade.com/content/demo/Delicious/assets/img/menu/mozzarella.jpg" },
        { id: 5, name: "Greek Salad", price: 120, image: "https://bootstrapmade.com/content/demo/Delicious/assets/img/menu/greek-salad.jpg" },
        { id: 6, name: "Crab Cake", price: 250, image: "https://bootstrapmade.com/content/demo/Delicious/assets/img/menu/cake.jpg" },
    ];

    const handleAddToCart = (item) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Our Menu</h2>
            <div className="text-right mb-4">
                <Link to="/cart" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded hover:bg-blue-600">
                    View Cart ({cart.length})
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {foodItems.map((item) => (
                    <div key={item.id} className="border p-4 rounded hover:shadow text-center">
                        <img src={item.image} alt={item.name} className="h-60 w-60 mx-auto mb-3 rounded" />
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-700 mb-2">₹{item.price}</p>
                        <button
                            onClick={() => handleAddToCart(item)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;