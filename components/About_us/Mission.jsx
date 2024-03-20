/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";


const Mission = () => {
  return (
    <div className="md:mx-20">
      <div
        className=" bg-cover bg-center  bg-no-repeat"
        style={{
          "background-image":
            " url('https://alumnitdgp.in/images/mission_bg.jpg')",
        }}
      >
        <h1 className="text-center text-3xl py-10 text-red-500">Mission </h1>
        <div className=" md:flex flex-row">
          <div className="flex basis-1/2 justify-between items-center ">
            <img src="https://alumnitdgp.in/images/mission.png" />
          </div>
          <div className="basis-1/2">
            <div className="flex">
              <Image
                src="/bullet.svg"
                className="items-start h-[5%]"
                width={30}
                height={30}
              />
              <p style={{"font-size": "18px", "font-family":" 'Comic Sans MS', cursive,sans-serif", "color": "#333"}}>
                To facilitate alumni activities towards the development of the
                Institute through seminars, research advice, soft skill
                development program, advice on placement and internship and any
                other way the alumni would like to contribute.
              </p>
            </div>
            <div className="flex my-10">
              <Image
                src="/bullet.svg"
                className="items-start h-[5%]"
                width={30}
                height={30}
              />
              <p style={{"font-size": "18px", "font-family":" 'Comic Sans MS', cursive,sans-serif", "color": "#333"}}>
                To initiate and coordinate formal collaboration with
                universities/organizations in India and abroad by way of signing
                MoU for joint research supervision, publication, projects and
                student exchange.
              </p>
              
            </div>
            <div className="flex pb-10">
              <Image
                src="/bullet.svg"
                className="items-start h-[5%]"
                width={30}
                height={30}
              />
              <p style={{"font-size": "18px", "font-family":" 'Comic Sans MS', cursive,sans-serif", "color": "#333"}}>
               
              To coordinate the outreach activities with the society
		        				
              </p>
              
            </div>
          </div>
        </div>
      </div>
      <img className='w-full ' src="	https://alumnitdgp.in/images/lineDivider.png"/>
    </div>
  );
};

export default Mission;
