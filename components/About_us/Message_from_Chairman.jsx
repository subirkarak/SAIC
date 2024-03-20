import React from "react";

const Message_from_Chairman = () => {
  return (
    <div className="md:mx-20">
      <div
        className=" bg-cover bg-center bg-no-repeat"
        style={{
          "background-image":
            " url('https://alumnitdgp.in/images/home/dean_msg.jpg')",
        }}
      >
        <div className="px-10 backdrop-contrast-50 bg-transparent backdrop-brightness-150">
          <h1 className="text-center text-3xl pt-10 pb-5 mb-5 border-b-2">
            From the Desk of the Chairman
          </h1>
          <div className="">
            <img
              src="	https://alumnitdgp.in/images/home/asso_dean.jpg"
              class="img-responsive"
              style={{
                "box-shadow":
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                width: " 250px",
                float: " left",
                " margin-right": "50px",
                " margin-bottom": "15px",
              }}
              alt=""
            />
            <p className="leading-8">
              <b style={{ "font-size": "20px" }}>
                Heartfelt greetings to our beloved Alumni!
              </b>
              <br />
              Our founding in the year 1960 as one of the eight colleges was
              aimed to function as a pace setter for engineering education in
              the country and to foster national integration. Since its
              inception of the Institute, the alumni have truly lived up to the
              expectation and have scaled great heights in their individual
              fields of endeavour.
              <br />
              <br />
              As we embark on the journey to take the Institute to even greater
              heights, the role of the alumni would be extremely significant and
              indispensable. Therefore, it is my appeal to each alumnus/ alumna
              to come forward and join hands with the faculty, staff and
              students of the Institute in this noble endeavour. In this regard,
              the alumni feedback and suggestions are also immensely valuable as
              we strive to broaden and enrich the Institute-alumni connection.
              <br />
              <br />
              Our current students are overwhelmed by the willingness of the
              alumni to share their experiences and help them take right
              decisions as far their career opportunities are concerned. I
              further encourage the NIT Durgapur alumni to support and
              participate in the programs and initiatives that the Centre for
              Alumni Affairs and International Relations (CAAIR) is taking at
              present and will be taking in future as well.
              <br />
              <br />
              I welcome all the alumni members along with their families and
              friends to the campus of NIT Durgapur. Hope you will be able take
              the most memorable walk down the memory lane and thus make this
              visit truly grand.
              <br />
              Sincerely,
            </p>
            <p className="text-center pt-10 pb-8">
            <b>Prof. Indrajit Basak</b>
            </p>
            <p className="text-center py-1">
          
            Chairman, CAAIR
            </p>
            <p className="text-center pt-1 pb-20">
          
           
            National Institute of Technology Durgapur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message_from_Chairman;
