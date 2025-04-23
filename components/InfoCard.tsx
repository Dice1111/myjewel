import React from "react";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-3 text-center shadow-md p-5 text-dark-blue bg-background  max-w-[400px]">
      {icon}
      <h2 className="text-dark-blue">{title}</h2>
      <p className="text-[16px]">{description}</p>
    </div>
  );
};

export default InfoCard;
