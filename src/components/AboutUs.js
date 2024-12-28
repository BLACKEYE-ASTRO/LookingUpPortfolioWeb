import React from 'react'
import event1 from "../assets/img/ap.png";
import event2 from "../assets/img/event2.jpg";
import event3 from "../assets/img/event3.jpg";
import event4 from "../assets/img/event4.jpg";


export default function Main() {
  return (
    <div className='max-w-[1240px] mx-auto my-10'>
      <div className=' flex flex-col justify-center m-2'>
        <h1 className='font-bold text-4xl text-[#00031b]'>Looking Up Business Solution</h1>
        <p className='my-2 text-lg'>
          Looking up Pharma had Attend as the leading Pharma Exhibition for products and
          services along the entire value chain in niche segments within the Pharma industry.
          Looking Up Pharma present s an oppor tuni ty to the Pharmaceutical community to pick
          up on the latest industry trends, innovations and do business with Pharma.
        </p>
        <p className='my-2 text-lg'>
          The Looking up Pharma team has been
          working closely with the Indian Pharma industry,
          were part of the organizing body of various
          industrial trade shows in major Pharma Events in
          India such as AMPTECH INDIA, PHARMA TECH
          EXPO, B2B PHARMA EXPO,PHARMALAYTICA
          EXPO,PMEC,. etc...
        </p>
      </div>
      <div className=' flex flex-col justify-center m-2'>
        <h1 className='font-bold text-4xl text-[#00031b]'>OPPORTUNITIES & CONNECTIONS</h1>
        <p className='my-2 text-lg'>
          We provide opportunities for those who want to launch new machines and
          products in the Pharma & Lab industries and also good opportunities for visitors who are
          looking for new manufacturing objects for their pharmaceutical companies and
          research lab.
        </p>
        <p className='my-2 text-lg'>
          I Hope you will find this directory extremely informative helpful in discovering
          the Pharma Industry & Scientific lab supply available in your search for Solution
          Provider. I hope you and your organization reach their goals by working together
          effectively.
        </p>
      </div>
      <div className='md:grid grid-cols-2'>
        <div className=' col-span-1 m-2'>
          <img src={event1} alt='Event' className='md:w-[700px] md:h-[420px] w-full' />
        </div>
        <div className=' col-span-1 m-2'>
          <img src={event3} alt='Event' className='md:w-[700px] md:h-[420px] w-full ' />
        </div>
      </div>
      <div className='md:grid grid-cols-2'>
        <div className=' col-span-1 m-2'>
          <img src={event2} alt='Event' className='md:w-[700px] md:h-[420px] w-full' />
        </div>
        <div className=' col-span-1 m-2'>
          <img src={event4} alt='Event' className='md:w-[700px] md:h-[420px] w-full' />
        </div>
      </div>
    </div>
  )
}
