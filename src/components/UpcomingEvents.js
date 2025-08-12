import React from 'react';
import { motion } from 'framer-motion';
import ImageSlider from './ImageSlider';

import upevent1 from "../assets/img/BHARAT HEALTH Advt.png";
import upevent2 from "../assets/img/PharmaTech & LabTech Expo Bengaluru December 2025-1.png";
import upevent3 from "../assets/img/PharmaTech & LabTech Expo Gandhinagar 2025 A4-1.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function UpcomingEvents() {
  const images = [upevent1, upevent2, upevent3];

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
