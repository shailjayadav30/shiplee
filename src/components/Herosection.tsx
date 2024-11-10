import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="z-0 bg-[#6222CC] dark:bg-[#15072c] h-screen flex items-center justify-center px-4 md:px-20 py-20">
      <div className="w-full md:w-[50%] text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold pb-4 text-white dark:text-gray-100">
          Join the Shiplee Franchise
        </h1>
        <p className="text-base md:text-lg text-gray-300 dark:text-gray-300 pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          possimus! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Obcaecati, quidem.
        </p>
        <button className="bg-[#fcb736] dark:bg-[#fca236] text-[#6222CC] dark:text-white py-2 px-6 rounded-full font-bold hover:bg-[#fcb736] dark:hover:bg-[#fca236] hover:scale-105 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
