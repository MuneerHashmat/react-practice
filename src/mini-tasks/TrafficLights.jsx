import { useEffect } from "react";
import { useState } from "react";

const TrafficLights = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[100px] h-[500px] bg-black rounded-full flex flex-col justify-around py-10 items-center">
        <div className="w-[80px] h-[80px] rounded-full z-10 bg-gray-300"></div>
        <div className="w-[80px]  h-[80px] rounded-full z-10 bg-gray-300"></div>
        <div className="w-[80px]  h-[80px] rounded-full z-10 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default TrafficLights;
