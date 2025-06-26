import React, { useState } from "react";

function CheckoutPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        payment: "",
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="max-w-xl mx-auto p-6">
            {submitted ? (
                <div className="text-center text-green-600 text-xl font-semibold">Thank you for your order!</div>
            ) : (
                <div>
                    <h2 className="text-2xl font-bold text-center py-5">Checkout</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center text-gray-600 max-w-xl mx-auto border p-4 hover:shadow-xl">
                        <label htmlFor="name" className="font-semibold py-2">Name:</label>
                        <input type="text" name="name" placeholder="Enter your name.." value={formData.name} onChange={handleChange} required className="border rounded-md px-3 py-2 my-2 bg-gray-100" />
                        <label htmlFor="email" className="font-semibold py-2">Email:</label>
                        <input type="email" name="email" placeholder="Enter your email.." value={formData.email} onChange={handleChange} required className="border rounded-md px-3 py-2 my-2 bg-gray-100" />
                        <label htmlFor="address" className="font-semibold py-2">Address:</label>
                        <textarea name="address" placeholder="Enter your address.." value={formData.address} onChange={handleChange} required className="border rounded-md px-3 py-2 my-2 bg-gray-100" />
                        <label htmlFor="payment" className="font-semibold py-2">Payment Method:</label>
                        <select name="payment" value={formData.payment} onChange={handleChange} required className="border rounded-md px-3 py-2 my-2 mb-4 bg-gray-100">
                            <option value="">Select Payment Method</option>
                            <option value="UPI">UPI</option>
                            <option value="Cash">Cash</option>
                            <option value="Card">Card</option>
                        </select>
                        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 w-40 justify-center mx-auto text-white font-semibold px-4 py-2 rounded">Click to Pay</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default CheckoutPage;