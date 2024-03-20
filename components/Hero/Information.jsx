import React from "react";
import Logo from "./Logo";
import Login from "./Login";

const Information = () => {
  return (
    <div
      className='block w-full max-w-screen-2xl absolute top-[41%] sm:top-[560px] sm:flex flex-row bg-["https://alumnitdgp.in/images/home/home1.jpg"] bg-cover bg-center bg-no-repeat'
      style={{
        "background-image":
          " url('https://alumnitdgp.in/images/home/home1.jpg')",
      }}
    >
      {" "}
      <div className="basis-2/12">
        <Logo />
      </div>
      <div className="basis-3/12">
       <Login/>
      </div>
      <div className="flex flex-col basis-7/12 justify-center items-center text-center mx-auto ">
  <h1 className="flex justify-center text-4xl text-white w-full ">Register Now....</h1><br/>
  <h1 className=" justify-center text-3xl text-white text-opacity-50 ">To be an NITDian/Recolian</h1>
  <div className="bg-white mx-0 w-full max-w-full overflow-hiddden sm:mr-8 overflow-x-hidden">
  <p className="animate-marquee overflow-x-hidden flex">Nomination for Distinguesd Almuni-Awards-2022 PDF|DOCx</p>
</div>

</div>
    </div>
  );
};

export default Information;
