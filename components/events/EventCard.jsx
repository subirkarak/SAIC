import { motion } from "framer-motion";

const EventCard = ({
  name,
  imagesrc,
  degree,
  post,
  date,
  venue,
  topic,
  desc,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
      className="event-card bg-gradient-to-r -ml-20 md:ml-40  from-slate-500 to-slate-300 my-10 rounded-lg p-6 h-90 shadow-blue-950 shadow-2xl text-white w-[300px] md:w-[1100px]"
      
    >
      <div className="md:flex ">
        <div className="basis-5/12 flex items-center justify-center ">
          <img src={imagesrc} alt="Speaker" className="w-48 rounded-lg" />
        </div>
        <div className=" pl-4 basis-7/12">
          <h2 className="text-2xl font-bold mb-2">{`Spekar Name :${name}`}</h2>
         
          {degree=="" ? (
            <></>
          ) : (
            <>
               <p className="text-sm font-semibold mb-1">{degree}</p>
            </>
          )}
          <p className="text-sm font-semibold mb-1">{post}</p>
          <p className="text-sm mb-1">{`Date & TIme :${date}`}</p>
       
          {venue=="" ? (
            <></>
          ) : (
            <>
               <p className="text-sm mb-1">{`Venue:${venue}`}</p>
            </>
          )}
          {topic=="" ? (
            <></>
          ) : (
            <>
              <p className="text-sm mb-2">{`Topic:${topic}`}</p>
            </>
          )}
          {desc=="" ? (
            <></>
          ) : (
            <>
                    <p className="text-sm">{desc}</p>
            </>
          )}


        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
