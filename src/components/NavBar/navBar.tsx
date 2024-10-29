import React, { useState } from "react";
import Dropdown from "../Common/dropdown";
import { PrimaryButton } from "../Common/button";
import { navLinksData } from "../../constant/navData";
import { useNavigate } from "react-router-dom";

interface Props {
  buttonText: string;
}

const dropdownOptions: { label: string; href?: string }[] = [
  { label: "Account Settings", href: "/settings" },
  { label: "Support", href: "/support" },
  { label: "Logout", href: "/logout" },
];

export const NavBar: React.FC<Props> = ({ buttonText }) => {
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState<string>("home");

  const scrollToSection = (sectionId: any) => {
    navigate(`/${sectionId}`); // Update URL
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink(sectionId); // Update active link state
  };

  return (
    <div className="bg-white shadow-xl h-full w-full flex items-center px-4">
      <div className="text-orange-500 italic flex gap-1 items-center w-[10%] h-full">
        <svg
          viewBox="0 0 549 441"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
        >
          <path
            d="M21.8977 376.748L1.91785 375.851L0.122517 415.81L20.1024 416.708L21.8977 376.748ZM429.277 212.947L412.33 223.568L429.277 212.947ZM20.1024 416.708C81.9745 419.488 173.803 416.086 247.392 396.117C283.978 386.19 318.367 371.572 341.968 349.629C366.76 326.579 379.209 295.62 370.362 257.755L331.411 266.855C336.66 289.32 330.133 306.014 314.731 320.335C298.137 335.763 271.113 348.234 236.917 357.513C168.942 375.958 81.7331 379.437 21.8977 376.748L20.1024 416.708ZM370.362 257.755C360.384 215.041 337.081 186.592 307.239 173.144C277.88 159.915 244.859 162.448 217.578 176.252C190.172 190.119 167.736 215.738 159.671 249.726C151.569 283.874 158.481 324.099 185.132 366.622L219.026 345.379C196.795 309.909 193.463 280.572 198.591 258.961C203.756 237.19 218.026 220.854 235.638 211.943C253.375 202.968 273.684 201.897 290.806 209.613C307.444 217.11 323.772 234.155 331.411 266.855L370.362 257.755ZM185.132 366.622C212.373 410.085 249.169 433.169 288.254 438.976C326.783 444.699 365.353 433.329 396.558 412.151C458.459 370.14 497.444 284.051 446.223 202.326L412.33 223.568C449.076 282.198 423.345 345.629 374.096 379.053C349.726 395.593 321.113 403.418 294.132 399.41C267.707 395.484 240.667 379.909 219.026 345.379L185.132 366.622ZM446.223 202.326C430.675 177.518 427.581 157.485 430.401 141.36C433.276 124.916 442.813 109.635 457.795 95.6093C488.293 67.057 536.819 48.0286 573.065 39.6696L564.076 0.69268C524.568 9.80411 468.261 31.0168 430.457 66.409C411.288 84.3552 395.807 106.973 390.999 134.47C386.135 162.285 392.691 192.234 412.33 223.568L446.223 202.326Z"
            fill="#FF6F1E"
          />
        </svg>
        <span className="font-medium text-xl">uperior</span>
      </div>
      <div className="h-full w-[90%] flex items-center">
        <div className="w-[65%] h-full flex justify-end items-center gap-10 list-none">
          {navLinksData.map(({ _id, title, link }) => {
            return (
              <li
                className={`text-base font-normal tracking-wide cursor-pointer transition-all duration-300 ${
                  activeLink === link
                    ? "text-orange-500" // Active link color
                    : "text-gray-400 hover:text-orange-500"
                }`}
                key={_id}
                onClick={() => scrollToSection(link)}
              >
                {title}
              </li>
            );
          })}
          <span className="w-[20%]">
            <Dropdown options={dropdownOptions} text="Our Services" />
          </span>
        </div>
        <div className="w-[35%] h-full flex items-center justify-end">
          <PrimaryButton
            text={buttonText}
            className={`w-[30%]`}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
