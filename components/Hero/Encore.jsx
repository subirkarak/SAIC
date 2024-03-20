"use client";
import { useEffect, useRef } from "react";
const Encore = () => {
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
  return (
    <div className="relative top-[950px] w-full md:top-[850px]">
      <div className="md:flex flex-row  justify-between">
        <div className="basis-1/2 flex  flex-col text-4xl ">
          <div className="flex flex-row ">
            <div className="basis-1/3"></div>
            <div className="basis-2/3 text-4xl flex flex-col justify-center items-center mr-16">
              <h1 className="italic text-yellow-500 ">ENCORE</h1>
              <div className="border-t-2 border-gray-800 my-4"></div>
              <img
                src="https://alumnitdgp.in/images/encore21.jpg"
                className=" mt-2 h-[500px]"
              />
            </div>
          </div>
        </div>
        <div className="basis-1/2 md:flex mt-4 md:mt-0 flex-row">
          <div className="basis-2/3 justify-center items-center flex flex-col ">
            <h1 className="italic text-blue-500 text-4xl -mt-1 my-9">
              NEWSTELLER
            </h1>
            <div>
              <div
                ref={containerRef}
                className="max-h-[400px] overflow-y-auto scrollbar-hide mx-6 md:mx-0"
              >
                <h3
                  style={{
                    "font-family": "'Nanum Gothic, sans-serif",
                    color: "#333",
                    "text-transform": "none",
                  }}
                >
                  Pranayam- oxygen concentrator
                </h3>
                <p
                  style={{ "text-align": "justify", "font-size": "14px" }}
                >{`The years 2020 and 2021 have been particularly challenging for all of humanity. The suffering of the sick was haunting, yet science and technology kept showing its brilliance through the minds of ingenious people. We are proud to announce "Pranayam", a low cost oxygen concentrator has been developed at NIT Durgapur by the team led by Dr. Shibendu Shekhar Roy. The project has been sponsored by our Alumni Mr. Hemendra Bhattacharya, ME, class of 1976 and Mr. Goutam Bhatia, EE, Class of 1969.
                                        The concentrator is the cheapest, at half the price of the available commercial ones. We hope this concentrator would be affordable to a larger group of people, and contribute to India's fight against Covid-19. The efforts have been recognized and appreciated by many in both scientific and medical circles. Every time one of us achieves brilliance and that brilliance helps humanity move forward towards safety and well being is a moment of utmost pride. We are beyond grateful to Dr. Shibendu Shekhar Roy for being our mentor and a pioneer. We hope every one at NIT Durgapur is proud of this remarkable achievement and will do their best to contribute to the society in the future in their own ingenious ways.          				`}</p>
                <hr />
                <h3
                  style={{
                    "font-family": "'Nanum Gothic, sans-serif",
                    color: "#333",
                    "text-transform": "none",
                  }}
                >
                  Dr. Kumar Siddharth, a distinguished alumnus from the
                  Department of Chemical Engineering
                </h3>
                <p style={{ "text-align": "justify", "font-size": "14px" }}>
                  Dr. Kumar Siddharth, a distinguished alumnus from the
                  Department of Chemical Engineering, batch of 2016 has got the
                  post-doctoral fellowship offer from Harvard Univeristy. He
                  completed his PhD in the year 2020 on Chemical and
                  Biomolecular Engineering from The Hong Kong University of
                  Science and Technology. There, his current field of research
                  is Electrochemistry and Material Science. He has seven
                  research articles- one each from JACS and AM, and four of ECS
                  Conference presentations. He is also an Entrepreneur and was
                  selected for Hult Prize regionals in London. He has got
                  recognition from Red Cross, Lions Club, Rotary Club and SPEED
                  NGO of India, too.{" "}
                </p>
                <hr />
                <h3
                  style={{
                    "font-family": "'Nanum Gothic, sans-serif",
                    color: "#333",
                    "text-transform": "none",
                  }}
                >
                  APPOINTMENT OF MR ABHAY CHOUDHURY AS THE NEW DIRECTOR OF
                  POWERGRID(MAHARATNA PSU under MINISTRY OF POWER).{" "}
                </h3>
                <p style={{ "text-align": "justify", "font-size": "14px" }}>
                  On 14th October 2020, NIT DURGAPUR Alumnus Abhay Choudhury was
                  appointed as new director(projects) of powergrid,Maharatna PSU
                  under Ministry of Power,Government of India. He graduated from
                  REC Durgapur in the year 1985 with BTECH in Electrical
                  Engineering. PowerGrid transmits about 50% of the total power
                  generated in India through transmission network. It is a
                  matter of great pride that one of our alumni is taking the
                  nation forward. We congratulate him on his achievements and
                  applaud him for his dedication and commitment. NIT Durgapur
                  aspires to create individuals who lead the country and
                  themselves forward by their knowledge, diligence and honesty.{" "}
                </p>
                <hr />
                <h3
                  style={{
                    "font-family": "'Nanum Gothic, sans-serif",
                    color: "#333",
                    "text-transform": "none",
                  }}
                >
                  Webinar by Revered Swami Nikhileshwarananda (Adhyaksha, Shri
                  Ramkrishna Ashrama, Rajkot) on 6th September
                </h3>
                <p
                  style={{ "text-align": "justify", "font-size": "14px" }}
                >{`"A nation is advanced in proportion to education and intelligence spread among the masses." -
                                                    Swami Vivekananda. On this very note, a Webinar was organised on 6th September 2020 by
                                                    NIT Durgapur Alumni and Students' Alumni Interaction Cell, CAAIR, NIT DURGAPUR on the
                                                    topic ?FACE THE CHALLENGE OF LIFE THROUGH HUMAN EXCELLENCE? by Revered
                                                    Swami Nikhileshwarananda (Adhyaksha, Shri Ramkrishna Ashrama, Rajkot).
                                                    In this webinar, Swami Ji mainly focused on character building and pointed out the importance
                                                    of concentration of mind to lead a good life and attain success in every sphere of life. He gave a
                                                    good enough idea about how to face the challenges of life and how to deal with the fears inside
                                                    us by giving examples from Swami Vivekananda's life. He also described how the physical and
                                                    mental immunity (i.e. body and mind) are interrelated to each other and how we can develop it.
                                                    He also told that what we require today is Tremendous courage, positive thoughts, moral,
                                                    spiritual and intellectual development to lead a balanced and fulfilling life.

                                                    He repeatedly asked the participants to Face the difficulty boldly and do their best. He
                                                    highlighted the Present challenges we are facing in this COVID-19 pandemic situation and how
                                                    we can overcome them. At the end, Swami Ji also answered the questions of the students and
                                                    guided them to understand the Law of life!`}</p>
                <hr />
                <h3
                  style={{
                    "font-family": "'Nanum Gothic, sans-serif",
                    color: "#333",
                    "text-transform": "none",
                  }}
                >
                  Online Eminent Alumni Lecture by Dr Raghu Thatikonda on 31st
                  August 2020
                </h3>
                <p style={{ "text-align": "justify", "font-size": "14px" }}>
                  {`An Online Eminent Alumni Lecture was organized on 31st August
                  2020 by Department of Metallurgical and Materials Engineering
                  in association with CAAIR, NIT DURGAPUR on the topic
                  ?Knowledge-based process and Product Development for Aerospace
                  Application? by our distinguished alumnus Dr Raghu Thatikonda
                  who is currently an Outstanding Scientist and Associate
                  Director and Head (Research team) at Defense Metallurgical
                  Research Laboratory, Hyderabad, India. He has obtained his BE
                  in Metallurgical Engineering from RE College Durgapur (NIT
                  DURGAPUR) in 1984 and has completed his MTech and PhD from IIT
                  Bombay. Through the webinar, the attendees came to know a lot
                  about aerospace engineering, its challenges, aero-engine
                  materials and the various alloys used for making the parts,
                  tools used and the complexity of metal forming. He highlighted
                  several key points like the ideal parameters for various
                  processes, understanding microstructure and quality
                  improvement, understanding of material behaviour. There are
                  many factors involved including deformability or workability
                  along with dynamic materials for processing maps and rotor
                  components, liquid forging. The webinar enlightened us about
                  the materials now used at DRDO and various modelling
                  techniques. Dr Raghu Thatikonda cleared all the doubts and
                  concepts in an engaging and interactive way. It was a great
                  experience to have Dr Raghu Thatikonda encourage the young
                  generation and enlighten them about the current trends in
                  research and aerospace on the whole. It is a matter of great
                  pride that our Institute had been the alma mater of such
                  distinguished people who remember their college and inspire
                  the young generation and present learners towards development
                  and excellence. We are immensely grateful to Dr Raghu
                  Thatikonda for conducting such an informative and productive
                  lecture. We wish him all the best for all his future
                  endeavours and hope he will always be there for guiding us.
                  ?My NIT, My love?, a book authored by Mr. Suvasish
                  Mukhopadhyay, alumni of Batch of 1986 It is rightly said "The
                  influence of a good teacher can never be erased". Mr SUVASISH
                  MUKHOPADHYAY is a perfect exemplar of the above proverb. An
                  associate professor at the College of Engineering,Pune. He has
                  dedicated his life towards the upliftment of the students
                  entrusted under his guidance. He did his bachelor's in civil
                  engineering from NIT Durgapur in the year 1986. He is the
                  author of several books like "The happiness Code", "My
                  students my love".He has also wrote about his experiences at
                  NIT Durgapur in a book called "My NIT, My love". He is also an
                  integral part of Happiness Guru which is involved in writing
                  various inspirational books for students, professionals,
                  entrepreneurs alike. His contribution to the society is
                  invaluable. He gives children purpose, sets them up for
                  success as citizens of our world, and inspires in them a drive
                  to do well and succeed in life. The SAI Cell, CAAIR NIT
                  Durgapur, congratulates him on his achievements and wishes him
                  all the best for his upcoming endeavours.`}
                </p>
                <hr />
                <h3
                  style={{
                    "font-family": "'Nanum Gothic, sans-serif",
                    color: "#333",
                    "text-transform": "none",
                  }}
                >
                  Online Eminent Alumni Lecture by Mr Subrata Bhattacharya on
                  29th August 2020
                </h3>
                <p style={{ "text-align": "justify", "font-size": "14px" }}>
                  {`An online Eminent Alumni lecture was organised on 29th August
                  2020 by Dept. Of Metallurgical and Materials Engineering in
                  association with CAAIR, NIT DURGAPUR on the topic ?OPEN HOUSE
                  INTERACTION? by our distinguished alumnus Mr Subrata
                  Bhattacharya (Dept. Of Metallurgical Engineering, Batch of
                  1982), who is currently Director of Technical and Business
                  Development Jindal stainless Ltd. India. In this session, he
                  discussed some key features of stainless steel and its uses in
                  different sectors and in different countries. He enlightened
                  us about the various types of stainless steel and their
                  composition, crystalline structure, properties and strength.
                  He also highlighted the topic of inducing corrosion resistance
                  in stainless steel using chromium which was first developed by
                  JSL and was JSL's gift to the world in the sphere of
                  corrosion- resistant steel. In conclusion, he presented to us
                  the various day to day applications of the same, and gave a
                  brief idea to the participants about JSL, how they hire
                  students, what are the skills required and about JSL's project
                  in technical Institute like IITs. He also interacted with the
                  students and answered all their queries, thus marking an end
                  to a quite productive and informative lecture for all the
                  participants!`}{" "}
                </p>
                <hr />
                <h3
                  style={{
                    "font-family": "'Nanum Gothic, sans-serif",
                    color: "#333",
                    "text-transform": "none",
                  }}
                >
                  Online Eminent Alumni Lecture by Prof. Mrinal Mandal on 9th
                  July 2020
                </h3>
                <p style={{ "text-align": "justify", "font-size": "14px" }}>
                  {` The students of NIT Durgapur were fortunate to be a part of an
                  Eminent Online Lecture by Professor Mrinal Mandal, on 9th July
                  2020 on Google Meets platform. He is currently a professor at
                  the Department of Electrical and Computer Engineering,
                  University of Alberta, Canada. The theme of the lecture was
                  "AI and its offshoot machine learning will be a foundational
                  tool for creating social good as well as business success". He
                  graduated from NIT Durgapur in 1987 with B.Tech in Electronics
                  and Communication Engineering. The lecture was primarily
                  focussed on the use of machine learning in the medical field
                  and how machine learning can be used in the study of cancerous
                  tissue. Machine learning can optimise the process by plotting
                  various graphs and using the collected data and has proved to
                  provide highly accurate results. The process includes
                  mathematical calculations and a basic idea of machine learning
                  but Prof. Mandal's explanation helped us grasp the concepts
                  easily and left us in awe of technological growth. Machine
                  Learning is surely one of the tools which will help us build a
                  brighter and advanced tomorrow. The lecture was thus very
                  enlightening and we are grateful to Prof Mandal for his time
                  and efforts. We wish him all the best for all his future
                  endeavours and hope he will always be there for guiding us.
                  CAAIR welcomes all alumni members of NIT Durgapur to come
                  forward and help their alma mater reach new heights.`}{" "}
                </p>
                <hr />
                <h3
                  style={{
                    "font-family": "'Nanum Gothic, sans-serif",
                    color: "#333",
                    "text-transform": "none",
                  }}
                >
                  Online Eminent Alumni Lecture by Dr Partha Patra on 7th July
                  2020
                </h3>
                <p style={{ "text-align": "justify", "font-size": "14px" }}>
                  An online Eminent Alumni lecture was organised on 7 July 2020
                  by Dept. of Metallurgical and Materials Engineering in
                  association with CAAIR, NIT DURGAPUR on the topic ?Some
                  Fundamental Concepts in Synthesis and Application of
                  Particulate Suspensions? by our distinguished alumni Dr Partha
                  Patra (currently an Associate Research Scientist and adjunct
                  Professor at Colombia University, New York, USA.) Some key
                  features that were discussed in this oEAL were what are the
                  basic concepts behind the synthesis of particulate suspension,
                  apparatus and methods for separating components of the
                  particulate suspension, process control of crowded particulate
                  suspension and fundamental of particle packing. He also
                  highlighted the application of the particulate suspension.
                  Particulate suspensions present in the mixes used to produce
                  particulate products impacts both processability and final
                  product properties. In conclusion, he presented to us the
                  various day to day applications of the same, which in turn
                  helped the participants to understand the topic at hand with a
                  bit more depth, and ignited their curiosity to know more about
                  it.{" "}
                </p>
                <hr />
                <h3
                  style={{
                    "font-family": "'Nanum Gothic, sans-serif",
                    color: "#333",
                    "text-transform": "none",
                  }}
                >
                  Online Eminent Alumni Lecture by Deepal Kanti Das (Batch of
                  2009, Mechanical Engg.) on 6th June 2020
                </h3>
                <p style={{ "text-align": "justify", "font-size": "14px" }}>
                  COVID-19 has thrown us all into a difficult phase and has
                  affected the economy of the whole world. Mr Deepal Kanti Das,
                  Business Operations &amp; Analytics Manager, Dell
                  Technologies, Singapore had organized a lecture on
                  Recession-Proof career strategies on 6th June 2020 to
                  enlighten us about the prospects of jobs in a Covid-19 hit
                  economy. Mr Deepal Kanti Das was a student of Mechanical
                  Engineering (B.Tech Batch of 2009). He then went to Singapore
                  to pursue a degree in MS and MBA at the National University of
                  Singapore. He spoke about the various ways how this situation
                  would affect the job scenarios in the market and how we can
                  overcome them. He also emphasized the need for higher studies
                  as it would not only furnish our curricular vita but also
                  would make us prospectus candidates for the recruiters. His
                  guidance and understanding of this situation helped us to
                  visualize a clear picture of the opportunities and hurdles
                  that lay in our path. He also encouraged us with his warm
                  words and assured us that the scenario would indeed change in
                  our favour. In the meantime, he advised us to be patient and
                  to believe in our abilities to overcome the hurdles. The
                  session ended on an assuring note that there would be a better
                  tomorrow for all of us. We were indeed pumped up listening to
                  him.{" "}
                </p>
                <hr />
                <h3
                  style={{
                    "font-family": "'Nanum Gothic, sans-serif",
                    color: "#333",
                    "text-transform": "none",
                  }}
                >
                  Online Eminent Alumni Lecture by Rajib Ghosh (Batch of 97,
                  Mechanical Engg.) on 31st May 2020:
                </h3>
                <p style={{ "text-align": "justify", "font-size": "14px" }}>
                  Mr Rajib Ghosh Co-founder and Chief Revenue Officer of
                  KornChain Technology, which builds global blockchain network
                  for the loyalty marketing industry conducted a Webinar in the
                  Eminent Alumni Lecture series on 31st May 2020 from 11 am to
                  12:15 pm and made us aware about the rippling effect of
                  COVID-19 outbreak on employability of us in a different
                  institution and what policies startups and large enterprises
                  should adopt to overcome this treacherous situation. According
                  to him, the economy is hit by the COVID-19 slump followed by
                  social distancing and a nationwide lockdown, businesses are
                  experiencing major impacts no matter how established they are
                  and are having to re-look at how they manage and operate their
                  business including re- visitation of their business plan. It
                  has become challenging for most businesses to keep their
                  financial wheels turning during the lockdown period due to
                  less revenue churn and the general uncertainty in the global
                  financial environment. The various ways he suggested include
                  finding more feasible models, reducing extra expenses and
                  trying to innovate new technology that would generate a new
                  customer base of that industry, generating new demand. During
                  a brainstorming session when the students asked him about his
                  idea on how to get themselves employable in this job crisis
                  period, he replied with a creative spirit that every crisis
                  period is a storehouse of opportunity, he asked the students
                  not to be a job seeker rather be a job provider. The Eminent
                  Alumni Lecture ended on a high note making the participants
                  believe that in this crisis period lies the key of a brighter
                  future.{" "}
                </p>
                <hr />
                <h3
                  style={{
                    "font-family": "'Nanum Gothic, sans-serif",
                    color: "#333",
                    "text-transform": "none",
                  }}
                >
                  Online Eminent Alumni Lecture by Aditya Bhattacharya (Batch of
                  79, Electrical Engg.) on 30th May 2020
                </h3>
                <p style={{ "text-align": "justify", "font-size": "14px" }}>
                  {` The Online Eminent Alumni Lecture Series, a Webinar was
                  conducted on 30th May 2020, at 4 pm on the topic of ?Institute
                  to Industry: How to aim beyond the Horizon'' by Mr Aditya
                  Bhattacharya, the senior technical specialist at Worley,
                  London, UK. He was a graduate of the Department of Electrical
                  Engineering, Batch of B.E.- 1979 and M.E. 1992 of NIT
                  Durgapur. In the webinar, he discussed the recession, and how
                  it would make the world difficult for engineers and jobs.
                  Hence, through his presentation, he enlightened the current
                  students about the increased hardships, as well as the
                  opportunities that lie ahead. He inspired everyone to have
                  higher ambitions to study further as much as possible and
                  enrich ourselves with vast knowledge which would make us
                  deserving enough and help us during job recruitments. Last but
                  not the least, he advised us to keep faith in ourselves, have
                  strong determination and enough positivity to work hard and
                  succeed in the near future. It was an interactive session and
                  it motivated us to a great extent.`}{" "}
                </p>
                <hr />
                <h3
                  style={{
                    "font-family": "'Nanum Gothic, sans-serif",
                    color: "#333",
                    "text-transform": "none",
                  }}
                >
                  Online Eminent Alumni Lecture by Poulami Das (Batch of 2012,
                  ECE) on 23rd May 2020
                </h3>
                <p style={{ "text-align": "justify", "font-size": "14px" }}>
                  {`NIT DURGAPUR ALUMNI CELL organized "Online Eminent Alumni
                  Lecture " on "POST COVID CAREER OPPORTUNITY, THREATS AND
                  REMEDIES" on 23rd May 2020 from 6:30 pm to 7:30 pm. It
                  commenced with the warm welcome of our distinguished alumna,
                  Dr Poulami Das Alumna, B.Tech, ECE (GOLD MEDALIST), Batch of
                  2012, Graduate Teaching Assistant, Georgia Tech., Research
                  intern, Microsoft USA. She first introduced herself and shared
                  her accomplishments with everyone. She stated that during the
                  COVID-19 surviving should be the first priority for all.
                  Importance should be given to taking care of our health by
                  maintaining hygiene, staying indoors and maintaining social
                  distance as well as our mental health. She mentioned the
                  various forthcoming corporate challenges such as restrictions
                  on hiring in many companies due to the economic crisis
                  post-COVID-19 period. However, every cloud has a silver
                  lining. Companies will continue hiring smart people, NCGS are
                  quite low in food-chains of a company. The companies which are
                  in a strategically better position may need greater workforce
                  for their halted projects. She advised us on how to prepare
                  ourselves for post-COVID- 19 - never leave any technical gaps,
                  improve communication skills and build a better network.
                  Practising mock interviews, seeking help from seniors and
                  taking own decisions is essential. There are challenges in
                  Research careers too since Universities across the globe is
                  economically hit. Consequently, there has been a large drop in
                  the number of applications /admissions. Although new research
                  areas are opening up and existing ones such as Quantum
                  Computing, Green Computing, Bio-Medical Research and Security
                  and Privacy will gain more importance. She mentored us on how
                  to prepare ourselves and stay updated with the current trends
                  in Industry and Research. It was a brainstorming webinar and
                  concluded with an interactive question and answer session.`}{" "}
                </p>
                <hr />
                <h3
                  style={{
                    "font-family": "'Nanum Gothic, sans-serif",
                    color: "#333",
                    "text-transform": "none",
                  }}
                >
                  Online Eminent Alumni Lecture by Subrata Dutta (Batch of 91,
                  Civil Engg.) on 23rd May 2020
                </h3>
                <p style={{ "text-align": "justify", "font-size": "14px" }}>
                  NIT Durgapur Alumni Cell organised ?Online Eminent Alumni
                  Lecture? on ?Reset -Reshape- Ramp up post-COVID-19? on 23 rd
                  May 2020 from 10:15 am to 11:15 am. It commenced with the warm
                  welcome of our eminent Alumnus, Mr. Subrata Dutta,
                  Vice-President (Marketing), SBU-Head, Everest Industries, New
                  Delhi and Alumnus of this Institute (Batch of 1991, B.E.,
                  Civil Engineering). He discussed his invaluable experience in
                  the management field over the course of years. He mainly
                  focused on career options post COVID-19 period. Our notable
                  faculty Prof. Amiya Kr. Samanta (HOD, Civil Engineering Dept.)
                  also attended the online lecture and shared his valuable
                  knowledge. Mr Dutta expressed his views on the betterment of
                  the Civil Engineering Department and the future of the
                  Institute. He also presented his views on various non-core
                  sectors for the students. While addressing the queries of the
                  students, he emphasized on the importance of different soft
                  skills required for Managerial Roles as well as other fields
                  in future. The lecture concluded with an interactive Q&amp;A
                  session with the students and Alumnus.{" "}
                </p>
                <hr />
              </div>
            </div>
            <div class="rounded-lg   flex flex-row  p-4">
              <div className="basis-8/12 text-white w-full">sgadsfgdsgdsfgfdgsdggdgdsfgdsgdsggdfgdfgdgdf</div>
              <button className="basis-4/12 rounded text-xs bg-slate-500 ml-auto text-slate-900  py-4 px-2">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Encore;
