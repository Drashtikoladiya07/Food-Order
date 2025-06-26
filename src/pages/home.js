import React, { useState, useEffect } from "react";

function Home() {
    const images = [
        "https://bootstrapmade.com/content/demo/Delicious/assets/img/hero-carousel/hero-carousel-1.jpg",
        "https://bootstrapmade.com/content/demo/Delicious/assets/img/hero-carousel/hero-carousel-2.jpg",
        "https://bootstrapmade.com/content/demo/Delicious/assets/img/hero-carousel/hero-carousel-3.jpg",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center transition-all duration-1000" style={{ backgroundImage: `url('${images[currentImage]}')` }}>
            <div className="bg-opacity-60 rounded">
                <h1 className="text-4xl sm:text-5xl font-bold">Welcome to Food Order</h1>
                <p className="text-lg sm:text-xl py-10">Fast Delivery In Your Door!</p>
                <a href="/menu" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded shadow-lg transition">Order Now</a>
            </div>
        </div>
    );
}

export default Home;