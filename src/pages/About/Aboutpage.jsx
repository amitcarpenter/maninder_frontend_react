import React from "react";
import Header from "../../components/header/Header";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import ContentToggle from "../../components/ContentToggle";
import Footer from "../../components/footer/Footer";
const Aboutpage = () => {
  return (
    <>
      <Header />
      <div
        className="bg-black flex justify-center items-center text-white  w-full bg-cover bg-no-repeat h-56"
        style={{ backgroundImage: `url("/asset/bg-lines-svg.svg")` }}
      >
        <div>
          <h1 className="text-2xl lg:text-6xl font-[400] mb-4 text-[#C5B351] ">
            About Maninder Singh
          </h1>
          <p className="text-white text-xl text-center font-normal font-prata  tracking-tight">
            Get To Know Our Talented Team.
          </p>
        </div>
      </div>

      <div
        className="py-4 md:py-16 w-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("/asset/main-home-bg-img.webp")` }}
      >
        <div className="container px-4 lg:px-10 mx-auto ">
          <div className="flex flex-wrap gap-4 lg:gap-0">
            <div className="bg-white w-full lg:w-3/5 lg:my-10 rounded-tl-lg rounded-bl-lg  p-4 lg:p-8 ">
              <h1 className="text-3xl lg:text-5xl font-[400] text-[#C5B351] capitalize  mb-5">
                {" "}
                Meet Maninder Singh
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
                  Maninder's unique combination of skills and experience makes
                  him a valuable asset to anyone looking to buy, sell, or invest
                  in real estate, as well as companies seeking to leverage
                  technology to achieve their business goals. With his passion
                  for both fields, he is committed to providing his clients with
                  exceptional service and delivering exceptional results.
                </p>

                <div className=" my-6">
                  <hr />
                  <div className="py-4">
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
                        <Link to="/contact" className="cursor-pointer">
                          <span className="text-xl cursor-pointer font-prata flex items-center justify-center ">
                            Contact{" "}
                            <FaLongArrowAltRight className="pl-1 pt-1 w-10" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>

            <div
              className="w-full lg:w-[40%] h-[21rem] md:h-[52rem] lg:h-auto bg-center rounded-xl  bg-no-repeat bg-cover"
              style={{ backgroundImage: `url("././asset/About_img_ori.jpg")` }}
            ></div>
          </div>
        </div>
      </div>

      <div
        className=" my-5 py-4 md:py-16 w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("/asset/background-pattern-gold-arch.svg")`,
        }}
      >
        <div className="flex flex-col text-center w-full mb-5 lg:mb-14">
          <h1 className=" text-2xl lg:text-5xl font-[400] mb-4 text-[#C5B351]  ">
            About Maninder Singh
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Maninder Singh is a dedicated and knowledgeable real estate agent
            with a passion for helping clients find their dream home. With years
            of experience in the industry, Maninder has established a reputation
            for providing exceptional service and expert guidance to each and
            every one of his clients.
          </p>
        </div>

        <div className="container mx-auto px-4 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="bg-white shadow-lg rounded-lg p-7">
            <h1 className="text-2xl lg:text-4xl font-[400] mb-6 text-[#C5B351] ">
              Our Values
            </h1>
            <div className="">
              <p>
                At our real estate agency, we prioritize excellence, integrity,
                dedication, and community involvement. Innovation and
                collaboration drive our commitment to delivering unparalleled
                results for our clients, making us a top-ranking agency in
                Seattle and beyond.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-7">
            <h1 className="text-2xl lg:text-4xl font-[400] mb-6 text-[#C5B351] ">
              Our Mission
            </h1>
            <div className="">
              <p>
                Our mission is to redefine the real estate experience by
                prioritizing our clients' needs above all else. Through
                personalized service, expert guidance, and a dedication to
                excellence, we aim to exceed expectations at every turn. Whether
                you're buying, selling, or investing, we're here to empower you
                with the knowledge and support you need to achieve your real
                estate goals with confidence.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-7">
            <h1 className="text-2xl lg:text-4xl font-[400] mb-6 text-[#C5B351] ">
              Our Team
            </h1>
            <div className="">
              <p>
                Comprising seasoned professionals dedicated to excellence, our
                team brings expertise, passion, and a client-centric approach to
                every real estate endeavor. Collaborative and committed, we work
                tirelessly to exceed expectations and achieve success for our
                clients.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-7">
            <h1 className="text-2xl lg:text-4xl font-[400] mb-6 text-[#C5B351] ">
              Our Resources
            </h1>
            <div className="">
              <p>
                We harness cutting-edge technology, market insights, and an
                extensive network to deliver tailored solutions for our clients,
                ensuring seamless navigation of the real estate journey and
                optimal outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* questions  */}

      <div
        className=" my-5 py-4 md:py-16 w-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("/asset/main-home-bg-img.webp` }}
      >
        <div className="flex flex-col text-center w-full mb-5 lg:mb-14">
          <h1 className=" text-2xl lg:text-5xl font-[400] mb-4 text-[#C5B351]  ">
            Frequently Asked Questions
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base px-4">
            Maninder Singh is widely respected by clients, developers, vendors,
            and industry professionals alike for his exceptional skills,
            innovative approach, and unwavering commitment to assisting buyers
            and sellers in the vibrant real estate market
          </p>
        </div>

        <div className="container mx-auto px-4 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <ContentToggle />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Aboutpage;
