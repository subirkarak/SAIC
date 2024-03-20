/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, useEffect } from 'react';
import { images } from '@/constants';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Carosol = () => {
    
        const [currentImage, setCurrentImage] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
          }, 3000); 
      
          return () => {
            clearInterval(interval); 
          };
        }, [images.length]);
      
        const goToPrevious = () => {
          setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
        };
      
        const goToNext = () => {
          setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        };
  return (
    <div>
<div className="relative">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carousel Image ${index}`}
          className={`absolute -mt-8 md:-mt-0 top-0 left-0 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
        />
      ))}

      
  
      
    </div>
    <div className='block absolute top-[35%] md:top-[50%] -translate-x-0 translate-y-[-50%] left-12 md:left-24 drop-shadow-2xl  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={goToPrevious} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='block absolute top-[35%] md:top-[50%] -translate-x-0 translate-y-[-50%] right-12 md:right-24 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={goToNext} size={30} />
          </div>
    </div>
  )
}

export default Carosol