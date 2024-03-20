"use client";
import React from "react";
import Tab2020 from "./sam/2020";
import Tab2022 from "./sam/2022";
import Tab2021 from "./sam/2021";
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
    const tabContents = [,"adsfadsfdsfzfd","fsdfdsf"];
  
    return (
     
     <div>
        {
            activeTab?<>
            {
              activeTab ==2?<>
              <Tab2022/></>:<>
<Tab2021/>
              </>
            }
            </>:<>
            <Tab2020/>
            </>
        }
     </div>
    );
  };
const Sam = () => {
    const [activeTab, setActiveTab] = React.useState(0);

    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };
  return (
    <div className="mx-4 md:mx-20 ">
      <div className="">
        <div
          className=" bg-cover bg-center  bg-no-repeat"
          style={{
            "background-image":
              " url('	https://alumnitdgp.in/images/home/eminent_alumni_lecture.jpg')",
          }}
        >
          <h1 className="text-3xl tracking-wider pt-5 pb-5 mb-5 border-b-2 text-green-500 text-center">
            Student Almuni Meet
          </h1>
          <p className="py-10 tracking-wider leading-6 border-b-2 ">
          NIT Durgapur has a profound numbers of Alumni dignified at various
      distinct positions across the globe. That’s why, The Centre for Alumni
      affairs and International Relations (CAAIR) is in effort of consolidating
      these folks under the same shade for the betterment of institute and its
      students. Thus, Student Alumni Meet (SAM) is the thought of that. It
      invites the Alumni, delegates of different batches to share their
      experiences, spreading immense knowledge on their fields, interchanging
      ideas with students. These activities play a significant role bridging the
      relations between Alumni and students. Not only the students get enriched
      with knowledge and ideas but the institute also becomes glorified
      nationally with its Alumni. Apart from the SAMs at institute courtyard,
      the regional meets are becoming popular day after day. Moreover, the
      Student Alumni Meet encourages the implementation of plenty of flagship
      programmes like Mentorship Program, Eminent Guest Talk Show, International
      Student Alumni Meet and Interaction over video calling and many more.
      During the Student Alumni Meet, alumni and students from all fields
      participate in various events which are aimed at helping students in
      overcoming uncertainties regarding their career choices and their lives
      beyond the campus. Ultimately, Student Alumni Meets (SAMs) connect
      students and Alumni at very close to heart and cementing the relationship
      for a prosperous future.
          </p>
        </div>
        < div className="max-w-lg  mt-5">
        <div className="border-b-2 md:-ml-0 mb-10 md:w-[1270px]  border-gray-300">

            <nav className="-mb-px flex mx-2 md:mx-0">
              <Tab
                label="2020"
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
                label="2022"
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

export default Sam;
