import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/img/logo.jpg";
import {
    AiOutlineWhatsApp,
    AiFillLinkedin,
    AiFillFacebook,
    AiFillTwitterCircle,
    AiFillInstagram
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sizeValue = 30;

    const toggleNavMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const closeNavMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className='sticky top-0 bg-white z-40'>
                <div className='flex justify-between items-center md:mr-[150px]'>
                    <div className='flex w-[150px] ml-[50px] md:w-[200px] md:ml-[150px]'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <ul className='hidden md:flex md:gap-10'>
                            <li><Link to='https://api.whatsapp.com/send?phone=8169372535'><AiOutlineWhatsApp size={sizeValue} /></Link></li>
                            <li><Link to='https://www.facebook.com/profile.php?id=61551382415712&mibextid=ZbWKwL'><AiFillFacebook size={sizeValue} /></Link></li>
                            <li><Link to='https://instagram.com/looking_up_business_solutions?igshid=NjIwNzIyMDk2Mg=='><AiFillInstagram size={sizeValue} /></Link></li>
                            <li><Link to='https://www.linkedin.com/company/100051150/admin/feed/posts/'><AiFillLinkedin size={sizeValue} /></Link></li>
                            <li><Link to='https://twitter.com/lookinguppharma'><AiFillTwitterCircle size={sizeValue} /></Link></li>
                            <li><Link to='https://in.pinterest.com/looking_up_business_solutions/'><BsPinterest size={sizeValue} /></Link></li>
                        </ul>
                    </div>
                </div>

                <div className='bg-[#b8eeff] flex p-4 text-[#00031b] font-medium text-xl justify-between'>
                    <button
                        type="button"
                        onClick={toggleNavMenu}
                        className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-gray-400 ring-gray-500 ring-inset outline-none ring-1 transition-transform ease-in-out duration-500"
                    >
                        <AnimatePresence mode="wait">
                            {!isMenuOpen ? (
                                <motion.svg
                                    key="menu"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </motion.svg>
                            ) : (
                                <motion.svg
                                    key="close"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </motion.svg>
                            )}
                        </AnimatePresence>
                    </button>

                    <div className='hidden md:flex justify-center items-center w-full'>
                        <div className='flex gap-10'>
                            <Link to='/' className='hover:underline duration-300'>Home</Link>
                            <Link to='/about-us' className='hover:underline duration-300'>About US</Link>
                            <Link to='/e-magzine' className='hover:underline duration-300'>E-Magzine</Link>
                            <Link to='/upcoming-events' className='hover:underline duration-300'>Upcoming Events</Link>
                            <Link to='/advertise-with-us' className='hover:underline duration-300'>Advertise with us</Link>
                            <Link to='/our-advertiser' className='hover:underline duration-300'>Our Advertiser</Link>
                            <Link to='/contact-us' className='hover:underline duration-300'>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Nav with animation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.4 }}
                        className='fixed top-20 left-0 md:hidden z-30 h-screen w-60 bg-[#00031b] shadow text-white'
                    >
                        <ul className='text-xl text-center mt-20'>
                            <li className='py-3'><Link to='/' onClick={closeNavMenu}>Home</Link></li>
                            <li className='py-3'><Link to='/about-us' onClick={closeNavMenu}>About US</Link></li>
                            <li className='py-3'><Link to='/e-magzine' onClick={closeNavMenu}>E-Magzine</Link></li>
                            <li className='py-3'><Link to='/upcoming-events' onClick={closeNavMenu}>Upcoming Events</Link></li>
                            <li className='py-3'><Link to='/advertise-with-us' onClick={closeNavMenu}>Advertise with us</Link></li>
                            <li className='py-3'><Link to='/our-advertiser' onClick={closeNavMenu}>Our Advertiser</Link></li>
                            <li className='py-3'><Link to='/contact-us' onClick={closeNavMenu}>Contact Us</Link></li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
