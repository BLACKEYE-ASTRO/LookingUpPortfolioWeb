import React from 'react';
import PDFViewer from './PDFViewer';

function MagazineEdition({ title, pdfURL, description }) {
  return (
    <div className='md:grid grid-cols-2 p-5 md:p-10'>
      <div className='col-span-1'>
        <h1 className='text-[#00031b] font-bold p-5 text-xl md:text-2xl text-center'>{title}</h1>
        <PDFViewer pdfURL={pdfURL} />
      </div>
      <div className='col-span-1 flex flex-col justify-center mt-4 md:mt-0'>
        <p className='p-2 text-base md:text-xl'>{description}</p>
      </div>
    </div>
  );
}

export default MagazineEdition;
