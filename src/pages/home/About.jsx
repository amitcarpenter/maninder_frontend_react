import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div
        className="w-full bg-center  bg-no-repeat bg-cover"
        style={{ backgroundImage: `url("././asset/background_white.webp")` }}
      >
        <div className="container px-4 lg:px-10 mx-auto ">
          <div className="flex flex-wrap">
            <div
              className="w-full lg:w-[40%] h-[21rem] md:h-[52rem] lg:h-auto bg-center rounded-xl  bg-no-repeat bg-cover"
              style={{ backgroundImage: `url("././asset/About_img_ori.jpg")` }}
            ></div>

            <div className="w-full lg:w-3/5 sm:py-14 md:pl-10 ">
              {/* <p className="text-xl italic mb-4">About</p> */}
              <h1 className="text-3xl lg:text-5xl font-[400] text-[#C5B351] capitalize  mb-5">
                Maninder Singh, Your Local Realtor
              </h1>

              <div className="">
                <p className="text-base leading-relaxed mb-4">
                  A versatile professional who has made a name for himself in
                  two distinct fields: real estate and information technology.
                  As a real estate agent, Maninder has helped numerous clients
                  find their dream homes or invest in profitable properties.
                  With his deep knowledge of the local real estate market and
                  his ability to negotiate favorable deals, he has earned a
                  reputation for being trustworthy, reliable, and
                  results-oriented.
                </p>

                <p className="text-base  leading-relaxed   mb-8">
                  In addition to his real estate expertise, Maninder is also a
                  skilled information technology professional. He has a degree
                  in computer science and has worked in various roles in the
                  tech industry for over a decade. His technical skills and
                  knowledge have enabled him to implement innovative solutions,
                  streamline processes, and enhance the efficiency and
                  effectiveness of the companies he has worked for.
                </p>

                <div className=" my-6">
                  <hr />
                  <div className="py-6">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 ">
                        <div
                          className=" flex items-center justify-center w-10 h-10 rounded-full border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
                                                 -full"
                        >
                          <Link
                            to="https://www.linkedin.com/in/maninder-singh-30674326b/"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </Link>
                        </div>
                        <div
                          className=" flex items-center 
                                                   justify-center w-10 h-10 rounded-full border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
                                                  -full"
                        >
                          <Link
                            to="https://www.instagram.com/maninder_singh_realestate/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </Link>
                        </div>

                        <div
                          className=" flex items-center 
                                                     justify-center w-10 h-10 rounded-full border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
                                                   -full"
                        >
                          <Link
                            to="https://www.facebook.com/profile.php?id=100082839065240"
                            target="_blank"
                          >
                            <FaFacebookF />
                          </Link>
                        </div>
                      </div>

                      <div>
                        <Link
                          to="/contact"
                          className="text-xl cursor-pointer font-prata flex items-center justify-center"
                        >
                          Contact{" "}
                          <FaLongArrowAltRight className="pl-1 pt-1 w-10" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
