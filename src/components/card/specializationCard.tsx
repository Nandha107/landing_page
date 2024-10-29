import React from "react";
interface Props {
  img: string;
  text: string;
}
const SpecializationCard: React.FC<Props> = ({ img }) => {
  return (
    <div className="flex flex-col border border-red-900">
      <img
        src={img}
        className="bg-gray-200 rounded-3xl relative w-[30%]"
      />

      <div className="bg-[#F5F7FA] shadow-lg h-48 w-[75%] rounded-3xl flex  flex-col justify-center relative z-10 text-center">
        <h2 className="font-bold text-xl text-orange-500">
          Customization suited to your
          <br className="hidden md:block" /> business needs
        </h2>
        <p className="text-muted-foreground">
          We specialize in elevating your brand's voice. Through ROI-focused
          strategies, we craft compelling narratives, ensuring distinctiveness
          and resonance in the market.
        </p>
        <a
          href="#"
          className="bg-secondary font-bold text-orange-500 hover:bg-secondary/80 py-2 px-4 rounded-md inline-flex items-center justify-center"
        >
          Read more <span className=" font-bold text-lg">→</span>
        </a>
      </div>
    </div>
  );
};

export default SpecializationCard;
