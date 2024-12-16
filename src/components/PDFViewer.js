import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";

function PDFViewer({ pdfURL }) {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

  const validPdfURL = pdfURL.startsWith('/') ? pdfURL : `/${pdfURL}`;

  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = (offset) => {
    setPageNumber((prevPage) => {
      const newPage = prevPage + offset;
      if (newPage >= 1 && newPage <= numPages) {
        return newPage;
      }
      return prevPage;
    });
  };

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = validPdfURL;
    link.download = validPdfURL.split('/').pop();
    link.target = '_blank';

    link.click();
  };

  return (
    <div className='flex flex-col justify-center mb-8'>
      <div className='flex justify-center my-5'>
        <Document
          className="flex justify-center z-10"
          file={validPdfURL}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            className="border-slate-700 border rounded-lg overflow-hidden"
            width={300}
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
      <div className='-mt-20 flex items-center justify-center z-20'>
        <button className='px-2 py-1 mx-2 bg-gray-100 rounded-lg' onClick={() => changePage(-1)}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z" />
          </svg>
        </button>
        <span>Page {pageNumber}</span>
        <button className='px-2 py-1 mx-2 bg-gray-100 rounded-lg' onClick={() => changePage(1)}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z" />
          </svg>
        </button>
      </div>
      <button className='text-white bg-red-600 border border-black rounded-full p-2 z-20 w-[200px] mx-auto mt-10' onClick={handleDownload}>Download</button>
    </div>
  );
}

export default PDFViewer;
