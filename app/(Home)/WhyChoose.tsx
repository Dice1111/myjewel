import InfoCard from "@/components/InfoCard";
import { GiDiamondHard } from "react-icons/gi";
import { IoRibbonOutline } from "react-icons/io5";
import { PiUserCircleCheckLight } from "react-icons/pi";

const InfoCardData = [
  {
    icon: <PiUserCircleCheckLight size={30} />,
    title: "Personal Design Consultation",
    description: "Work with our designers to create your perfect piece.",
  },
  {
    icon: <GiDiamondHard size={30} />,
    title: "Crafted with Luxury Materials",
    description:
      "Only the finest diamonds, gemstones, and precious metals used.",
  },
  {
    icon: <IoRibbonOutline size={30} />,
    title: "Lifetime Warranty",
    description:
      "Lifetime warranty on every piece, ensuring quality and lasting beauty.",
  },
];

const WhyChoose = () => {
  return (
    <section className="flex justify-center items-center px-10 py-30 bg-[#FCFCFC] relative overflow-hidden">
      <div className="text-center space-y-10 z-50">
        <h1 className="text-[36px] text-dark-blue">Why Choose MyJewel?</h1>
        <div className="md:flex space-y-10 md:space-y-0 md:space-x-10">
          {InfoCardData.map((card) => (
            <InfoCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <div className="absolute rounded-full w-[554px] h-[554px] bg-[#15274B] opacity-10 -right-80 -bottom-60 sm:-right-40 sm:-bottom-80 z-10"></div>

      <div className="absolute rounded-full w-[399px] h-[399px] bg-[#15274B] opacity-10 right-10 -bottom-60 sm:right-50 sm:-bottom-80  z-10"></div>
    </section>
  );
};

export default WhyChoose;
