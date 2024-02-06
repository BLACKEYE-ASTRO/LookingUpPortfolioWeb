import React from 'react'


export default function ContactUs() {
  return (
    <>
      <div className='max-w-[1240px] mx-auto my-10'>
        <div className='md:grid grid-cols-3 md:px-[50px]'>
          <div className='col-span-1'>
            <h1 className='text-3xl text-[#00031b] text-center font-semibold py-10'>Our Office Address</h1>
            <p className='text-center font-semibold'>135-D/3,Sai Sree Co. Op Society,Old Mahada Colony,Vasant Vihar,Pokran Road No-2,Thane(West)-400607</p>
          </div>
          <div className='col-span-1 p-10'>
            <h1 className='text-3xl text-[#00031b] text-center font-semibold py-10'>Phone</h1>
            <h2 className='text-center font-semibold'>+91 8169372535</h2>
            <h2 className='text-center font-semibold'>+91 9653677347</h2>
          </div>
          <div className='col-span-1 p-10'>
            <h1 className='text-3xl text-[#00031b] text-center font-semibold py-10'>Email</h1>
            <h2 className='text-center font-semibold'>lookingupmarketing1@gmail.com</h2>
          </div>
        </div>
      </div>
    </>
  )
}
