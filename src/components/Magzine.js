import React from 'react';
import MagazineEdition from './MagazineEdition';

export default function Magazine() {
  const description = `The Looking up Pharma team has been working closely with the Indian Pharma industry, were part of the organizing body of various industrial trade shows in major Pharma Events in India such as AMPTECH INDIA, PHARMA TECH EXPO, B2B PHARMA EXPO, PHARMALAYTICA EXPO, SAUDI INTERNATIONAL EXPO, PHARMA TECH TANZANIA EXPO, PHARMA TECH NEPAL, UGANDA, etc.`;

  const editions = [
    { title: "Looking Up Pharma 1st Edition", pdfURL: "/pdf/Fifth.pdf" },
    { title: "Looking Up Pharma 2nd Edition", pdfURL: "/pdf/Second.pdf" },
    { title: "Looking Up Pharma 3rd Edition", pdfURL: "/pdf/Third.pdf" },
    { title: "Looking Up Pharma 4th Edition", pdfURL: "/pdf/Fourth.pdf" },
    { title: "Looking Up Pharma 5th Edition", pdfURL: "/pdf/Fifth.pdf" },
    { title: "Looking Up Pharma 6th Edition", pdfURL: "/pdf/Sixth.pdf" },
  ];

  return (
    <div className='max-w-[1240px] mx-auto my-5'>
      {editions.map((edition, index) => (
        <MagazineEdition
          key={index}
          title={edition.title}
          pdfURL={edition.pdfURL}
          description={description}
        />
      ))}
    </div>
  );
}
