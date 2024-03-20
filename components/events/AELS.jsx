"use client";
import React from "react";
import TabEAL2018 from "./AELS/2018";
import TabEAL2022 from "./AELS/2022";
import TabEAL2019 from "./AELS/2019";
import Tab2020 from "./sam/2020";
import TabEAL2021 from "./AELS/2021";
const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-t-lg font-medium text-xs md:text-base focus:outline-none ${
        isActive ? "bg-blue-500 text-white" : "bg-transparent"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const TabContent = ({ activeTab }) => {
  const tabContents = [, "adsfadsfdsfzfd", "fsdfdsf"];

  return (
    <div>
      {activeTab ? (
        <>
          {activeTab == 4 ? (
            <>
              <TabEAL2018 />
            </>
          ) : (
            <>
              {activeTab == 3 ? (
                <>
                  <TabEAL2019 />
                </>
              ) : (
                <>
                  {activeTab == 2 ? (
                    <>
                      <Tab2020 />
                    </>
                  ) : (
                    <>
                      <TabEAL2021 />
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <TabEAL2022 />
        </>
      )}
    </div>
  );
};
const AELS = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <div>
      <div className="mx-4 md:mx-40 ">
        <div className="">
          <div
            className=" bg-cover bg-center  bg-no-repeat"
            style={{
              "background-image":
                " url('	https://alumnitdgp.in/images/home/eminent_alumni_lecture.jpg')",
            }}
          >
            <h1 className="text-3xl  pt-5 pb-5 mb-5 border-b-2 text-center">
              Eminet Almuni Lecture Series
            </h1>
            <p className="py-10 tracking-wider leading-7 border-b-2 ">
              Department of Mechanical Engineering, National Institute of
              Technology Durgapur along with CAAIR is proud to have conducted a
              session on Robot Assisted 3D Printing by none other than
              Prof.(Dr.) Satyandra K. Gupta , Smith International Professor of
              Mechanical Engineering and Computer Science, Director of Centre
              for Advanced Manufacturing, University of Southern California,
              USA. The key points of the session were Industrial Robotics,
              Intelligent Manufacturing Systems and Advanced Manufacturing
              Technologies. This session was one of the most sought after one of
              the year and the audience was greatly interested in learning from
              such an honourable speaker. The session was very informative with
              the speaker clearing our concepts in a lucid way and using
              techniques that peaked our interest. Additive Manufacturing and
              its benefits over traditional methods and how we combine it with
              robotics and other fields was the core topic that was explained in
              great detail. The audience enjoyed the session and interacted with
              the speaker who cleared all their doubts. The webinar was a great
              success and we hope eminent speakers like Dr Satyandra K Gupta
              will always be there to motivate and guide us.
            </p>
          </div>
          <div className="max-w-lg  mt-5">
            <div className="border-b-2 md:-ml-0 mb-10 md:w-[1270px]  border-gray-300">
              <nav className="-mb-px flex mx-2 md:mx-0">
                <Tab
                  label="2022"
                  isActive={activeTab === 0}
                  onClick={() => handleTabClick(0)}
                  className="basis-1/6"
                />
                <Tab
                  label="2021"
                  isActive={activeTab === 1}
                  onClick={() => handleTabClick(1)}
                  className="basis-1/6"
                />
                <Tab
                  label="2020"
                  isActive={activeTab === 2}
                  onClick={() => handleTabClick(2)}
                  className="basis-1/6"
                />
                <Tab
                  label="2019"
                  isActive={activeTab === 3}
                  onClick={() => handleTabClick(3)}
                  className="basis-1/6"
                />
                <Tab
                  label="2018"
                  isActive={activeTab === 4}
                  onClick={() => handleTabClick(4)}
                  className="basis-1/6"
                />
              </nav>
            </div>
            <TabContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AELS;
