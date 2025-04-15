"use client";
import Image, { StaticImageData } from 'next/image'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

interface CertificateCardProps {
  imageSrc: string | StaticImageData;
  altText: string;
  title: string;
  description: string;
}



const CertificateCard: React.FC<CertificateCardProps> = ({ 
  imageSrc, 
  altText, 
  title, 
  description, 
}) => {
  const [showImage, setShowImage] = useState(false);

  const handleViewClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    setShowImage(!showImage); 
  };


  useEffect(() => {
    if (showImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showImage]);
  

  return (
    <div className={`flex flex-col-reverse md:flex-row items-center justify-center gap-5 space-y-4 md:space-y-0 md:space-x-8 mx-2 md:gap-6`}>
      <div className="flex flex-col gap-2 w-full ">
        <h2 className="font-bold text-2xl md:text-right">{title}</h2>
        <p className="text-[12px] w-90 md:text-sm  md:w-50  lg:text-xl lg:w-130 md:text-right">
          {description}
        </p>
        <Link
          onClick={handleViewClick}
          href="#"
          className="underline underline-offset-1 text-blue-500 flex  hover:text-gray-500 md:justify-end"
        >
          View Image
        </Link>
      {showImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <button
            onClick={handleViewClick}
            className="absolute top-5 right-5 text-white z-50 cursor-pointer"
          >
            Close
          </button>
          <Image
            onClick={handleViewClick}
            src={imageSrc}
            alt={altText}
            height={600}
            width={800}
            className="p-4 w-300 rounded-xl cursor-pointer"
          />
        </div>
      )}
      </div>
      <Image
        onClick={handleViewClick}
        src={imageSrc}
        alt={altText}
        height={300}
        width={500}
        className="shadow-xl shadow-gray-400 cursor-pointer"
      />
    </div>
  );
};

export default CertificateCard;