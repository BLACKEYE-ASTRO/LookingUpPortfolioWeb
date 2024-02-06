import React from 'react'
import ImageSlider from './ImageSlider';
import upevent3 from "../assests/img/pharma_live_expo-min.jpg";
import upevent4 from "../assests/img/amp_tech_haridwar-min.jpg";
import upevent2 from "../assests/img/Looking up Media partner.jpg";
import upevent1 from "../assests/img/nepal-pharma-dec23_page-0001.jpg";
import upevent5 from "../assests/img/ugandapharma2024-VB_page-0001.jpg";

export default function UpcomingEvents() {
  const images = [upevent5, upevent4, upevent3, upevent2,upevent1];

  return (
    <>
      <div className="App flex justify-center">
        <ImageSlider images={images}  />
      </div>
    </>
  )
}
