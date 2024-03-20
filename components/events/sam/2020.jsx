import React from 'react'
import EventCard from '../EventCard';
import { Eventof2020 } from '@/constants';

const Tab2020 = () => {
  return (
    <div className="w-full  flex justify-center items-center">
    <div className="w-[800px] ml-20">
   
              {Eventof2020.map((event,index) => (
                
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
  </div>
  )
}

export default Tab2020;
