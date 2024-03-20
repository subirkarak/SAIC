import React from "react";
import { alumniData } from "@/constants";
import AlumniCard from "./AlumniCard";

const Notable_alumni = () => {
  return (
    <div className="md:mx-20 mx-2 my-10">
      <h1 className="text-3xl tracking-wider pb-5 mb-5 border-b-2 text-center">
        Notable Alumni
      </h1>
      <div className="md:grid grid-cols-2 gap-8">
        {alumniData.map((alumni, index) => (
          <AlumniCard key={index} image={alumni.image} name={alumni.name} degree={alumni.degree} designation={alumni.designation} />
        ))}
      </div>
    </div>
  );
};

export default Notable_alumni;
