import React from "react";
import { CircleAnimation } from "./Common/circleAnimation";
import { Line } from "../assets/svg/line";
import { AboutData } from "../data/about";
import TotalProjectsIcon from "../assets/svg/totalProjectsIcon";
import HappyClientsIcon from "../assets/svg/happyClientsIcon";
import CustomerServiceIcon from "../assets/svg/customerServiceIcon";

const WhoWeAre: React.FC = () => {
  return (
    <section className="relative h-full w-full">
      <div className="h-full flex">
        <div className="absolute -left-36 -top-36">
          <CircleAnimation height="h-96" weight="w-96" />
        </div>
        <div className="w-[45%] z-[10001] flex justify-center items-center">
          <img
            src="/src/assets/png/Photo.png"
            className="h-[95%] w-[80%] object-cover rounded-tl-custom-tr rounded-br-custom-bl"
            alt="Laptop"
          />
        </div>
        <div className="w-[55%] h-full flex justify-center items-center">
          <div className="w-[80%] flex flex-col gap-9">
            <p className="flex flex-col gap-1 text-center text-4xl font-bold text-orange-500">
              Who We Are
              <Line />
            </p>
            <div className="px-5 flex flex-col w-full gap-9 items-center">
              <p className="text-center text-5xl">{AboutData.second.head}</p>
              <p className="text-center text-2xl w-[75%] text-gray-600">
                {AboutData.second.para}
              </p>
              <div className="w-full p-5 flex items-center justify-evenly">
                <div className="flex flex-col items-center p-2">
                  <TotalProjectsIcon />
                  <p className="text-4xl font-extrabold">100+</p>
                  <p className="text-lg text-orange-500">Company Project</p>
                </div>
                <div className="flex flex-col items-center p-2">
                  <HappyClientsIcon />
                  <p className="text-4xl font-extrabold">70+</p>
                  <p className="text-lg text-orange-500">Happy Clients</p>
                </div>
                <div className="flex flex-col items-center p-2">
                  <CustomerServiceIcon />
                  <p className="text-4xl font-extrabold">40+</p>
                  <p className="text-lg text-orange-500">Customer Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
