import { daa2022, daa2019, daa2020, daa2021 } from "@/constants";
import AlumniCard from "./AlumniCard";
const Distinguished_Alumni = () => {
  return (
    <div className="md:mx-20">
      <div
        className=" bg-cover bg-center  bg-no-repeat"
        style={{
          "background-image":
            " url('	data:image/svg+xml,%3Csvg xmlns='http://www.w3.org…200' width='35' height='35'/%3E%3C/g%3E%3C/svg%3E')",
        }}
      >
        <h1 className="text-3xl tracking-wider pt-5 pb-5 mb-5 border-b-2 text-green-500 text-center">
          Distinguished Alumni Awards
        </h1>
        <h1 className="text-3xl tracking-wider pt-5 pb-5 mb-5  text-red-500 text-center">
          2019
        </h1>
        <div className="mx-40">
          {daa2019.map((alumni, index) => (
            <AlumniCard
              key={index}
              award={alumni.award}
              degree={alumni.degree}
              image={alumni.imageSrc}
              name={alumni.name}
              place={alumni.place}
              post={alumni.post}
              university={alumni.university}
            />
          ))}
        </div>
        <h1 className="text-3xl tracking-wider pt-5 pb-5 mb-5  text-red-500 text-center">
          2020
        </h1>
        <div className="mx-40">
          {daa2020.map((alumni, index) => (
            <AlumniCard
              key={index}
              award={alumni.award}
              degree={alumni.degree}
              image={alumni.imageSrc}
              name={alumni.name}
              place={alumni.place}
              post={alumni.post}
              university={alumni.university}
            />
          ))}
        </div>
        <h1 className="text-3xl tracking-wider pt-5 pb-5 mb-5  text-red-500 text-center">
          2021
        </h1>
        <div className="mx-40">
          {daa2021.map((alumni, index) => (
            <AlumniCard
              key={index}
              award={alumni.award}
              degree={alumni.degree}
              image={alumni.imageSrc}
              name={alumni.name}
              place={alumni.place}
              post={alumni.post}
              university={alumni.university}
            />
          ))}
        </div>
        <h1 className="text-3xl tracking-wider pt-5 pb-5 mb-5  text-red-500 text-center">
          2022
        </h1>
        <div className="mx-40">
          {daa2022.map((alumni, index) => (
            <AlumniCard
              key={index}
              award={alumni.award}
              degree={alumni.degree}
              image={alumni.imageSrc}
              name={alumni.name}
              place={alumni.place}
              post={alumni.post}
              university={alumni.university}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Distinguished_Alumni;
