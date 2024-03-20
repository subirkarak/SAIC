import React from 'react'
import EventCard from '../EventCard';
import { Eventof2021 } from '@/constants';

const Tab2021 = () => {
  return (
    <>
    <h1 className="text-2xl tracking-wider -ml-40 text-orange-500 text-center">
    {`oSAM'2021`}
          </h1>
     <div className="w-full  flex justify-center items-center">
        
        <div className="w-[800px] ml-20">
       
                  {Eventof2021.map((event,index) => (
                    
                      <EventCard
                      key={index}
                      date={event.date}
                      degree={event.degree}
                      desc={event.desc}
                      imagesrc={event.imagesrc}
                      name={event.name}
                      post={event.post}
                      topic={event.topic}
                      venue={event.Venue}
                   
                      
    
                      />
                   
                  ))}
             
         
        </div>
      </div></>
   
  )
}

export default Tab2021;
