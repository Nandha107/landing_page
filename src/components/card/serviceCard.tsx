import React from "react";
import PenIcon from "../../assets/svg/penIcon";
interface Props {
  Role: string;
  classNames:string
}
const OurServicesAndToolsCard: React.FC<Props> = ({ Role,classNames }) => {
  return (
    <div className={`flex flex-col ${classNames} project-card rounded-b-3xl shadow-lg border rounded-3xl w-[20%] h-[80%] justify-center items-center transition-transform duration-500 hover:scale-105`}>
      <span className="bg-orange-500 rounded-t-3xl w-full h-[20%]"></span>
      <span className="h-[80%] flex flex-col items-center justify-center gap-2">
        <span className="">UI / UX Design And {Role}</span>
        <p>Developer</p>
        <span className="">
          <PenIcon />
        </span>
      </span>
      
    </div>
  );
};

export default OurServicesAndToolsCard;
