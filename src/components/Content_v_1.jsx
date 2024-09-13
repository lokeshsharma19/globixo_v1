import ClickableChips from "../uiComponents/Chip";
import ClickableChips2 from "../uiComponents/Chip2";
import ClickableChips3 from "../uiComponents/Chip3";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LaunchIcon from "@mui/icons-material/Launch";
import Button from "../uiComponents/Button";
import AutoResponsive from "autoresponsive-react";
import PastEx from "../uiComponents/PastEx";
import { pastArr } from "../uiComponents/pastArr";

const Content = () => {
  return (
    <div className="flex flex-wrap-reverse justify-between">
      <div className="bg-white w-3.5/12 max-h-80 rounded-lg text-black p-4 self-end order-7">
        <p className=" text-black font-semibold">Company's Business</p>
        <div className="my-4 text-sm">
          <p className="">Company Type </p>
          <div className=" my-2">
            <ClickableChips />
          </div>
        </div>
        <div className="my-4 text-sm">
          <p className="">Product Categories </p>
          <div className=" my-2">
            <ClickableChips2 />
          </div>
        </div>
        <div className="my-4 text-sm">
          <p className="">Product Items </p>
          <div className=" my-2">
            <ClickableChips3 />
          </div>
        </div>
      </div>
      <div className="  bg-white max-w-80 rounded-lg text-black p-4 shadow-lg order-8">
        <p className="text-black font-semibold text-sm mb-4">
          Exhibitor Contact
        </p>
        <div className="grid grid-cols-2 gap-y-3 text-xs my-6 w-full items-center">
          <p className="text-gray-600">Name:</p>
          <p>Rajesh Kumar</p>

          <p className="text-gray-600">Email:</p>
          <p>Rajeshkumar@gmail.com</p>

          <p className="text-gray-600">Phone:</p>
          <p>+91 8423493148</p>

          <p className="text-gray-600">Address:</p>
          <p>
            B702, Pramukh Plaza, Cardinal Gracious Rd, near Western Express
            Metro Station, Andheri East, Mumbai, Maharashtra 400059
          </p>

          <p className="text-gray-600">Website:</p>
          <a
            href="http://www.zolonihere.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline flex">
            <LaunchIcon sx={{ width: "18px", marginRight: "2px" }} />
            www.zolonihere.com
          </a>

          <p className="text-gray-600">Social:</p>
          <div className="flex gap-3 items-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800">
              <FacebookIcon style={{ height: "28px" }} />
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800">
              <WhatsAppIcon />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600">
              <TwitterIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900">
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div className=" flex justify-center">
          <Button />
        </div>
      </div>
      <div className="bg-white w-3.5/12  rounded-lg text-black p-4 order-4 -translate-y-16">
        <p className=" text-black font-semibold">Company Overview</p>
        <p className="text-xs text-gray-600 mt-4">
          lou Farms rvt. Lta. Is a pioneering agricultural company tocused on
          revolutionizing the tarming industry Established in{" [Year]"}, our
          mission is to enhance food security and promote sustainable
          agricultural practices. We provid my-6e innovative solutions across
          diverse landscapes, supporting farmers and fostering a robust
          agricultural ecosystem.
        </p>
        <p className="text-xs text-gray-600 mt-6">
          We empower farmers with advanced tools and techniques, promote
          eco-friendly farming, and enhance crop yields through innovation. Our
          services include precision farming, agricultural consultancy.
        </p>
      </div>
      <div className="bg-white w-1/3 max-w-80 rounded-lg text-black p-4 order-5 mt-8">
        <p className=" text-black font-semibold my-2">
          Zaloni Past exhibitions
        </p>
        <div className="">
          {pastArr.map((item) => {
            return <PastEx heading={item.head} date={item.date} />;
          })}
        </div>
        <p className=" text-sm text-center underline text-btnColor">Show All</p>
      </div>
      <div className="bg-white w-1/3 max-w-80 rounded-lg text-black p-4 order-2"></div>
      <div className="bg-white w-1/3 max-w-80 rounded-lg text-black p-4 order-3"></div>
    </div>
  );
};

export default Content;
