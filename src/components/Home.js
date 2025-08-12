import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
// import newEvent from '../assets/img/PharmaTech & LabTech Expo Bengaluru December 2025-1.png';
import newEvent from "../assets/img/BHARAT HEALTH Advt.png"
import m1 from "../assets/img/LookingUp_Brochure Edition 1-min.jpg";
import m2 from "../assets/img/LookingUp_Brochure Edition 2-min.jpg";
import m3 from "../assets/img/LookingUp_Brochure Edition 3-min.jpg";
import m4 from "../assets/img/LookingUp_Brochure Edition 4-min.jpg";
import m5 from "../assets/img/LookingUp_Brochure Edition 5-min.jpg";
import { Banner } from './Banner';
import comp1 from "../assets/companies/Looking Up_Co. Logo_page-0031.png";
import comp2 from "../assets/companies/Looking Up_Co. Logo_page-0032.png";
import comp3 from "../assets/companies/Looking Up_Co. Logo_page-0033.png";
import comp4 from "../assets/companies/Looking Up_Co. Logo_page-0034.png";
import comp5 from "../assets/companies/Looking Up_Co. Logo_page-0005.png";
import comp6 from "../assets/companies/Looking Up_Co. Logo_page-0035.png";
import comp7 from "../assets/companies/Looking Up_Co. Logo_page-0030.png";
import comp8 from "../assets/companies/Looking Up_Co. Logo_page-0001.jpg";
import comp9 from "../assets/companies/Looking Up_Co. Logo_page-0002.jpg";
import comp10 from "../assets/companies/Looking Up_Co. Logo_page-0003.jpg";
import comp11 from "../assets/companies/Looking Up_Co. Logo_page-0004.jpg";
import comp12 from "../assets/companies/Looking Up_Co. Logo_page-0005.jpg";
import comp13 from "../assets/companies/Looking Up_Co. Logo_page-0006.jpg";
import comp14 from "../assets/companies/Looking Up_Co. Logo_page-0007.jpg";
import comp15 from "../assets/companies/Looking Up_Co. Logo_page-0008.jpg";
import comp16 from "../assets/companies/Looking Up_Co. Logo_page-0009.jpg";
import comp17 from "../assets/companies/Looking Up_Co. Logo_page-0029.jpg";
import comp18 from "../assets/companies/Looking Up_Co. Logo_page-0012.jpg";
import comp19 from "../assets/companies/Looking Up_Co. Logo_page-0013.jpg";
import comp20 from "../assets/companies/Looking Up_Co. Logo_page-0014.jpg";
import comp21 from "../assets/companies/Looking Up_Co. Logo_page-0015.jpg";
import comp22 from "../assets/companies/Looking Up_Co. Logo_page-0016.jpg";
import comp23 from "../assets/companies/Looking Up_Co. Logo_page-0017.jpg";
import comp24 from "../assets/companies/Looking Up_Co. Logo_page-0018.jpg";
import comp25 from "../assets/companies/Looking Up_Co. Logo_page-0019.jpg";
import comp26 from "../assets/companies/Looking Up_Co. Logo_page-0020.jpg";
import comp27 from "../assets/companies/Looking Up_Co. Logo_page-0021.jpg";
import comp28 from "../assets/companies/Looking Up_Co. Logo_page-0022.jpg";
import comp29 from "../assets/companies/Looking Up_Co. Logo_page-0023.jpg";
import comp30 from "../assets/companies/Looking Up_Co. Logo_page-0024.jpg";
import comp31 from "../assets/companies/Looking Up_Co. Logo_page-0025.jpg";
import comp32 from "../assets/companies/Looking Up_Co. Logo_page-0026.jpg";
import comp33 from "../assets/companies/Looking Up_Co. Logo_page-0027.jpg";
import comp34 from "../assets/companies/Looking Up_Co. Logo_page-0028.jpg";
import comp35 from "../assets/companies/Looking Up_Co. Logo_page-0011.jpg";

const images = [comp11, comp12, comp13, comp14, comp15, comp16, comp17, comp18, comp19, comp20, comp21, comp22, comp23, comp24, comp25, comp26, comp27, comp28, comp29, comp30, comp31, comp32, comp33, comp34, comp35, comp1, comp2, comp3, comp4, comp5, comp6, comp7, comp8, comp9, comp10].map((image) => ({
  image
}));

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};


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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2">
          <div className="relative bg-white  rounded-lg max-w-md w-full shadow-lg">
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-400 text-xl font-bold w-10 h-10"
            >
              &times;
            </button>
            <img
              src={newEvent} 
              alt="Popup"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      )} 
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="bg-[url('/src/assets/img/background.jpg')] bg-cover bg-center w-full py-32 md:py-60"
      >
        <div className="max-w-screen-lg mx-auto text-center font-bold px-4">
          <motion.h2
            variants={fadeUp}
            className="text-[#00031b] text-2xl md:text-4xl font-bold"
          >
            We Provide
          </motion.h2>
          <motion.h2
            variants={fadeUp}
            className="text-[#00031b] text-xl md:text-4xl md:py-2 font-bold"
          >
            Multiple Marketing Solutions.
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="text-xl md:text-4xl md:py-6 text-white font-bold"
          >
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
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-3 rounded-md text-lg md:text-xl mt-6"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-10"
      >
        <h1 className="text-2xl md:text-4xl font-bold text-center text-[#00031b] underline mb-6">Our Brochures</h1>
        <div className="flex flex-col md:flex-row justify-around md:space-x-4 px-4">
          {[m1, m2].map((img, idx) => (
            <motion.div
              key={idx}
              className="p-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <img src={img} alt={`Brochure ${idx + 1}`} className="w-full max-w-md mx-auto rounded-lg shadow-md" />
              <h1 className="text-center font-semibold mt-2">LookingUp Brochure Edition {idx + 1}</h1>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mt-6">
          {[m3, m4, m5].map((img, idx) => (
            <motion.div
              key={idx + 2}
              className="p-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <img src={img} alt={`Brochure ${idx + 3}`} className="w-full max-w-md mx-auto rounded-lg shadow-md" />
              <h1 className="text-center font-semibold mt-2">LookingUp Brochure Edition {idx + 3}</h1>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-10"
      >
        <h1 className="text-2xl md:text-4xl font-bold text-center text-[#00031b] underline mb-6">Our Clients</h1>
        <Banner images={images} speed={8000} />
      </motion.section>
    </>
  );
}
