import React from "react";

const Eventcard = ({
  date,
  month,
  eventdescription1,
  eventdescription2,
  eventdescription3,
  eventdescription4,
  eventdescription5,
  eventdescription6,
  joininglink,
  registration1,
}) => {
  return (
    <div className="mx-1 md:mx-24 my-6 w-56 md:w-full text-justify text-sm  flex flex-row">
      <div className="basis-1/3">
        <div
          className="w-12 md:w-24 h-12 md:h-24 relative  "
          style={{
            "background-image":
              " url('https://alumnitdgp.in/images/home/calendar.png')",
          }}
        >
          <img
            className="z-0"
            src="https://alumnitdgp.in/images/home/calendar.png "
          />
          <div className="z-10  text-red-500 ">
            <h1 className="absolute text-xs md:text-base top-6 md:top-12 right-4 md:right-8">{date}</h1>
            <h1 className="absolute md:text-base top-8 md:top-16 right-1 text-[8px] md:right-2 mt-2">{month}</h1>
          </div>
        </div>
      </div>
      <div className="basis-2/3 ">
        <p className="text evenDescription text-xs ">
          {eventdescription1}
          <br />
         {eventdescription2}
          <br />
         {eventdescription3}
          <br />
          {eventdescription4}
          <br />
         {eventdescription4}
         <br/>
         {eventdescription5}
         <br/>
         {eventdescription6}
        </p>
        <i className="-ml-2">
          Joining link -{" "}
          <a
            className="underlined italic text-blue-500"
            href={joininglink}
            target="_blank"
          >
           {joininglink}
          </a>
        </i>
        <br/>
        {registration1?<> <i className="-ml-2">
          Registration link -{" "}
          <a
            className="underlined italic text-blue-500"
            href={registration1}
            target="_blank"
          >
           {registration1}
          </a>
        </i></>:<></>}
      </div>
    </div>
  );
};

export default Eventcard;
