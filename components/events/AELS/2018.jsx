import React from 'react'
import EventCard from '../EventCard';
import { EALS2018, EALS2020, EALS2021, EALS2022} from '@/constants';

const TabEAL2018= () => {
  return (
    <>
    
    <div className="w-full  flex justify-center items-center">
     
     <div className="md:w-[800px] w-[200px] ml-20">
    
               {EALS2018.map((event,index) => (
                 
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
export default TabEAL2018;