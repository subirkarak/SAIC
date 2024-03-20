import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
const Nav = () => {
  return (
    <div>
      {" "}
      <div className="flex h-5 items-center space-x-4 mt-12 text-sm">
        <div className="md:flex md:flex-row w-full ">
          <div className="basis-4/12 mb-5 mt-5 md:mt-0 ml-10">
            <img src="/saicelllogo.jpg" alt="" />
          </div>
          <div className="basis-1/12"></div>
          <div className="basis-3/12  mx-5 ">
            <img src="/caairlog.jpg" alt="" />
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Nav;
