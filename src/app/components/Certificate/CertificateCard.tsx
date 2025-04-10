import Image, { StaticImageData } from 'next/image'
import React from 'react'
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
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-5 space-y-4 md:space-y-0 md:space-x-8 mx-2 md:gap-6">
      <div className="flex flex-col gap-2 w-full">
        <h2 className="font-bold max-w-50 text-2xl">{title}</h2>
        <p className="text-[12px] w-90 md:text-sm  md:w-50  lg:text-xl lg:w-130" >{description}</p>
        <Link href="#" className='underline underline-offset-1 text-blue-500 flex md:justify-end hover:text-gray-500'>View Image</Link>
      </div>
      <Image
        src={imageSrc}
        alt={altText}
        height={300}
        width={500}
        className="rounded-xl shadow-xl shadow-gray-400"
      />
    </div>
  );
};

export default CertificateCard;