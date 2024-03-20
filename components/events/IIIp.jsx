"use client"
import React from "react";
import EventCard from "./EventCard";
import { IIIP } from "@/constants";

const IIIp = () => {
  return (
    <div className="mx-8 md:mx-40 ">
      <div className="">
        <div
          className=" bg-cover bg-center  bg-no-repeat"
          style={{
            "background-image":
              " url('	https://alumnitdgp.in/images/home/eminent_alumni_lecture.jpg')",
          }}
        >
          <h1 className="text-3xl tracking-wider pt-5 pb-5 mb-5 border-b-2 text-green-500 text-center">
            Indrustry-Institude-Introduction-Programme
          </h1>
          <p className="py-10 md:px-20 tracking-wider leading-6 border-b-2 ">
            With the advent of globalization and opening up of Indian economy to
            outside world, competition among industries has become stiff. To
            solve their engineering problems they look up now to engineering
            institutions. Similarly, there is an urgent need to prepare
            engineering students for jobs in multinational companies, by
            exposing them to newer technologies and engineering methodologies.
            These objectives can only be achieved well by bridging the gap
            between industry and the academic institutions. Better interaction
            between technical institutions and industry is the need of the hour.
            This will have great bearing on the engineering curriculum, exposure
            of engineering students to industrial atmosphere and subsequent
            placement of young graduating engineers in industries across the
            country.
          </p>
        </div>
        <div className="w-full  flex justify-center items-center">
    <div className="w-[800px] ml-20 md:-ml-[600px]">
   
              {IIIP.map((event,index) => (
                
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
      </div>
    </div>
  );
};

export default IIIp;
