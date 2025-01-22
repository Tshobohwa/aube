import React from "react";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import OurWorks from "../components/OurWorks";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <section className="h-[100vh] w-full flex items-center justify-center bg-secondary-400">
        <div className="flex flex-col items-center">
          <h1 className="text-[5rem] font-zen-dots text-primary-950">aube</h1>
          <p className="mt-[-2rem] font-poppins">
            compagnie de development de logiciels
          </p>
          <h2 className="font-work">
            Nous donnons vie aux logiciels dont vous revez!
          </h2>
        </div>
      </section>
      <AboutUs />
      <OurWorks />
    </div>
  );
};

export default Home;
