import OurServicesAndToolsCard from "./card/serviceCard";

const Role = ["UI/UX", "DEVELOPING", "FRONT-END", "BACK-END"];

export const OurServicesAndTools = () => {
  return (
    <div className="h-full w-full flex flex-col items-center gap-16">
        <div className="flex w-[25%]">
            <p className="font-bold text-center text-3xl">
            We Provide the <span className="text-orange-500">Best Service</span> With Our Tools
            </p>
        </div>
        <div className="flex w-full h-full justify-center gap-6">
          {Role.map((r) => {
            return <OurServicesAndToolsCard classNames="" Role={r} />;
          })}
        </div>
    </div>
  );
};
