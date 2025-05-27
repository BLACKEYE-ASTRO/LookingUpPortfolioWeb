import React from 'react'
import logo from "../assets/img/logo-removebg-preview.png"
import { AiOutlineWhatsApp, AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { Link } from 'react-router-dom'

export default function Footer() {
  const sizeValue = 10 * 3;
  const year = new Date().getFullYear();

  return (
    <>
      <footer class="bg-[#00031b] shadow ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <Link to="https://lookingupmarketing.in/" class="flex items-center mb-4 sm:mb-0">
              <img src={logo} class="h-8 mr-3" alt=" Logo" />
              <span class="self-center md:text-2xl font-semibold whitespace-nowrap text-gray-500 ">Looking Up Business Solutionsn</span>
            </Link>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
              <li>
                <Link to="/about-us" class="mr-4 hover:underline md:mr-6 ">About</Link>
              </li>
              <li>
                <Link to="/e-magzine" class="mr-4 hover:underline md:mr-6">Magzine</Link>
              </li>
              <li>
                <Link to="/advertise-with-us" class="mr-4 hover:underline md:mr-6 ">Adertise with us</Link>
              </li>
              <li>
                <Link to="/contact-us" class="hover:underline">Contact</Link>
              </li>
            </ul>
          </div> 
          <div className='lg:py-5'>
            <ul className='flex gap-3 lg:gap-10'>
              <li>
                <Link to='https://api.whatsapp.com/send?phone=8169372535'><AiOutlineWhatsApp size={sizeValue} color='white' /></Link>
              </li>
              <li>
                <Link to='https://www.facebook.com/profile.php?id=61551382415712&mibextid=ZbWKwL'><AiFillFacebook size={sizeValue} color='white' /></Link>
              </li>
              <li>
                <Link to='https://instagram.com/looking_up_business_solutions?igshid=NjIwNzIyMDk2Mg=='><AiFillInstagram size={sizeValue} color='white' /></Link>
              </li>
              <li>
                <Link to='https://www.linkedin.com/company/100051150/admin/feed/posts/ '><AiFillLinkedin size={sizeValue} color='white' /></Link>
              </li>
              <li>
                <Link to='https://twitter.com/lookinguppharma'><AiFillTwitterCircle size={sizeValue} color='white' /></Link>
              </li>
              <li>
                <Link to='https://in.pinterest.com/looking_up_business_solutions/ '><BsPinterest size={sizeValue} color='white' /></Link>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto lg:my-5" />
          <span class="block text-sm text-gray-500 sm:text-center ">©{year} <Link to="https://lookingupmarketing.in/" class="hover:underline">Looking Up Business Solutions</Link>. All Rights Reserved.</span>
        </div>
      </footer>
    </>
  )
}

