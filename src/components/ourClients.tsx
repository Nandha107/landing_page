import Brand from "../assets/svg/clientsBrand/brand";
import ClassicDesign from "../assets/svg/clientsBrand/classicDesign";
import ModernHome from "../assets/svg/clientsBrand/moderHome";
import NatureHome from "../assets/svg/clientsBrand/natureHome";
import VS from "../assets/svg/clientsBrand/vs";

const clients = [
  { svg: <ModernHome />, alt: "Modern Home Logo" },
  { svg: <VS />, alt: "Vs Logo" },
  { svg: <Brand />, alt: "BRAND Logo" },
  { svg: <NatureHome />, alt: "Nature Home Logo" },
  { svg: <ClassicDesign />, alt: "Classic Design Studio Logo" },
];

export const OurClients = () => {
  return (
    <section className="flex flex-col gap-4 items-center justify-center h-full w-full">
      <p className="text-4xl font-bold">Our Clients</p>
      <p className="text-lg text-gray-500">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flex justify-around items-center w-[70%]">
        {clients.map((client, _) => client.svg)}
      </div>
    </section>
  );
};
