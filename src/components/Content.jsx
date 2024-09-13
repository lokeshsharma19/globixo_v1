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
import img1 from "../assets/img-1.jpg";
import vid from "../assets/temp.mp4";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";
import Member from "../uiComponents/Member.jsx";
import File from "../uiComponents/File.jsx";
import data from "../../public/data/data.json";

const Content = () => {
  return (
    <div className="grid lg:grid-cols-8 gap-4 w-full sm:grid-cols-2">
      <div className="bg-white rounded-lg text-black p-4 col-span-2 lg:col-span-5 row-span-4">
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

      {/* ######## ########## */}
      <div className="  bg-white rounded-lg text-black p-4 shadow-lg col-span-2 lg:col-span-3 row-span-5">
        <p className="text-black font-semibold text-sm mb-4">
          Exhibitor Contact
        </p>
        <div className="grid grid-cols-2 gap-y-3 text-xs my-6 w-full ">
          <p className="text-gray-600">Name:</p>
          <p>{data.exhibitorContact.name}</p>

          <p className="text-gray-600">Email:</p>
          <p>{data.exhibitorContact.email}</p>

          <p className="text-gray-600">Phone:</p>
          <p>{data.exhibitorContact.number}</p>

          <p className="text-gray-600">Address:</p>
          <p>{data.exhibitorContact.address}</p>

          <p className="text-gray-600">Website:</p>
          <a
            href={data.exhibitorContact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline flex items-center">
            <LaunchIcon sx={{ width: "18px", marginRight: "2px" }} />
            www.zolonihere.com
          </a>

          <p className="text-gray-600">Social:</p>
          <div className="flex gap-3 items-center">
            <a
              href={data.exhibitorContact.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800">
              <FacebookIcon style={{ height: "28px" }} />
            </a>
            <a
              href={data.exhibitorContact.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800">
              <WhatsAppIcon />
            </a>
            <a
              href={data.exhibitorContact.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600">
              <TwitterIcon />
            </a>
            <a
              href={data.exhibitorContact.social.linkedin}
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

      {/* ######## ########## */}

      <div className="bg-white  rounded-lg text-black p-4 col-span-2 lg:col-span-5 row-span-4">
        <p className=" text-black font-semibold">Company Overview</p>
        <p className="text-xs text-gray-600 mt-4">
          {data.companyOverview.overview[0]}
        </p>
        <p className="text-xs text-gray-600 mt-6">
          {data.companyOverview.overview[1]}
        </p>
      </div>

      {/* ######## ########## */}

      <div className="bg-white rounded-lg text-black p-4 col-span-2 lg:col-span-3 row-span-5">
        <p className=" text-black font-semibold my-2">
          Zaloni Past exhibitions
        </p>
        <div className="">
          {data.pastExhibitions.map((item) => {
            return <PastEx heading={item.head} date={item.date} />;
          })}
        </div>
        <p className=" text-sm text-center underline text-btnColor">
          <a href="#">Show All</a>
        </p>
      </div>
      <div className="bg-white rounded-lg text-black p-4 col-span-2 lg:col-span-5 row-span-4">
        <p className="text-black font-semibold my-2">Videos & Images</p>
        <div className="grid lg:grid-cols-3 gap-2">
          <div className="lg:col-span-2 sm:col-span-3">
            <video
              className="w-full h-full object-cover "
              src={vid}
              controls></video>
          </div>
          <div className="lg:col-span-1 sm:col-span-3">
            <img className="w-full h-full object-cover " src={img1} alt="" />
          </div>
          <div className="lg:col-span-1 sm:col-span-3">
            <img className="w-full h-full object-cover " src={img3} alt="" />
          </div>
          <div className="lg:col-span-2 sm:col-span-3">
            <img className="w-full h-full object-cover " src={img2} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg text-black p-4 col-span-2 lg:col-span-3 row-span-3">
        <p className=" text-black font-semibold my-2">Member</p>
        <div className="">
          {data.members.map((item) => {
            return <Member {...item} />;
          })}
        </div>
        <p className=" text-sm text-center mb-1 underline text-btnColor">
          <a href="#">Show All</a>
        </p>
      </div>
      <div className="bg-white rounded-lg text-black p-4 col-span-2 lg:col-span-5 row-span-4">
        <p className=" text-black font-semibold my-2">Files</p>
        <div className=" flex flex-wrap justify-around my-2">
          {data.files.map((item) => {
            return <File {...item} />;
          })}
        </div>
        <p className=" text-sm text-center underline text-btnColor">Show All</p>
      </div>
    </div>
  );
};

export default Content;
