import React from 'react';
import PDFViewer from './PDFViewer';


export default function Magzine() {

  return (
    <>
      <div className='max-w-[1240px] mx-auto my-5'>
        <div className='md:grid grid-cols-2 p-10'>
          <div className='col-span-1 '>
            <h1 className='text-[#00031b] font-bold p-5 text-2xl text-center'>Looking Up Pharma 1st Edition</h1>
            <div>
              <PDFViewer pdfURL={"./pdf/First.pdf"} />
            </div>
          </div>
          <div className='col-span-1 flex flex-col justify-center'>
            <p className='p-2 md:text-xl'>
              The Looking up Pharma team has been
              working closely with the Indian Pharma industry,
              were part of the organizing body of various
              industrial trade shows in major Pharma Events in
              India such as AMPTECH INDIA, PHARMA TECH
              EXPO, B2B PHARMA EXPO,PHARMALAYTICA
              EXPO,SAUDI INTERNATINAL EXPO,PHARMA TECH TANZANIYA EXPO,PHARMA TECH NEPAL,UGANDA,. etc...
            </p>
          </div>
        </div>
        <div className='md:grid grid-cols-2 p-10'>
          <div className='col-span-1 '>
            <h1 className='text-[#00031b] font-bold p-5 text-2xl text-center'>Looking Up Pharma 2nd Edition</h1>
            <PDFViewer pdfURL={"./pdf/Second.pdf"} />
          </div>
          <div className='col-span-1 flex flex-col justify-center'>
            <p className='p-2 md:text-xl'>
              The Looking up Pharma team has been
              working closely with the Indian Pharma industry,
              were part of the organizing body of various
              industrial trade shows in major Pharma Events in
              India such as AMPTECH INDIA, PHARMA TECH
              EXPO, B2B PHARMA EXPO,PHARMALAYTICA
              EXPO,SAUDI INTERNATINAL EXPO,PHARMA TECH TANZANIYA EXPO,PHARMA TECH NEPAL,UGANDA,. etc...
            </p>
          </div>
        </div>
        <div className='md:grid grid-cols-2 p-10'>
          <div className='col-span-1 '>
            <h1 className='text-[#00031b] font-bold p-5 text-2xl text-center'>Looking Up Pharma 3rd Edition</h1>
            <PDFViewer pdfURL={"./pdf/Third.pdf"} />
          </div>
          <div className='col-span-1 flex flex-col justify-center'>
            <p className='p-2 md:text-xl'>
              The Looking up Pharma team has been
              working closely with the Indian Pharma industry,
              were part of the organizing body of various
              industrial trade shows in major Pharma Events in
              India such as AMPTECH INDIA, PHARMA TECH
              EXPO, B2B PHARMA EXPO,PHARMALAYTICA
              EXPO,SAUDI INTERNATINAL EXPO,PHARMA TECH TANZANIYA EXPO,PHARMA TECH NEPAL,UGANDA,. etc...
            </p>
          </div>
        </div>
        <div className='md:grid grid-cols-2 p-10'>
          <div className='col-span-1 '>
            <h1 className='text-[#00031b] font-bold p-5 text-2xl text-center'>Looking Up Pharma 4th Edition</h1>
            <PDFViewer pdfURL={"./pdf/Fourth.pdf"} />
          </div>
          <div className='col-span-1 flex flex-col justify-center'>
            <p className='p-2 md:text-xl'>
              The Looking up Pharma team has been
              working closely with the Indian Pharma industry,
              were part of the organizing body of various
              industrial trade shows in major Pharma Events in
              India such as AMPTECH INDIA, PHARMA TECH
              EXPO, B2B PHARMA EXPO,PHARMALAYTICA
              EXPO,SAUDI INTERNATINAL EXPO,PHARMA TECH TANZANIYA EXPO,PHARMA TECH NEPAL,UGANDA,. etc...
            </p>
          </div>
        </div>
        <div className='md:grid grid-cols-2 p-10'>
          <div className='col-span-1 '>
            <h1 className='text-[#00031b] font-bold p-5 text-2xl text-center'>Looking Up Pharma 5th Edition</h1>
            <PDFViewer pdfURL={"./pdf/Fifth.pdf"} />
          </div>
          <div className='col-span-1 flex flex-col justify-center'>
            <p className='p-2 md:text-xl'>
              The Looking up Pharma team has been
              working closely with the Indian Pharma industry,
              were part of the organizing body of various
              industrial trade shows in major Pharma Events in
              India such as AMPTECH INDIA, PHARMA TECH
              EXPO, B2B PHARMA EXPO,PHARMALAYTICA
              EXPO,SAUDI INTERNATINAL EXPO,PHARMA TECH TANZANIYA EXPO,PHARMA TECH NEPAL,UGANDA,. etc...
            </p>
          </div>
        </div>
        <div className='md:grid grid-cols-2 p-10'>
          <div className='col-span-1 '>
            <h1 className='text-[#00031b] font-bold p-5 text-2xl text-center'>Looking Up Pharma 6th Edition</h1>
            <PDFViewer pdfURL={"./pdf/Sixth.pdf"} />
          </div>
          <div className='col-span-1 flex flex-col justify-center'>
            <p className='p-2 md:text-xl'>
              The Looking up Pharma team has been
              working closely with the Indian Pharma industry,
              were part of the organizing body of various
              industrial trade shows in major Pharma Events in
              India such as AMPTECH INDIA, PHARMA TECH
              EXPO, B2B PHARMA EXPO,PHARMALAYTICA
              EXPO,SAUDI INTERNATINAL EXPO,PHARMA TECH TANZANIYA EXPO,PHARMA TECH NEPAL,UGANDA,. etc...
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
