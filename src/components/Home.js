import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import newEvent from '../assets/img/A4 Bengaluru 2025 1.png';
import m1 from "../assets/img/LookingUp_Brochure Edition 1-min.jpg";
import m2 from "../assets/img/LookingUp_Brochure Edition 2-min.jpg";
import m3 from "../assets/img/LookingUp_Brochure Edition 3-min.jpg";
import m4 from "../assets/img/LookingUp_Brochure Edition 4-min.jpg";
import m5 from "../assets/img/LookingUp_Brochure Edition 5-min.jpg";
import { Banner } from './Banner';
import comp1 from "../assets/companies/Looking Up_Co. Logo_page-0001.jpg";
// ... other imports ...

const images = [comp1, /* other images */].map((image) => ({
    image
}));

export default function Home() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    setIsPopupVisible(true); // Show popup when component mounts
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false); // Hide popup on close
  };

  return (
    <>
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg w-11/12 max-w-md mx-auto">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
            <img
              src={newEvent}
              alt="New Event"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      )}

      <div className="bg-[url('/src/assets/img/background.jpg')] bg-cover bg-center w-full py-32 md:py-60">
        <div className="max-w-screen-lg mx-auto text-center font-bold px-4">
          <h2 className="text-[#00031b] text-2xl md:text-4xl font-bold">We Provide</h2>
          <h2 className="text-[#00031b] text-xl md:text-4xl md:py-2 font-bold">Multiple Marketing Solutions.</h2>
          <div className="text-xl md:text-4xl md:py-6 text-white font-bold">
            <Typewriter
              words={[
                'A Complete Guideline For Pharma And Lab Industry',
                'Upgrade your business with us',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </div>
          <button className="bg-black text-white px-6 py-3 rounded-md text-lg md:text-xl">
            Get Started
          </button>
        </div>
      </div>

      <div className="py-10">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-[#00031b] underline">Our Brochures</h1>
        <div className="flex flex-col md:flex-row justify-around md:space-x-4 px-4">
          <div className="p-4">
            <img src={m1} alt="Brochure 1" className="w-full max-w-md mx-auto" />
            <h1 className="text-center font-semibold mt-2">LookingUp Brochure Edition 1</h1>
          </div>
          <div className="p-4">
            <img src={m2} alt="Brochure 2" className="w-full max-w-md mx-auto" />
            <h1 className="text-center font-semibold mt-2">LookingUp Brochure Edition 2</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          <div className="p-4">
            <img src={m3} alt="Brochure 3" className="w-full max-w-md mx-auto" />
            <h1 className="text-center font-semibold mt-2">LookingUp Brochure Edition 3</h1>
          </div>
          <div className="p-4">
            <img src={m4} alt="Brochure 4" className="w-full max-w-md mx-auto" />
            <h1 className="text-center font-semibold mt-2">LookingUp Brochure Edition 4</h1>
          </div>
          <div className="p-4">
            <img src={m5} alt="Brochure 5" className="w-full max-w-md mx-auto" />
            <h1 className="text-center font-semibold mt-2">LookingUp Brochure Edition 5</h1>
          </div>
        </div>
      </div>

      <div className="py-10">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-[#00031b] underline">Our Clients</h1>
        <Banner images={images} speed={5000} />
      </div>
    </>
  );
}
