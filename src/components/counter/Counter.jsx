import React from "react";
import CountUp from "react-countup";
import "./Counter.css";

export const Counter = () => {
  return (
    <div className="w-full h-[50vh] backgr flex  justify-evenly items-center banner">
      <div className="flex flex-col justify-center items-center">
        <CountUp
          end={20}
          duration={5}
          separator=","
          className="text-[2rem] text-white font-[bold] text-center "
        />
        <p className="text-white text-[1rem] font-[500]">ОКУП БУТУРГОНДОР</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <CountUp
          end={10}
          duration={5}
          separator=","
          className="text-[2rem] text-white font-[bold] text-center "
        />
        <p className="text-white text-[1rem] font-[500]">ОКУП ЖАТКАНДАР</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <CountUp
          end={16}
          duration={5}
          separator=","
          className="text-[2rem] text-white font-[bold] text-center "
        />
        <p className="text-white text-[1rem] font-[500]">ИШТЕП ЖАТКАНДАР</p>
      </div>
    </div>
  );
};
