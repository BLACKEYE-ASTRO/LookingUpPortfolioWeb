import React from 'react';
import { Link } from 'react-router-dom';
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

const companies = [
  { id: 1, img: comp1, link: "https://airjetmill.com/" },
  { id: 2, img: comp2, link: "http://medipharma.in/" },
  { id: 3, img: comp3, link: "https://www.medlabscientific.com/" },
  { id: 4, img: comp4, link: "https://www.malharpharmatech.com/" },
  { id: 5, img: comp5, link: "https://www.varunfabricators.com/" },
  { id: 6, img: comp6, link: "https://technicpharmaequipments.in/" },
  { id: 7, img: comp7, link: "http://www.artisurgicals.com/" },
  { id: 8, img: comp8, link: "https://ultrafil.net/" },
  { id: 9, img: comp9, link: "https://capproequipment.com/" },
  { id: 10, img: comp10, link: "https://erfolgganar.com/" },
  { id: 11, img: comp11, link: "https://vmservices.co.in/" },
  { id: 12, img: comp12, link: "https://asvpharmatech.com/" },
  { id: 13, img: comp13, link: "https://www.alproequipments.com/" },
  { id: 14, img: comp14, link: "#" }, // No link provided for comp14
  { id: 15, img: comp15, link: "http://www.anmolpharma.com/" },
  { id: 16, img: comp16, link: "https://qualitycleanequipments.com/" },
  { id: 17, img: comp17, link: "https://www.capfilltechnologies.com" },
  { id: 18, img: comp18, link: "https://www.sweedlesteel.com/" },
  { id: 19, img: comp19, link: "https://www.kingcraftcaster.com/" },
  { id: 20, img: comp20, link: "#" }, // No link provided for comp20
  { id: 21, img: comp21, link: "https://www.dbinstruments.net/" },
  { id: 22, img: comp22, link: "https://www.shreeshaktipharma.in/" },
  { id: 23, img: comp23, link: "http://vkengineers.com/" },
  { id: 24, img: comp24, link: "http://www.pamtech.co.in/" },
  { id: 25, img: comp25, link: "#" }, // No link provided for comp25
  { id: 26, img: comp26, link: "https://www.samarthelectronics.com/" },
  { id: 27, img: comp27, link: "https://www.sdaquafine.com" },
  { id: 28, img: comp28, link: "https://indiamart.com/astro-mech" },
  { id: 29, img: comp29, link: "https://acescientificindia.com/" },
  { id: 30, img: comp30, link: "https://www.shashvathfabricators.com/" },
  { id: 31, img: comp31, link: "http://www.k2drafters.in/" },
  { id: 32, img: comp32, link: "#" }, // No link provided for comp32
  { id: 33, img: comp33, link: "https://www.ambikasteelfurniture.co.in/" },
  { id: 34, img: comp34, link: "http://www.rjpalsteel.in/" },
  { id: 35, img: comp35, link: "https://www.capfilltechnologies.com" },
];

export default function OurAdvertiser() {
  return (
    <div className='max-w-[1240px] mx-auto my-5 p-5'>
      <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {companies.map((company) => (
          <div key={company.id} className='m-2'>
            {company.link !== "#" ? (
              <Link to={company.link} target='_blank' rel='noopener noreferrer'>
                <img src={company.img} alt={`Company ${company.id}`} className='w-full h-auto object-contain transition-transform transform hover:scale-105' />
              </Link>
            ) : (
              <img src={company.img} alt={`Company ${company.id}`} className='w-full h-auto object-contain transition-transform transform hover:scale-105' />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
