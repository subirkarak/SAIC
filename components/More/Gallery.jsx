"use client"
import React, { useState } from 'react';
const imagesData = [
    {
      name: 'EAL by Prof. Bikramjit Basu',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/17.jpg',
    },
    {
      name: 'EAL by Prof. S.k. Saha',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/18.jpg',
    },
    {
      name: 'EAL by Ramesh Kotwal',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/19.jpg',
    },
    {
      name: 'Eminent Alumni Interaction',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/20.jpg',
    },
    {
      name: 'Eminent Alumni Interaction',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/21.jpg',
    },
    {
      name: 'Eminent Alumni Interaction',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/22.jpg',
    },
    {
      name: 'Lecture by Dr. Nagahanumaiah',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/23.jpg',
    },
    {
      name: 'Lecture by S.K Saha',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/24.jpg',
    },
    {
      name: 'Meet with Subir Chowdhury, CEO, JCB',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/25.jpg',
    },
    {
      name: 'Meeting Dr. Nagahanumaiah, Director, CMTI',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/26.jpg',
    },
    {
      name: 'Beyond The Walls Lecture #7 by Prof. Surjya Kumar Maiti',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/1.jpg',
    },
    {
      name: 'Beyond The Walls Lecture #7 by Prof. Surjya Kumar Maiti',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/2.jpg',
    },
    {
      name: 'Beyond The Walls Lecture #7 by Prof. Surjya Kumar Maiti',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/3.jpg',
    },
    {
      name: 'Distinguished Alumni: Prof. Surjya Kumar Maiti',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/4.jpg',
    },
    {
      name: 'Alumni from Nepal',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/5.jpg',
    },
    {
      name: 'Beyond The Walls Lecture #5 by Prof. Alak Bandhopadhyay',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/6.jpg',
    },
    {
      name: 'Beyond The Walls Lecture #5 by Prof. Alak Bandhopadhyay',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/7.jpg',
    },
    {
      name: 'Beyond The Walls Lecture #5 by Prof. Alak Bandhopadhyay',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/8.jpg',
    },
    {
      name: 'Industry-Institute-Interaction 26 Nov, 2016',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/9.jpg',
    },
    {
      name: 'Alumni at Dhaka, Bangladesh 22 Dec, 2016',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/10.jpg',
    },
    {
      name: 'Alumni, Batch of 1980',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/11.jpg',
    },
    {
      name: 'Alumni during Global Meet 2017',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/12.jpg',
    },
    {
      name: 'Alumni during Global Meet 2017',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/13.jpg',
    },
    {
      name: 'Alumni during Global Meet 2017',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/14.jpg',
    },
    {
      name: 'Beyond The Walls Lecture #6 by Prof. Rabindra Nath Maity',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/15.jpg',
    },
    {
      name: 'Beyond The Walls Lecture #6 by Prof. Rabindra Nath Maity',
      imageLink: 'https://alumnitdgp.in/images/photoGallery/thumb/16.jpg',
    },
  ];

  
  

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (index) => {
    setModalOpen(true);
    setCurrentSlide(index);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const plusSlides = (step) => {
    setCurrentSlide((prevSlide) => (prevSlide + step + imagesData.length) % imagesData.length);
  };

  return (
    <div className="container">
      <h3 style={{ textAlign: 'center', color: '#333' } } className='text-3xl my-10 '>Alumni Gallery</h3>
      <div className="line"></div>
      <div className="row mx-4 md:mx-20 md:grid grid-cols-4 gap-2 ">
        {imagesData.map((image, index) => (
          <div key={index} className="column col-md-3 col-sm-4 col-xs-6">
            <img
              src={image.imageLink}
           
             
              className="hover-shadow cursor"
              alt={image.name}
            />
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Gallery;
