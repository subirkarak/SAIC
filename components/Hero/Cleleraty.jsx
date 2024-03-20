/* eslint-disable @next/next/no-img-element */
import React from "react";

const Celebrity = ({ imageSrc, name,  degree, post,university, place,award }) => {
  return (
    <div className="flex  my-16 items-center">
      <div className="w-[120%] md:w-[50%] ">
        <img
          src={imageSrc}
          alt="Image"
          className="w-full"
        />
      </div>
      <div className="flex-grow ml-4">
        <div className="flex items-center">
          <div className="w-px h-[200px] bg-gray-300 mr-2"></div>
          <div className="flex flex-col ">
            <div className="flex ">
              <div className="w-2 h-[150px] bg-gray-300 mr-2"></div>
              <div className="flex flex-col">
                <h4 className="text-yellow-400">{name}</h4>
                <small>
                  <cite title="Source Title" style={{ color: "#fff" }}>
                    {degree}
                    <i className="icon-map-marker"></i>
                  </cite>
                </small>
                <p
                  style={{
                    "font-size": "13px",
                    "font-weight": 400,
                    color: "#fff",
                  }}
                >
                  {post}
                  <br />
                 {university}
                  <br />
                  {place}
                </p>
              </div>
            </div>
            <div>
              <p
                style={{
                  "font-size": "13px",
                  "font-weight": "400",
                  color: "#fff",
                }}
              >
               {award}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Celebrity;
