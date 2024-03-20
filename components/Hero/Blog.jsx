import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div
      className="bg-cover bg-center md:flex flex-row bg-no-repeat relative top-[950px] md:top-[770px]"
      style={{
        "background-image":
          " url('https://alumnitdgp.in/images/home/caair_bg.jpg')",
      }}
    >
      <div className='basis-1/2 backdrop-contrast-200 backdrop-brightness-20    text-contrast rounded-lg p-4 z-10 border-2xl mx-7 mt-8 mb-auto drop-shadow-lg"  '>
        <h1 className="text-center text-2xl py-2 text-slate-50 font-bold space-letter-x-4 tracking-custom ">
          Welcome to
        </h1>
        <h2 className="text-center text-xl  text-slate-50 mb-5">
          Centre for Alumni Affairs & International Relations (CAAIR){" "}
        </h2>
        <div class="border-t-2 border-gray-400"></div>
        <h3 className=" text-sm   text-slate-50 mx-4 my-7 leading-7 ">
          Centre for Alumni Affairs & International Relations (CAAIR) is the
          nodal centre in the National Institute of Technology Durgapur for
          liaison with REC/NIT Durgapur alumni all across the globe, initiating
          research/academic collaboration with universities and organizations in
          India and abroad and other outreach activities. NIT Durgapur is proud
          to have more than 24000 engineers, technocrats, scientists, managers
          and entrepreneurs as its global brand ambassadors. CAAIR makes all-out
          efforts to get them involved in the all-round development and growth
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
        </h3>
      </div>
      <div className='basis-1/2 backdrop-contrast-200 backdrop-brightness-20   bg-white text-contrast rounded-lg p-4 z-10 border-2xl mx-7 mt-8 mb-8 drop-shadow-lg"  '>
        <div className="flex mt-4">
          {" "}
          <img
            width={90}
            height={90}
            className="drop-shadow-lg shadow-xl broder-xl rounded-lg"
            src="https://alumnitdgp.in/images/ourTeam/adviser/Prof.%20Indrajit%20Basak.jpg"
          />
          <h2 className=" md:mt-1 text-center text-[26px]  text-yellow-500 italic mb-5">
            From the Director’s Desk (Officiating)
          </h2>
        </div>

        <div class="md:ml-[90px] text-[18px] font-bold">{`"Greetings from National Institute of Technology Durgapur,beloved `}</div>
        <div class=" text-[18px] font-extrabold">{`  alma mater!"`}</div>
        <div className=" text-[12px]   text-slate-900 mx-4 my-4 leading-7">
          <p>
            NIT Durgapur’s Alumni represent one of the most talented,
            innovative, and networked communities in the entire nation.&nbsp;All
            of you, the Alumni of the Institute, are all entrepreneurs,
            researchers, academicians, policymakers, and above all, leaders in
            your respective fields, and have helped shape the nation we know
            today. You have left your footprints on the entire world and have
            thus brought laurels to the Institute and the Institute takes
            immense pride in your remarkable achievements. <br />
            As you are well aware, in the recent years, NIT Durgapur has turned
            over a new leaf and has taken many new initiatives to achieve
            excellence in the field of technical education and research. This
            journey would never be possible if the Institute and the Alumni do
            not walk together, working hand-in-hand for achieving the common
            cherished goal. In connection with this, I would like to solicit
            your kind cooperation and support in every possible way so that we
            can take your beloved alma mater to a height of excellence never
            scaled before.
            <br />
            I welcome you, along with your family members, to the campus of NIT
            Durgapur, where you had spent the golden years of your student life.
            <br />
            With Best Wishes,
          </p>
          <p className="text-right flex flex-col">
          <b className="text-right mr-2">Prof. Indrajit Basak</b>
          Director (Officiating), NIT Durgapur
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
