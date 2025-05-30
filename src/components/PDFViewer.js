import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useInView } from 'react-intersection-observer';
import { GrPrevious, GrNext } from 'react-icons/gr';
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFViewer({ pdfURL }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = (offset) => {
    setPageNumber((prevPage) => {
      const newPage = prevPage + offset;
      return newPage >= 1 && newPage <= numPages ? newPage : prevPage;
    });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = pdfURL.split('/').pop();
    link.target = '_blank';
    link.click();
  };

  return (
    <div ref={ref} className='flex flex-col justify-center items-center mb-8'>
      {inView ? (
        <>
          <div className='my-5'>
            <Document file={pdfURL} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                className="border rounded-lg overflow-hidden"
                width={300}
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
          <div className='flex items-center space-x-4'>
            <button
              className='px-4 py-2 bg-gray-100 rounded-lg'
              onClick={() => changePage(-1)}
              disabled={pageNumber <= 1}
            >
              <GrPrevious />
            </button>
            <span>
              Page {pageNumber} / {numPages}
            </span>
            <button
              className='px-4 py-2 bg-gray-100 rounded-lg'
              onClick={() => changePage(1)}
              disabled={pageNumber >= numPages}
            >
              <GrNext />
            </button>
          </div>
          <button
            className='mt-4 px-6 py-2 bg-red-600 text-white rounded-full'
            onClick={handleDownload}
          >
            Download
          </button>
        </>
      ) : (
        <p className="text-gray-400 mt-10">Scroll to load PDF...</p>
      )}
    </div>
  );
}

export default PDFViewer;
