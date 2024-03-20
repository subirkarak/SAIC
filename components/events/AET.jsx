import React from "react";

const AET = () => {
  return (
    <div className="md:mx-40">
      <h1 className="text-3xl tracking-wider pt-5 pb-5 mb-5 border-b-2  text-center">
        Alumni Enterprenur Talk
      </h1>
      <div className="md:flex ">
        <img src="https://alumnitdgp.in/images/snandi.jpg" className="w-80" />
        <div className="md:mx-20">
          <h1 className="text-4xl font-extrabold  text-slate-600">
            Saugata Nandi
          </h1>
          <h1 className="text-2xl mt-4  text-orange-600">
            1981,B.E.,Mechanical Enginnering
          </h1>
          <h1 className="text-3xl mt-16 mb-10 font-extrabold  text-slate-600">
            Description
          </h1>
          <p>
            Business insights - strategy, finance, sales, leadership,
            consulting, customer service and behavioral transformation. For
            custom designed in -company learning interventions contact
            saugata@metl.in. This channel is free of charge for individual
            users.
          </p>
        </div>
      </div>
      <div className="md:flex mt-20 ">
        <img src="https://alumnitdgp.in/images/as.jpg" className="w-84 h-70" />
        <div className="md:mx-20">
          <h1 className="md:text-4xl font-extrabold  text-slate-600">
            Mr Ashish Suhadeve (Btech, ECE)
          </h1>
          <h1 className="md:text-2xl mt-4  text-orange-600">
            <b>
              Topic:Upcoming Trends and success mantra for the new data-driven
              modern world.
            </b>
          </h1>
          <h1 className="md:text-2xl mt-16 mb-10">
            Youtube Link:
            <br />
            <a className="text-blue">
              https://www.youtube.com/watch?v=iUCvhfHhplo
            </a>
          </h1>
        </div>
      </div>
      <h4>
        <b>Date:</b> 28th August 2021 - 6 PM
      </h4>
      <p style={{"text-align": "justify"}}>
        <b>Summary:</b>{" "}
        {`Students' Alumni Interaction Cell NIT Durgapur is proud to have arranged an Alumni Entrepreneur Talk Program with none other than Mr Ashish Sukhadeve. This was one of the most inspiring sessions of the year where we learned a lot about entrepreneurship and the stamina and grit required to succeed in life. Our speaker is the founder and CEO of Analytics Insight which is the world's first print and online publication dedicated to insights, trends, and opinion from the world of disruptive technologies including Artificial Intelligence, Big Data Analytics, Business Intelligence, Robotics, Cloud Computing and IoT. We thus learned a lot about such groundbreaking technologies and the need to adapt and progress in the new era of technology. The speaker motivated us to become the best version of ourselves and cleared all our doubts. The audience greatly enjoyed this session. We are extremely thankful to our speaker for this incredible session and hope he will always be there to guide us.`}
      </p>
    </div>
  );
};

export default AET;
