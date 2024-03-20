import React from "react";

import { AiOutlineWhatsApp } from "react-icons/ai";
function Footer() {
  return (
    <>
      <div className="mt-20">
        <div className="md:flex flex-row pl-10 pr-7 py-7 bg-black ">
          <div className="basis-2/8 ">
            <img
              src="https://alumnitdgp.in/images/logo-black.png"
              className="h-[180px] w-[175px] my-10 mx-10 bg-black"
              alt="NIT logo"
            />
          </div>
          <div className="basis-1/4 flex flex-col ">
            <div className="basis-1/2">
              <a href="/" className="no-underline hover:underline relative text-yellow-500">
              <span className="tracking-4 bullet-point"></span>
                Quick links
              </a>

              
              <ol className="list-disc ml-20 font-thin text-xs leading-7 tracking-wider text-white">
                <a
                  href="https://alumnitdgp.in/AssoDeanMessage/"
                  className="no-underline hover:underline"
                >
                  Message from Co_ordinator
                </a>
                <br />
                <a
                  href="https://alumnitdgp.in/AlumniServices/"
                  className="no-underline hover:underline"
                >
                  Alumni at Glance
                </a>
                <br />
                <a
                  href="https://alumnitdgp.in/PhotoGallery/"
                  className="no-underline hover:underline"
                >
                  Gallery
                </a>
                <br />
                <a
                  href="https://alumnitdgp.in/VideoGallery/"
                  className="no-underline hover:underline"
                >
                  Showcase video
                </a>{" "}
                <br />
              </ol>
            </div>
            <div className="basis-1/2">
              <a href="/" className="no-underline hover:underline   text-white">
                For Alumni
              </a>
              <ol className="list-disc  text-orange-400">
                <a
                  href="https://alumnitdgp.in/AssoDeanMessage/"
                  className="no-underline hover:underline"
                >
                  Signup or Registration
                </a>
                <br />
                <a
                  href="https://alumnitdgp.in/AlumniServices/"
                  className="no-underline hover:underline"
                >
                  login for existing User
                </a>{" "}
                <br />
                <a
                  href="https://alumnitdgp.in/PhotoGallery/"
                  className="no-underline hover:underline"
                >
                  Donation / giving back
                </a>
                <br />
                <a
                  href="https://alumnitdgp.in/VideoGallery/"
                  className="no-underline hover:underline"
                >
                  Send Invitation
                </a>{" "}
                <br />
              </ol>
            </div>
          </div>
          <div className="basis-1/4 text-white flex flex-col text-center">
            <div className="basis-1/2">
              <a href="/" className="no-underline hover:underline">
                Important Links
              </a>
              <ol className="list-disc  text-orange-400">
                <a
                  href="https://alumnitdgp.in/AssoDeanMessage/"
                  className="no-underline hover:underline"
                >
                  About us
                </a>
                <br />
                <a
                  href="https://alumnitdgp.in/AlumniServices/"
                  className="no-underline hover:underline"
                >
                  Contact us
                </a>{" "}
                <br />
                <a
                  href="https://alumnitdgp.in/PhotoGallery/"
                  className="no-underline hover:underline"
                >
                  Privacy Policy
                </a>
                <br />
                <a
                  href="https://alumnitdgp.in/VideoGallery/"
                  className="no-underline hover:underline"
                >
                  Terms
                </a>
                <br />
                <a
                  href="https://alumnitdgp.in/VideoGallery/"
                  className="no-underline hover:underline"
                >
                  Help
                </a>
                <br />
              </ol>
            </div>
          </div>
          <div className="basis-1/4 text-white flex flex-col">
            <a
              href="/"
              className="no-underline hover:underline text-orange-400"
            >
              Contact Us
            </a>
            <div className="basis-2/8">
              <AiOutlineWhatsApp className="text-orange-400" />
              <a href="tel:+" alt="">
                +91 9434788010
              </a>
            </div>
            <hr />
            <div className="basis-3/8">
              <h3 className="text-orange-400 mt-2">MAIL</h3>
              <a href="mailto:" alt="">
                alumni@admin.nitdgp.ac.in
              </a>{" "}
              <br />
              <a href="mailto:" alt="">
                alumninitd@gmail.com
              </a>
              {/* <a href="mailto:" alt="" className="text-white"></a> */}
            </div>
            <hr />
            <div className="basis-3/8 mt-2">
              <h3 className="text-orange-400">LOCATION</h3>
              <p>
                Centre for Alumni Affairs & International Relations(C-AAIR){" "}
              </p>
             
              <p>
                3rd Floor, S. N. Ray Memorial Building NIT Durgapur.
                Durgapur-713209, West Bengal, INDIA
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 text-center text-white py-4">
      © 2023 NIT DURGAPUR. All rights reserved 
      </div>
    </>
  );
}

export default Footer;