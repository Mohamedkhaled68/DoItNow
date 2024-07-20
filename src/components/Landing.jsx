import React, { useRef } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";

const Landing = () => {
  const targetSectionRef = useRef(null);

  const handleScrollToSection = () => {
    scroller.scrollTo("targetSection", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center py-[2rem] pt-[5rem]">
        <div className="flex flex-col items-center justify-center w-full md:w-[50%] grow">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-center font-bold text-gray-800 my-4">
            Transform Your Day, One Task at a Time.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-3 text-center">
            Simplify your tasks and achieve more with ease.
          </p>

          <button
            className="bg-accent hover:bg-[#5952d1] transition-colors duration-300 px-4 py-2 text-white text-lg font-semibold rounded-md mt-5"
            onClick={handleScrollToSection}
          >
            Discover Your Productivity
          </button>
        </div>
        <div className="w-full md:w-[50%] grow mt-8 md:mt-0">
          <img
            className="w-full h-full object-cover"
            src="./assets/icons/landing-icon.svg"
            alt="Productivity illustration"
          />
        </div>
      </div>

      <div
        id="targetSection"
        name="targetSection"
        ref={targetSectionRef}
        className="flex flex-col items-center justify-center min-h-screen mt-10 p-8"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-gray-800 my-4">
          Welcome to Your Productivity Hub
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mt-3 text-center">
          Here you can manage all your tasks, set goals, and track your
          progress.
        </p>
      </div>
    </>
  );
};

export default Landing;
