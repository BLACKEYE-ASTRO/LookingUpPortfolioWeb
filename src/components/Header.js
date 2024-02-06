import React, { useState } from 'react';
import logo from "../assests/img/logo.jpg";
import { AiOutlineWhatsApp, AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { Link } from "react-router-dom";


const Navbar = () => {

    const [navBtn, setNavBtn] = useState("hidden");
    const [navBtn2, setNavBtn2] = useState("block");
    const [navMenu, setNavMenu] = useState("hidden");


    const toggleNavMenu = () => {
        if (navBtn === "block") {
            setNavBtn('hidden');
            setNavBtn2('block');
            setNavMenu('hidden');
        }
        else {
            setNavBtn('block');
            setNavBtn2('hidden');
            setNavMenu('block');
        }
    }

    const closeNavMenu = () => {
        setNavBtn('hidden');
        setNavBtn2('block');
        setNavMenu('hidden');
    }

    const sizeValue = 10 * 3;
    return (
        <>
            <div className='sticky top-0 bg-white z-40'>
                <div className='flex justify-between items-center md:mr-[150px]'>
                    <div className='flex w-[150px] ml-[50px] md:w-[200px] md:ml-[150px]'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <ul className='hidden md:flex  md:gap-10'>
                            <li>
                                <Link to='https://api.whatsapp.com/send?phone=8169372535'><AiOutlineWhatsApp size={sizeValue} /></Link>
                            </li>
                            <li>
                                <Link to='https://www.facebook.com/profile.php?id=61551382415712&mibextid=ZbWKwL'><AiFillFacebook size={sizeValue} /></Link>
                            </li>
                            <li>
                                <Link to='https://instagram.com/looking_up_business_solutions?igshid=NjIwNzIyMDk2Mg=='><AiFillInstagram size={sizeValue} /></Link>
                            </li>
                            <li>
                                <Link to='https://www.linkedin.com/company/100051150/admin/feed/posts/ '><AiFillLinkedin size={sizeValue} /></Link>
                            </li>
                            <li>
                                <Link to='https://twitter.com/lookinguppharma'><AiFillTwitterCircle size={sizeValue} /></Link>
                            </li>
                            <li>
                                <Link to='https://in.pinterest.com/looking_up_business_solutions/ '><BsPinterest size={sizeValue} /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='bg-[#b8eeff] flex p-4 text-[#00031b] font-medium text-xl justify-between'>
                    <button
                        type="button"
                        onClick={toggleNavMenu}
                        className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-gray-400 ring-gray-500 ring-inset outline-none ring-1 transition-transform ease-in-out duration-500 "
                    >

                        <svg
                            className={`${navBtn2} h-6 w-6 transform rotate-0`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>

                        <svg
                            className={`${navBtn} h-6 w-6 transform rotate-0`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className='hidden md:flex justify-center items-center w-full'>
                        <div className='flex  gap-10'>
                            <Link to={'/'} className='hover:underline hover:duration-300 cursor-pointer'>
                                Home</Link>
                            <Link to={'/about-us'} className='hover:underline hover:duration-300 cursor-pointer'>
                                About US</Link>
                            <Link to={'e-magzine'} className='hover:underline hover:duration-300 cursor-pointer'>
                                E-Magzine</Link>
                            <Link to={'/upcoming-events'} className='hover:underline hover:duration-300 cursor-pointer'>
                                Upcoming Events</Link>
                            <Link to={'/advertise-with-us'} className='hover:underline hover:duration-300 cursor-pointer'>
                                Advertise with us</Link>
                            <Link to={'/our-advertiser'} className='hover:underline hover:duration-300 cursor-pointer'>
                                Our Advertiser</Link>
                            <Link to={'contact-us'} className='hover:underline hover:duration-300 cursor-pointer'>
                                Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${navMenu === 'hidden' ? '-translate-x-full' : 'translate-x-0'
                }  bg-white text-[#00031b] fixed md:hidden block transition ease-in-out duration-500 flex-col h-screen p-3 shadow w-60 z-30`}>
                <ul className=' gap-4 text-xl text-center justify-center w-full'>
                    <li className='py-3'><Link to='/' onClick={closeNavMenu}>Home</Link></li>
                    <li className='py-3'><Link to='/about-us' onClick={closeNavMenu}>About US</Link></li>
                    <li className='py-3'><Link to="/e-magzine" onClick={closeNavMenu}>E-Magzine</Link></li>
                    <li className='py-3'><Link to="/upcoming-events" onClick={closeNavMenu}>Upcoming Events</Link></li>
                    <li className='py-3'><Link to="/advertise-with-us" onClick={closeNavMenu}>Advertise with us</Link></li>
                    <li className='py-3'><Link to="/our-advertiser" onClick={closeNavMenu}>Our Advertiser</Link></li>
                    <li className='py-3'><Link to="/contact-us" onClick={closeNavMenu}>Contact Us</Link></li>
                </ul>
            </div>
            {/* <Outlet/> */}
        </>
    )
}

export default Navbar