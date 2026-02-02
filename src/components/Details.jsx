import React, { useState } from "react";
import CountUp from "../containers/CountUp";

export const Details = () => {
  const [data] = useState([0, 0, 0, 0]);

  return (
    <div className="w-screen flex-col flex justify-center items-center bg-gray-50 py-16 px-1">
      <h1 className="text-3xl fonn-helvetica-light text-black/80 w-full text-start px-4 pb-4 font-bold">Our Achivements</h1>
      <div className="flex flex-row justify-center items-center gap-1 md:gap-3 w-full mt-3 text-center max-w-7xl">
        {data.map((_, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center  transition-all duration-300 w-[280px] h-[200px] md:w-[300px] md:h-[300px] ${
              index % 2 === 1
                ? "bg-green-100 hover:bg-green-200"
                : "bg-white hover:bg-amber-50"
            }`}
          >
            <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={0.8}
              className="text-2xl md:text-6xl lg:text-7xl font-bold text-green-700"
            />
            <hr className="bg-black h-[0.5px] w-full font-lato-thin"/>
            <p className="mt-3 text-sm md:text-lg font-helvetica-light text-gray-700">
              Details of the card
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
