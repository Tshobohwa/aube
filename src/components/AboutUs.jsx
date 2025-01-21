import React from "react";
import ServiceCard from "./ServiceCard";

const AboutUs = () => {
  return (
    <div className="w-full pt-[3rem]">
      <h2 className="font-poppins text-3xl text-secondary-400 text-center">
        A propos de nous
      </h2>
      <p className="text-center">
        Nous nous concentrons sur la delivrabilitee de votre produit.
      </p>
      <h3>Nos services</h3>
      <div className="mx-[8rem] my-[10rem] grid grid-cols-3 gap-[1px] bg-secondary-200 p-[1px]">
        <ServiceCard title={"Development web"} />
        <ServiceCard title={"Development Mobile"} />
        <ServiceCard title={"Consultation IT"} />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default AboutUs;
