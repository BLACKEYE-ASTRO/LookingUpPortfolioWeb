import React from 'react';
import ImageSlider from './ImageSlider';
// import upevent1 from "../assets/img/nepal-pharma-dec23_page-0001.jpg";
// import upevent2 from "../assets/img/Looking up Media partner.jpg";
// import upevent3 from "../assets/img/pharma_live_expo-min.jpg";
// import upevent4 from "../assets/img/amp_tech_haridwar-min.jpg";
// import upevent5 from "../assets/img/ugandapharma2024-VB_page-0001.jpg";
// import upevent6 from "../assets/img/26_April_Event.jpeg";
// import upevent7 from "../assets/img/25-26_April_Event.jpeg";
// import upevent8 from "../assets/img/12-14_April_Event.jpg";
// import upevent9 from "../assets/img/April2025-17-18-19.jpeg";
// import upevent10 from "../assets/img/Feb2025-20-21-22.jpeg";
// import upevent11 from "../assets/img/Oct-17-19.jpeg";
// import upevent12 from "../assets/img/August-30-31.jpeg";
// import upevent13 from "../assets/img/August-29-30-31.jpeg";
// import upevent14 from "../assets/img/August-8-9-10.jpeg";


import upevent1 from "../assets/img/10_11_12_April2025_Event.jpg";
import upevent2 from "../assets/img/10_11_12_April2025_Event2.jpg";
import upevent3 from "../assets/img/17_18_19_April2025_Event.jpg";
import upevent4 from "../assets/img/17_18_19_April2025_Event2.jpg";




export default function UpcomingEvents() {
  const images = [
     upevent1, upevent2, upevent3, upevent4
  ];

  return (
    <div className="flex justify-center my-8">
      <ImageSlider images={images} />
    </div>
  );
}
