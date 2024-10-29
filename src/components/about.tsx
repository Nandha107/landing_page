import React from "react";
import { CircleAnimation } from "./Common/circleAnimation";
import { Line } from "../assets/svg/line";
import { AboutData } from "../data/about";

const About: React.FC = () => {
  return (
    <section className="relative h-full w-full">
      <div className="h-full flex">
        <div className="absolute -right-48 -top-10">
          <CircleAnimation height="h-96" weight="w-96" />
        </div>
        <div className="w-[55%] h-full flex justify-center items-center">
          <div className="w-[70%] flex flex-col gap-9">
            <p className="flex flex-col gap-1 text-center text-4xl font-bold text-orange-500">
              About Us
              <Line />
            </p>
            <div className="px-5 flex flex-col w-full gap-8 items-center">
              <p className="text-center text-5xl">{AboutData.first.head}</p>
              <p className="w-[85%] text-center text-2xl text-gray-600">
                {AboutData.first.para}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[45%] z-[10001] flex justify-center items-center">
          <img
            src="/src/assets/png/Photo.png"
            className="h-[95%] w-[80%] object-cover rounded-tr-custom-tr rounded-bl-custom-bl"
            alt="Laptop"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
