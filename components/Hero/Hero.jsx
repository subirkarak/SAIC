import React from "react";
import Carosol from "./Carosol";
import Information from "./Information";
import Blog from "./Blog";
import Events from "./Events";
import Encore from "./Encore";
import Video from "./Video";
import Giving_Back from "./Giving_Back";
import Notablealmuni from "./Notablealmuni";

const Hero = () => {
  return (
    <>
      <div className="">
        <Carosol />
      </div>
      <div>
        <Information />
      </div>
      <div>
        <Blog />
      </div>
      <div>
        <Events/>
      </div>
      <div>
        <Encore/>
      </div>
      <div>
        {/* <Video videoId="https://www.youtube.com/embed/34zymmMm2SE"/> */}
         <Giving_Back/>
      </div>
      <div>
        <Notablealmuni/>
      </div>
    </>
  );
};

export default Hero;
