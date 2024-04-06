import React from "react";
import "./Homebanner.css";
const Homebanner = () => {
  return (
    <>
      <section className="w-full h-[350px] sm:h-screen relative">
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          className="w-full h-full object-cover"
        >
          <source src="./asset/sarah-toop.mp4" type="video/mp4" />
        </video>
        <div className=" bg-black bg-opacity-40   text-center absolute inset-0 flex items-center justify-center">
          <div className=" max-w-4xl mx-auto px-4 lg:px-10">
            <div>
              <p className="text-white text-center text-3xl sm:text-6xl font-prata font-normal sm:leading-snug mb-4">
                FINDING YOU A PLACE TO FEEL CLOSER TO HOME.
              </p>
              <p className="text-white text-center text-xl font-prata font-normal sm:text-2xl">
                SERVING THE LOWER MAINLAND OVER 12 YEARS
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homebanner;
