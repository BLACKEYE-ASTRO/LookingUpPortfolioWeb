import React from 'react';
import ImageSlider from './ImageSlider';
import upevent1 from "../assests/img/nepal-pharma-dec23_page-0001.jpg";
import upevent2 from "../assests/img/Looking up Media partner.jpg";
import upevent3 from "../assests/img/pharma_live_expo-min.jpg";
import upevent4 from "../assests/img/amp_tech_haridwar-min.jpg";
import upevent5 from "../assests/img/ugandapharma2024-VB_page-0001.jpg";
import upevent6 from "../assests/img/26_April_Event.jpeg";
import upevent7 from "../assests/img/25-26_April_Event.jpeg";
import upevent8 from "../assests/img/12-14_April_Event.jpg";
import upevent9 from "../assests/img/April2025-17-18-19.jpeg";
import upevent10 from "../assests/img/Feb2025-20-21-22.jpeg";
import upevent11 from "../assests/img/Oct-17-19.jpeg";
import upevent12 from "../assests/img/August-30-31.jpeg";
import upevent13 from "../assests/img/August-29-30-31.jpeg";
import upevent14 from "../assests/img/August-8-9-10.jpeg";

export default function UpcomingEvents() {
  const images = [
    upevent14, upevent13, upevent12, upevent11, upevent10, upevent9,
    upevent8, upevent7, upevent6, upevent5, upevent4, upevent3, upevent2, upevent1
  ];

  return (
    <div className="flex justify-center my-8">
      <ImageSlider images={images} />
    </div>
  );
}
