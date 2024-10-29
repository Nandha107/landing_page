import SpecializationCard from "./card/specializationCard";

export const Specialization = () => {
  const items = [
    {
      img: "https://images.herzindagi.info/image/2024/Mar/best-Laptop-brands-1.jpg",
      text: "This is the first item.",
    },
    {
      img: "https://images.herzindagi.info/image/2024/Mar/best-Laptop-brands-1.jpg",
      text: "This is the second item.",
    },
    {
      img: "https://images.herzindagi.info/image/2024/Mar/best-Laptop-brands-1.jpg",
      text: "This is the third item.",
    },
    {
      img: "https://images.herzindagi.info/image/2024/Mar/best-Laptop-brands-1.jpg",
      text: "This is the third item.",
    },
  ];

  return (
    <div className="items-center justify-center border-4 px-10 border-green-900">
      {/* <span className="grid grid-cols-2 w-full items-center text-center place-self-center ">
        {items.map((item) => {
          return (
            <div className="border border-green-900 w-[60%]">
              <SpecializationCard img={item.img} text={item.text} />
            </div>
          );
        })}
      </span> */}
    </div>
  );
};
