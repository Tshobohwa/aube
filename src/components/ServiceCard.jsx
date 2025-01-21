import React from "react";

const ServiceCard = ({ title, details }) => {
  return (
    <div className="w-full p-4  bg-white hover:border-l-4 border-l-secondary-200 hover:scale-[1.1] hover:shadow-md shadow-secondary-200 h-[15rem]">
      <h3 className="text-xl font-poppins">{title}</h3>
    </div>
  );
};

export default ServiceCard;
