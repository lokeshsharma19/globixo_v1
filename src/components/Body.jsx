import { ReactSVG } from "react-svg";
import iconDeer from "../assets/icon-deer.svg";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "../uiComponents/Button";
import Content from "./Content";
import data from "../public/data/data.json";

const Body = () => {
  return (
    <div className="relative w-full h-full text-white sm:flex sm:justify-center">
      <div className="relative z-10 container mx-auto py-4 ">
        <div className=" ">
          <div className="my-5 flex ">
            <div className="py-2 flex lg:border-r-0.5 border-gray-200">
              <div className="flex justify-center items-center w-10 h-10 rounded-md py-1 bg-white mx-4">
                <div className="border-2 rounded-xl border-yellow-500 p-0.5 bg-green-800 ">
                  <ReactSVG src={iconDeer} />
                </div>
              </div>
              <div className="mx-4 hidden lg:block sm:hidden">
                <p>{data.header.title}</p>
                <p className="text-xs text-gray-100">{data.header.subtitle}</p>
              </div>
            </div>

            <div className="p-2 flex">
              <div className=" flex justify-center items-center w-10 h-10 rounded-md py-1 bg-white mx-4">
                <div className="border-2 rounded-xl border-yellow-500 p-0.5 bg-green-800">
                  <ReactSVG src={iconDeer} />
                </div>
              </div>
              <div className="mx-4 hidden lg:block sm:hidden">
                <p>{data.header.event}</p>
                <p className="text-xs text-gray-100">
                  {data.header.eventLocation}
                </p>
              </div>
            </div>
          </div>
          {/* Blurred background for text */}
          <div className="mb-6 inline-block px-4 rounded-md">
            <p className="text-2xl lg:text-4xl sm:text-2xl ">
              Welcome to Zoloni
            </p>
            <p className="text-2xl lg:text-4xl sm:text-2xl">
              Exhibiting at Bharat Food Tech 2024
            </p>
          </div>
          <div className="flex flex-wrap my-4  text-gray-300 text-xs lg:text-sm sm:text-xs">
            <div className="flex items-center lg:border-r-0.5 border-gray-50 my-2 px-4">
              <LanguageIcon />
              <p className="ml-1">{data.header.eventLocation}</p>
            </div>
            <div className="lg:border-r-0.5 border-gray-50 px-4 my-2 flex items-center">
              <CalendarTodayIcon />
              <p className="ml-1">{data.header.eventDates}</p>
            </div>
            <div className="flex items-center my-2 px-4">
              <LocationOnIcon />
              <p className="ml-1">{data.header.booth}</p>
            </div>
          </div>
          <div className="mt-12 flex px-4 justify-center sm:justify-start">
            <Button />
          </div>
        </div>
        <div className="my-16 px-4">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Body;
