/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useRef, useEffect } from "react";

import Celebrity from "./Cleleraty";
import { daa2022 ,daa2019,daa2021,daa2020 } from "@/constants";

const TabContent = ({ activeTab }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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
  }, [isHovered]);

  const handleScroll = () => {
    const scrollDiv = containerRef.current;
    if (
      scrollDiv.scrollTop + scrollDiv.clientHeight >=
      scrollDiv.scrollHeight
    ) {
      loadMore();
    }
  };
  const [content, setContent] = useState(["Line 1", "Line 2", "Line 3"]);

  const loadMore = () => {
    // Simulating an asynchronous API call to fetch more content
    setTimeout(() => {
      const newContent = ["Line 4", "Line 5", "Line 6"];
      setContent((prevContent) => [...prevContent, ...newContent]);
    }, 1000);
  };
  const tabContents = [
   daa2022,daa2021,daa2020,daa2019
  ];

  return (
    // <div
    //     ref={divRef}
    //     className="overflow-y-auto h-64 shadow-lg w-[600px] -ml-10 bg-opacity-80 backdrop-contrast-200 backdrop-brightness-80 p-4"
    //     style={{ scrollBehavior: "smooth" }}
    // >
    <div
      ref={containerRef}
      className="overflow-y-auto h-[400px] shadow-lg md:w-[600px]  -ml-10 bg-opacity-80 backdrop-contrast-200 backdrop-brightness-80 p-4 scrollbar-hide "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onScroll={handleScroll}
    >
      <div className="h-80 invisible"></div>
      {tabContents[activeTab].map((alumni) => {
        return (
          <Celebrity
            key={alumni.id}
            name={alumni.name}
            degree={alumni.degree}
            award={alumni.award}
            post={alumni.post}
            place={alumni.place}
            imageSrc={alumni.imageSrc}
            university={alumni.university}
          />
        );
      })}

      
    </div>
  );
};

const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-t-lg font-medium  focus:outline-none ${
        isActive ? "bg-white text-gray-600" : "bg-transparent text-white"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const Giving_Back = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div
      className=" relative top-[950px] w-full md:top-[1050px] bg-cover bg-center bg-no-repeat"
      style={{
        "background-image":
          " url('https://alumnitdgp.in/images/home/givingBackHome1.jpg')",
      }}
    >
      <div className="md:flex flex-row  justify-between">
        <div className="basis-1/2 flex w-[320px] md:w-[600px]  md:mx-0 flex-col text-4xl ">
          <div className="flex flex-row ">
            <div className="basis-3/12"></div>
            <div className="basis-9/12 flex flex-col justify-center items-center mr-16">
              <h1 className="italic text-yellow-500  mt-5">
                <img
                  src="https://alumnitdgp.in/images/home/GivingBack-head.png"
                  width="250"
                />
              </h1>
              <div className="border-t-2 border-gray-100 my-4 flex flex-col justify-between items-center">
                <h2
                  className="mt-5 font-bold"
                  style={{ "font-weight": 600, fontSize: 30, color: "#D27800" }}
                >
                  The Joy of Giving Back
                </h2>
                <img
                  src="https://alumnitdgp.in/images/home/gb_home.jpg"
                  className=" my-4 img-responsive"
                  style={{ " width": "80%" }}
                  alt=""
                />
                <div className="text-white text-sm leading-2 ">
                  The Joy of Giving Back to Alma mater is a campaign to raise
                  the fund to support NIT Durgapur to pursue its goal of
                  imparting quality technical education through research-
                  oriented teaching-learning environment…
                  <br />
                  <p className="text-blue-500 text-lg "> know more...</p>
                </div>
              </div>
              <div className="flex justify-between items-end mb-4">
                <button className="bg-green-500 shadow-xl ml-24 md:ml-72 -mr-20 text-xs h-10 px-4">
                  Contribute
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-4  basis-1/2   ">
          <div className="md:w-[600px] w-[320px]">
            <h1 className="text-3xl text-white text-center ">
              Distingued Almuns Award
            </h1>
            <div className="border-t-2 border-gray-100 my-4 flex flex-col justify-between items-center">
              <div className="max-w-lg mx-auto mt-2">
                <div className="border-b-2 -ml-10 mb-10  w-[380px] md:w-[600px] border-gray-300">
                  <nav className="-mb-px flex mx-8 md:mx-0">
                    <Tab
                      label="DAA-2022"
                      isActive={activeTab === 0}
                      onClick={() => handleTabClick(0)}
                      className="basis-1/6"
                    />
                    <Tab
                      label="DAA-2021"
                      isActive={activeTab === 1}
                      onClick={() => handleTabClick(1)}
                      className="basis-1/6"
                    />
                    <Tab
                      label="DAA-2020"
                      isActive={activeTab === 2}
                      onClick={() => handleTabClick(2)}
                      className="basis-1/6"
                    />
                    <Tab
                      label="DAA-2019"
                      isActive={activeTab === 3}
                      onClick={() => handleTabClick(3)}
                      className="basis-1/6"
                    />
                  </nav>
                </div>
                <TabContent activeTab={activeTab} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Giving_Back;
