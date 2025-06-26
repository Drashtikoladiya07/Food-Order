import React, { useState } from "react";

function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log("Form Submitted:", formData);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-center py-5">Contact Us</h2>
            {submitted ? (
                <div className="text-center text-green-600 text-xl font-semibold p-6"> Thank you for contacting us!</div>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form flex flex-col justify-center text-gray-800 max-w-xl mx-auto border p-4 hover:shadow-xl">
                    <label htmlFor="name" className="font-semibold py-2">Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name..." className="border rounded-md px-3 py-2 my-2 bg-gray-100" required />
                    <label htmlFor="email" className="font-semibold py-2">Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your e-mail..." className="border rounded-md px-3 py-2 my-2 bg-gray-100" required />
                    <label htmlFor="message" className="font-semibold py-2">Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message.." rows="4" className="border rounded-md px-3 py-2 my-2 bg-gray-100" required />
                    <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 my-3 w-40 justify-center mx-auto text-white font-semibold px-4 py-2 rounded">Submit</button>
                </form>
            )}
        </div>
    );
}

export default Contact;
