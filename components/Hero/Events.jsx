"use client";
import Image from "next/image";
import React from "react";
import Eventcard from "./Eventcard";
import { events } from "@/constants";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Events = () => {
    const containerRef = useRef(null);

  useEffect(() => {

    const container = containerRef.current;
    let animationFrameId;

    const scroll = () => {
      container.scrollTop += 1; // Adjust the scroll speed as desired

      if (container.scrollTop % container.scrollHeight === 0) {
        container.scrollTop = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  console.log(events);
  return (
    <div className="relative top-[950px] md:top-[780px]  ">
      <div class="border-t-2 border-gray-400 my-4"></div>
      <div className="md:flex flex-row">
        <div className="basis-1/2 flex  flex-col justify-center items-center">
          <img
            src="https://alumnitdgp.in/images/home/event.png "
            className=" w-[200px]"
          />
          <div className="border-t-2 border-gray-600 my-4 "></div>
          <div ref={containerRef} className="max-h-96 overflow-y-auto scrollbar-hide">
            <ul className="">
              {events.map((event) => (
                <li key={event.id}>
                  <Eventcard
                    date={event.date}
                    month={event.month}
                    eventdescription1={event.eventdescription1}
                    eventdescription2={event.eventdescription2}
                    eventdescription3={event.eventdescription3}
                    eventdescription4={event.eventdescription4}
                    eventdescription5={event.eventdescription5}
                    eventdescription6={event.eventdescription6}
                    joininglink={event.joininglink}
                    registration1={event.registrationlink}
                  />
                </li>
              ))}
            </ul>
          </div>
         
        </div>
        <div className="basis-1/2 md:flex  mx-12 md:mx-0 flex-col justify-center items-center">
          <img
            src="https://alumnitdgp.in/images/home/nitdian_chronicle.png"
            className="w-[200px] basis-3/12 "
          />
        <div className="md:flex flex-row basis-9/12 my-12 gap-4 ">
        <img
            src="https://alumnitdgp.in/images/home/nitchronicle19.jpg"
            className="w-[200px] basis-1/3 my-6"
          />
        <img
            src="	https://alumnitdgp.in/images/home/nitchronicle20home.jpg"
            className="w-[200px] basis-1/3 my-6"
          />
        <img
            src="	https://alumnitdgp.in/images/home/nit_al_report_21.jpg"
            className="w-[200px] basis-1/3 my-6"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
