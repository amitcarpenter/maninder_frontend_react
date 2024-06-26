import React from "react";
import "./Homebanner.css";
import Video from "../HomePageVideo/vidoe";
const Homebanner = () => {
  return (
    <>
      <section className="w-full h-[350px] sm:h-screen relative">
        {/* <video
          autoPlay
          muted
          loop
          id="myVideo"
          className="w-full h-full object-cover"
        >
          <source src="./asset/sarah-toop.mp4" type="video/mp4" />
        </video> */}
        <Video />
        <div className=" bg-black bg-opacity-40   text-center absolute inset-0 flex items-center justify-center">
          <div className=" max-w-4xl mx-auto px-4 lg:px-10">
            <div>
              <p className="text-white text-center text-3xl sm:text-6xl font-prata font-normal sm:leading-snug mb-4">
                YOUR TRUST OUR COMMITMENT{" "}
              </p>
              <p className="text-white text-center text-xl font-prata font-normal sm:text-2xl">
                Discover Your Perfect Space Today.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homebanner;
