import React from 'react'
import ImageSlider from './ImageSlider';
import upevent3 from "../assests/img/pharma_live_expo-min.jpg";
import upevent4 from "../assests/img/amp_tech_haridwar-min.jpg";
import upevent2 from "../assests/img/Looking up Media partner.jpg";
import upevent1 from "../assests/img/nepal-pharma-dec23_page-0001.jpg";
import upevent5 from "../assests/img/ugandapharma2024-VB_page-0001.jpg";
import upevent6 from "../assests/img/12-14_April_Event.jpg";
import upevent7 from "../assests/img/25-26_April_Event.jpeg";
import upevent8 from "../assests/img/26_April_Event.jpeg";

export default function UpcomingEvents() {
  const images = [upevent6,upevent7,upevent8,upevent5, upevent4, upevent3, upevent2,upevent1];

  return (
    <>
      <div className="App flex justify-center">
        <ImageSlider images={images}  />
      </div>
    </>
  )
}
