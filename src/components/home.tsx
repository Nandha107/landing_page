import React from "react";
import { CircleAnimation } from "./Common/circleAnimation";
import Wave from "../assets/svg/wave";
import { Line } from "../assets/svg/line";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { PrimaryButton } from "./Common/button";

const Home: React.FC = () => {
  return (
    <div className="relative h-full w-full bg-gradient-to-r from-orange-500/15 via-orange-500/10 to-orange-500/25">
      <div className="absolute -left-32 -top-10">
        <CircleAnimation />
      </div>
      <div className="flex p-5 justify-center items-center h-full">
        <div className="w-[90%] space-y-5 h-[75%]">
          <div className="w-full">
            <p className="flex flex-col gap-1 text-center font-bold text-orange-500 w-[15%]">
              Website Development
              <Line />
            </p>
          </div>
          <div className="flex flex-col gap-5 w-[60%]">
            <p className="text-6xl font-bold">
              {/* {description1} */}
              Secure Access to private data for your distributed workforce
            </p>
            <p className="text-2xl font-light text-gray-400">
              {/* {description2} */}
              Replace Corporate VPNs With a More secure, Useble And performant
              Zero Trust Access Solution
            </p>
          </div>
          <div className="flex gap-5 items-center w-full">
            <PrimaryButton
              text={"Message Us Now"}
              onClick={() => {}}
              className="w-[20%] min-h-[3.5rem] max-h-[3.5rem] rounded-[1.5rem] text-lg border border-orange-500 shadow-md"
              isIconReverse
              icon={<FaTelegramPlane />}
            />

            <div className="flex items-center flex-row gap-2 w-[20%]">
              <p className="h-14 w-14 bg-[#F4F0EC] p-3 flex rounded-full justify-center items-center text-center">
                <BsTelephone className="h-7 text-orange-500 w-5 rounded-full" />
              </p>
              <p className="flex flex-col gap-1 justify-center h-full">
                <p className="font-bold text-sm">012345678</p>
                <p className="text-sm text-[#4D5053]">Call Us Anytime</p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-3 right-0 w-[33%]">
        <svg
          viewBox="0 0 549 441"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.8977 376.748L1.91785 375.851L0.122517 415.81L20.1024 416.708L21.8977 376.748ZM429.277 212.947L412.33 223.568L429.277 212.947ZM20.1024 416.708C81.9745 419.488 173.803 416.086 247.392 396.117C283.978 386.19 318.367 371.572 341.968 349.629C366.76 326.579 379.209 295.62 370.362 257.755L331.411 266.855C336.66 289.32 330.133 306.014 314.731 320.335C298.137 335.763 271.113 348.234 236.917 357.513C168.942 375.958 81.7331 379.437 21.8977 376.748L20.1024 416.708ZM370.362 257.755C360.384 215.041 337.081 186.592 307.239 173.144C277.88 159.915 244.859 162.448 217.578 176.252C190.172 190.119 167.736 215.738 159.671 249.726C151.569 283.874 158.481 324.099 185.132 366.622L219.026 345.379C196.795 309.909 193.463 280.572 198.591 258.961C203.756 237.19 218.026 220.854 235.638 211.943C253.375 202.968 273.684 201.897 290.806 209.613C307.444 217.11 323.772 234.155 331.411 266.855L370.362 257.755ZM185.132 366.622C212.373 410.085 249.169 433.169 288.254 438.976C326.783 444.699 365.353 433.329 396.558 412.151C458.459 370.14 497.444 284.051 446.223 202.326L412.33 223.568C449.076 282.198 423.345 345.629 374.096 379.053C349.726 395.593 321.113 403.418 294.132 399.41C267.707 395.484 240.667 379.909 219.026 345.379L185.132 366.622ZM446.223 202.326C430.675 177.518 427.581 157.485 430.401 141.36C433.276 124.916 442.813 109.635 457.795 95.6093C488.293 67.057 536.819 48.0286 573.065 39.6696L564.076 0.69268C524.568 9.80411 468.261 31.0168 430.457 66.409C411.288 84.3552 395.807 106.973 390.999 134.47C386.135 162.285 392.691 192.234 412.33 223.568L446.223 202.326Z"
            fill="#FF6F1E"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 w-full">
        <Wave />
      </div>
    </div>
  );
};

export default Home;
