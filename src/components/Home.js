import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import m1 from "../assests/img/LookingUp_Brochure Edition 1-min.jpg";
import m2 from "../assests/img/LookingUp_Brochure Edition 2-min.jpg";
import m3 from "../assests/img/LookingUp_Brochure Edition 3-min.jpg";
import m4 from "../assests/img/LookingUp_Brochure Edition 4-min.jpg";
import m5 from "../assests/img/LookingUp_Brochure Edition 5-min.jpg";
import { Banner } from './Banner';
import comp1 from "../assests/companies/Looking Up_Co. Logo_page-0001.jpg";
import comp2 from "../assests/companies/Looking Up_Co. Logo_page-0002.jpg";
import comp3 from "../assests/companies/Looking Up_Co. Logo_page-0003.jpg";
import comp4 from "../assests/companies/Looking Up_Co. Logo_page-0004.jpg";
import comp5 from "../assests/companies/Looking Up_Co. Logo_page-0005.jpg";
import comp6 from "../assests/companies/Looking Up_Co. Logo_page-0006.jpg";
import comp7 from "../assests/companies/Looking Up_Co. Logo_page-0007.jpg";
import comp8 from "../assests/companies/Looking Up_Co. Logo_page-0008.jpg";
import comp9 from "../assests/companies/Looking Up_Co. Logo_page-0009.jpg";
import comp10 from "../assests/companies/Looking Up_Co. Logo_page-0010.jpg";
import comp11 from "../assests/companies/Looking Up_Co. Logo_page-0011.jpg";
import comp12 from "../assests/companies/Looking Up_Co. Logo_page-0012.jpg";
import comp13 from "../assests/companies/Looking Up_Co. Logo_page-0013.jpg";
import comp14 from "../assests/companies/Looking Up_Co. Logo_page-0014.jpg";
import comp15 from "../assests/companies/Looking Up_Co. Logo_page-0015.jpg";
import comp16 from "../assests/companies/Looking Up_Co. Logo_page-0016.jpg";
import comp17 from "../assests/companies/Looking Up_Co. Logo_page-0017.jpg";
import comp18 from "../assests/companies/Looking Up_Co. Logo_page-0018.jpg";
import comp19 from "../assests/companies/Looking Up_Co. Logo_page-0019.jpg";
import comp20 from "../assests/companies/Looking Up_Co. Logo_page-0020.jpg";
import comp21 from "../assests/companies/Looking Up_Co. Logo_page-0021.jpg";
import comp22 from "../assests/companies/Looking Up_Co. Logo_page-0022.jpg";
import comp23 from "../assests/companies/Looking Up_Co. Logo_page-0023.jpg";
import comp24 from "../assests/companies/Looking Up_Co. Logo_page-0024.jpg";
import comp25 from "../assests/companies/Looking Up_Co. Logo_page-0025.jpg";
import comp26 from "../assests/companies/Looking Up_Co. Logo_page-0026.jpg";
import comp27 from "../assests/companies/Looking Up_Co. Logo_page-0027.jpg";
import comp28 from "../assests/companies/Looking Up_Co. Logo_page-0028.jpg";
import comp29 from "../assests/companies/Looking Up_Co. Logo_page-0029.jpg";

const images = [comp1, comp2, comp3, comp4, comp5, comp6, comp7, comp8, comp9, comp10, comp11, comp12, comp13, comp14, comp15, comp16, comp17, comp18, comp19, comp20, comp21, comp22, comp23, comp24, comp25, comp26, comp27, comp28, comp29].map((image) => ({
    image
}));

export default function Home() {
  return (
    <>
      <div className="bg-[url('/src/assests/img/background.jpg')] bg-cover bg-center w-full py-32 md:py-60">
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
