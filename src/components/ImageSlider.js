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
        <div className="flex justify-center p-10">
            <button
                className="absolute top-[500px] md:top-[600px] left-1 md:left-[200px] transform -translate-y-1/2 text-white bg-white  py-2 px-4 rounded-md"
                onClick={prevSlide}
            >
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z" />
                </svg>
            </button>
            <button
                className="absolute top-[500px] md:top-[600px] right-1 md:right-[200px] transform -translate-y-1/2 text-white bg-white py-2 px-4 rounded-md"
                onClick={nextSlide}
            >
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z" />
                </svg>
            </button>
            <img
                className=" w-full md:h-[800px] object-cover"
                src={images[currentImage]}
                alt={`Slide ${currentImage}`} />

        </div>
    );
};

export default ImageSlider;