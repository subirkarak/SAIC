"use client";
import React from "react";
import Detailscard from "./DetailCard";
import { caairofficials, Advisors, executive_member } from "@/constants";
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
  const tabContents = [caairofficials, Advisors, executive_member];

  return (
   
    <div className="md:grid grid-cols-3 ml-2 md:-ml-64  md:w-[1200px] gap-6">
      {tabContents[activeTab].map((details, index) => (
        <div key={index} >
        <Detailscard
          
          degree={details.degree}
          details={details.details}
          image={details.image}
          name={details.name}
          post={details.post}
          
        />
        </div>
      ))}
    </div>
  );
};

const Our_team = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <div>
      <h1 className="text-center border-b-2 mb-5 md:mx-20 text-4xl py-5  tracking-wider">
        Our Team{" "}
      </h1>
      <div className=" border-gray-100 my-4 flex flex-col ">
        <div className="max-w-lg mx-auto mt-2">
          <div className="border-b-2 md:-ml-80 mb-10 md:w-[1200px]  border-gray-300">
            <nav className="-mb-px flex mx-2 md:mx-0">
              <Tab
                label="CAAIR Officails"
                isActive={activeTab === 0}
                onClick={() => handleTabClick(0)}
                className="basis-1/6"
              />
              <Tab
                label="Adviser"
                isActive={activeTab === 1}
                onClick={() => handleTabClick(1)}
                className="basis-1/6"
              />
              <Tab
                label="Executive Member"
                isActive={activeTab === 2}
                onClick={() => handleTabClick(2)}
                className="basis-1/6"
              />
            </nav>
          </div>
          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default Our_team;
