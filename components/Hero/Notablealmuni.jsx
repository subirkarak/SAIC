
"use client"
import {useEffect ,useRef } from 'react';
import { alumniData } from '@/constants';



  const Notablealmuni = () => {
    const listRef = useRef(null);
  
    useEffect(() => {
      const listContainer = listRef.current;
      let scrollInterval;
  
      const startScrolling = () => {
        scrollInterval = setInterval(() => {
          listContainer.scrollLeft += 2; 
        }, 20); 
      };
  
      const stopScrolling = () => {
        clearInterval(scrollInterval);
      };
  
      listContainer.addEventListener('mouseenter', stopScrolling);
      listContainer.addEventListener('mouseleave', startScrolling);
  
      startScrolling();
  
      return () => {
        clearInterval(scrollInterval);
        listContainer.removeEventListener('mouseenter', stopScrolling);
        listContainer.removeEventListener('mouseleave', startScrolling);
      };
    }, []);
  
    return (
      <div className=" -mt-28 ml-2 md:ml-40 md:w-[1200px] flex flex-col md:mt-28 justify-between items-center">
        <img src='https://alumnitdgp.in/images/home/notableAlumniHead.png' className='  mt-[1050px]  w-40 md:w-80'/>
        <h1></h1>
       <div className="notable-almuni-container">
      <div className="overflow-x-auto  notable-almuni-list" ref={listRef}>
            {alumniData.map((alumni, index) => (
              
              <div key={index} className="flex flex-col items-center mx-4">
              <div className="image-container rounded-full w-24 h-24 md:w-44 md:h-44 overflow-hidden">
                <img
                  src={alumni.image}
                  alt={`Image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="mt-2 text-center">{alumni.name}</span>
            </div>
            
            ))}
            {
                alumniData.map((almuni,index)=>{
                    <h1 key={index} className='mt-80'>{almuni.name}</h1>
                })
            }
          </div>
        </div>
       
       
      </div>
    );
  };
  
  export default Notablealmuni;