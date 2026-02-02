import React, { useState } from "react";
import CountUp from "../containers/CountUp";

export const Details = () => {
  const achievements = [
    { label: "Projects Delivered", value: 350 },
    { label: "MW Energy Generated", value: 45 },
    { label: "Carbon Offset (Tons)", value: 1200 },
    { label: "Years of Excellence", value: 15 },
  ];

  return (
    <div className="max-w-full mx-auto flex-col flex justify-center items-center bg-white py-24 px-4 overflow-hidden">
      <h2 className="text-2xl md:text-3xl text-black font-semibold w-full text-center mb-16 tracking-[0.3em] font-lato-thin uppercase">
        OUR <span className="text-green-600">ACHIEVEMENTS</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 w-full max-w-full lg:px-12">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-8 md:p-10 transition-all duration-700 rounded-[3rem] bg-white border border-gray-100 hover:shadow-2xl hover:border-green-100 group cursor-default"
          >
            <div className="flex items-baseline gap-1">
              <CountUp
                from={0}
                to={item.value}
                separator=","
                direction="up"
                duration={1.5}
                className="text-4xl md:text-5xl font-bold text-gray-900 font-lato-thin group-hover:text-green-600 transition-colors duration-500"
              />
              <span className="text-green-600 font-bold text-2xl">+</span>
            </div>
            <hr className="bg-gray-100 h-px w-12 my-6 border-none group-hover:w-full transition-all duration-700 ease-in-out"/>
            <p className="text-[10px] md:text-[11px] font-bold text-gray-600 uppercase tracking-[0.3em] text-center font-helvetica-light group-hover:text-gray-900 transition-colors duration-500 leading-relaxed">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
