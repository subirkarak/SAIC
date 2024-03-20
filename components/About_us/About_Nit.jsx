import React from "react";

const About_Nit = () => {
  return (
    <div className="md:mx-20">
    <div
      className=" bg-cover bg-center  bg-no-repeat"
      style={{
        "background-image": " url('https://alumnitdgp.in/images/abtCaair.jpg')",
      }}
    >
      <div className="backdrop-brightness-100 backdrop-blur-sm backdrop-contrast-100">
        <h1 className="text-center text-3xl py-10 tracking-wider">
          About CAAIR{" "}
        </h1>
        <p className="md:px-20 px-4 border-t-2 border-b-2 border-white">
          <b className="text-[30px]">T</b>he Institute was established as a
          Regional Engineering College Durgapur (RECD) in 1960 by joint venture
          of the Government of India and Government of West Bengal. REC Durgapur
          was converted to National Institute of Technology Durgapur (NIT
          Durgapur) under the full administrative and financial control of the
          Ministry of Human Resource Development, Government of India in 2003.
          Subsequently the Institute was declared an Institute of National
          Importance by the Government of India on August 15, 2007. NIT Durgapur
          is proud to have more than 24000 engineers, technocrats, scientists,
          managers and entrepreneurs as its global brand ambassadors.
          <br />
          Centre for Alumni Affairs &amp; International Relations (CAAIR) is the
          nodal centre or office of Dean (Alumni Affairs) in NIT Durgapur for
          liaison with REC/NIT Durgapur alumni all across the globe, initiating
          research/academic collaboration with universities and organizations in
          India and abroad and other outreach activities. CAAIR makes all-out
          efforts to get them involved in the all- round development and growth
          of the Institute. It supports the Institute’s mission by way of
          continually opening up opportunities that strengthens the mutually
          beneficial bond between the institute and its alumni. This promotes
          and encourage the alumni to disseminate professional knowledge through
          seminars and interaction with the students and faculty. NIT Durgapur
          is also striving to break the barriers and reach out to the national
          and international universities and organizations by way of
          collaborative activities like joint research supervision,
          publications, projects and student exchange. The Centre initiates all
          such activities. The Centre also coordinates various outreach
          activities with the community.
        </p>
      </div>
    </div>
    <img className='w-full ' src="	https://alumnitdgp.in/images/lineDivider.png"/>
    </div>
  );
};

export default About_Nit;
