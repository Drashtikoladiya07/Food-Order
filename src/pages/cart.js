import React, { useEffect } from "react";

function Cart({ cart, setCart }) {
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    const handleRemove = (indexToRemove) => {
        const updatedCart = cart.filter((_, index) => index !== indexToRemove);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart"));
        if (storedCart) {
            setCart(storedCart);
        }
    }, [setCart]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-4"><i className="fa fa-shopping-cart fs-5 pe-2"></i> Your Cart</h2>
            {cart.length === 0 ? (
                <p className="text-center text-gray-600">Cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cart.map((item, index) => (
                        <div key={index} className="flex items-center justify-between border-b pb-2 my-5">
                            <div className="flex items-center gap-4">
                                <img src={item.image} alt={item.name} className="h-16 w-16 rounded object-cover" />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-600">₹{item.price}</p>
                                </div>
                            </div>
                            <button onClick={() => handleRemove(index)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded">Remove</button>
                        </div>
                    ))}
                    <a href={'/checkout'} className="font-semibold text-lg"><button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">Buy Now</button></a>
                    <div className="text-right font-bold text-lg">Total: ₹{total}</div>
                </div>
            )}
        </div>
    );
}

export default Cart;