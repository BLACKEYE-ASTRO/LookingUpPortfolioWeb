import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 mt-1">
      <motion.h1
        className="text-4xl font-bold text-center mb-10 text-[#00031b]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#00031b]">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg text-[#00031b]">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg text-[#00031b]">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg text-[#00031b]">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                rows="4"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#00031b] text-white font-semibold rounded-md hover:bg-[#1a1c2d] transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Google Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-[#00031b]">
            Our Location
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120548.02589151851!2d72.79126122851046!3d19.233348030950037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b960c9537ffb%3A0x300b9e3163133141!2sSai%20Darshan%20Co-operative%20Housing%20Society!5e0!3m2!1sen!2sin!4v1748376621127!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded-md"
          ></iframe>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#00031b]">
            Our Contact Information
          </h2>

          <motion.div
            className="flex items-center space-x-4 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaPhoneAlt className="text-[#00031b] w-6 h-6" />
            <div>
              <p className="text-lg text-[#00031b]">Phone</p>
              <h2 className="text-center font-semibold text-[#00031b]">
                +91 8169372535
              </h2>
              <h2 className="text-center font-semibold text-[#00031b]">
                +91 9653677347
              </h2>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaEnvelope className="text-[#00031b] w-6 h-6" />
            <div>
              <p className="text-lg text-[#00031b]">Email</p>
              <p className="text-[#00031b]">lookingupmarketing1@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4 mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaMapMarkerAlt className="text-[#00031b] w-6 h-6" />
            <div>
              <p className="text-lg text-[#00031b]">Address</p>
              <p className="text-[#00031b]">
                135-D/3, Sai Sree Co. Op Society, Old Mahada Colony, Vasant
                Vihar, Pokran Road No-2, Thane(West)-400610
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
