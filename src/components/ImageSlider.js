import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextSlide = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    return (
        <div className="relative flex justify-center items-center w-full max-w-screen-xl mx-auto p-4">
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 hover:bg-opacity-40 py-2 px-4 rounded-full transition duration-300"
                onClick={prevSlide}
            >
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z" />
                </svg>
            </button>
            <div className="w-full overflow-hidden">
                <img
                    className="w-full h-[500px] md:h-[600px] object-contain"
                    src={images[currentImage]}
                    alt={`Slide ${currentImage}`}
                />
            </div>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 hover:bg-opacity-40 py-2 px-4 rounded-full transition duration-300"
                onClick={nextSlide}
            >
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z" />
                </svg>
            </button>
        </div>
    );
};

export default ImageSlider;
