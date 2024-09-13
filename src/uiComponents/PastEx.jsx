import React from "react";
import img from "../assets/image.png";

const PastEx = ({ heading, date }) => {
  return (
    <div className=" flex items-center">
      <div className=" flex items-center justify-center w-16">
        <img className=" rounded-full" src={img} alt="Expo" />
      </div>
      <div className=" flex flex-col p-4">
        <p className=" text-sm mb-1">{heading}</p>
        <p className="text-xs text-gray-600">{date}</p>
      </div>
    </div>
  );
};

export default PastEx;
