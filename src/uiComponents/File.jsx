import fileImg from "../assets/fileImg.png";

const File = ({ name}) => {
  return (
    <div className=" border-0.5 my-2 rounded-md shadow-lg flex flex-col items-center p-3">
      <div className="">
        <img className=" w-40 h-40" src={fileImg} alt="" />
      </div>
      <p className=" mt-3">{name}</p>
    </div>
  );
};

export default File;
