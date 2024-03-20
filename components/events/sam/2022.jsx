import React from 'react'
import EventCard from '../EventCard';
import { Eventof2022 } from '@/constants';

const Tab2022 = () => {
  return (
    <>
     <h1 className="text-2xl tracking-wider -ml-40 text-orange-500 text-center">
    {`oSAM'2022`}
          </h1>
    <div className="w-full  flex justify-center items-center">
     
     <div className="md:w-[800px] w-[200px] ml-20">
    
               {Eventof2022.map((event,index) => (
                 
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

export default Tab2022;
