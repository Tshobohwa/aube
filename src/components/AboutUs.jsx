import React from "react";

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
      <div className="mx-[8rem] my-[10rem] grid grid-cols-3"></div>
    </div>
  );
};

export default AboutUs;
