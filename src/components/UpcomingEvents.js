import React from 'react';
import { motion } from 'framer-motion';
import ImageSlider from './ImageSlider';

import upevent1 from "../assets/img/PharmaTech & LabTech Expo Bengaluru December 2025-1.png"
import upevent2 from "../assets/img/10_11_12_April2025_Event.jpg";
import upevent3 from "../assets/img/10_11_12_April2025_Event2.jpg";
import upevent4 from "../assets/img/17_18_19_April2025_Event.jpg";
import upevent5 from "../assets/img/17_18_19_April2025_Event2.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function UpcomingEvents() {
  const images = [upevent1, upevent2, upevent3, upevent4,upevent5];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="flex justify-center my-8"
    >
      <ImageSlider images={images} />
    </motion.div>
  );
}
