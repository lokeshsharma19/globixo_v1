import React from "react";
import img from "../assets/profile.png";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import data from "../data.json";

const Member = ({ name, des, num, email }) => {
  return (
    <div className=" shadow-md border-0.5 border-gray-300 my-3 rounded-lg p-2">
      <div className=" flex items-center">
        <div className=" w-10 flex justify-between items-center">
          <img className="rounded-full h-10 object-cover" src={img} alt="" />
        </div>
        <div className=" flex flex-col mx-2">
          <p className="text-sm mb-1">{name}</p>
          <p className="text-xs text-gray-600">{des}</p>
        </div>
      </div>
      <div className=" flex w-full mt-3">
        <div className="flex items-center">
          <div className=" flex items-center justify-center text-gray-400">
            <PhoneIcon sx={{ height: "18px" }} />
          </div>
          <p className="text-xs text-gray-400 mx-1">{num}</p>
        </div>
        <div className="flex items-center ml-2">
          <div className=" flex items-center justify-center text-gray-400">
            <MailOutlineIcon sx={{ height: "18px" }} />
          </div>
          <p className="text-xs text-gray-400 mx-1">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Member;
