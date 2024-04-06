import React from "react";
import { FaEnvelope, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import Rexara_Logo_Black from "../../assets/Rexara_Logo_Black.png";
import black_logo_maninder from "../../assets/black_logo_maninder.png";
import white_logo_maninder from "../../assets/white_logo_maninder.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="">
        <div class="container py-12 lg:px-10 mx-auto  ">
          <div class="flex flex-wrap items-center">
            <div class="lg:w-1/3 md:w-1/3 w-full px-4">
              <h2 class="text-lg  font-semibold uppercase tracking-normal  mb-3">
                Maninder Singh Realtor
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <p className="flex items-center gap-3">
                    <a
                      href="https://wa.me/16047152996"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="h-5 w-5 text-[#C5B351]" />
                    </a>
                    <span>+1 (604) 715-2996</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <a href="mailto:maninder.realtor@gmail.com">
                      <FaEnvelope className="h-5 w-5 text-[#C5B351]" />
                    </a>
                    <span>maninder.realtor@gmail.com</span>
                  </p>
                  <a
                    href="https://www.facebook.com/profile.php?id=100082839065240"
                    target="_blank"
                  >
                    <p className="flex items-center gap-2">
                      {" "}
                      <span className=" text-NewYello  ">
                        {" "}
                        <FaFacebookF className=" w-6 h-6 " />{" "}
                      </span>{" "}
                      https://www.facebook.com/p/Maninder-Singh-Realtor-100082839065240/
                    </p>
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/3 md:w-1/3 w-full px-4">
              <nav class="list-none mb-10">
                <li>
                  <img src={Rexara_Logo_Black} class="w-60 md:mx-auto" alt="" />
                </li>
              </nav>
            </div>
            <div class="lg:w-1/3 md:w-1/3 w-full px-4 lg:px-16">
              <h2 class="text-lg  font-semibold capitalize tracking-normal  mb-3">
                REXARA REALTY INC.
              </h2>
              <nav class="list-none  mb-10">
                <li>
                  <p className="flex items-center mb-1  gap-2">
                    {" "}
                    <span className=" text-NewYello  ">
                      <MdAddIcCall className="w-6 h-6 " />
                    </span>{" "}
                    +1 (604) 262-1212
                  </p>
                  <p className="flex items-center   gap-2 my-1">
                    {" "}
                    <span className=" text-NewYello  ">
                      <MdOutlineEmail className=" w-6 h-6 " />
                    </span>{" "}
                    info@rexararealty.com{" "}
                  </p>
                  <Link to="https://www.facebook.com/RexaraRealtyInc/">
                    <p className="flex  break-all  items-center gap-2 p-2">
                      {" "}
                      <span className=" text-NewYello  ">
                        {" "}
                        <FaFacebookF className=" w-6 h-6 " />{" "}
                      </span>{" "}
                      https://www.facebook.com/RexaraRealtyInc/

                    </p>
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>

      <footer class="bg-[#152B47] text-white w-full py-2">
        <div class=" container lg:px-10 mx-auto  ">
          <div class="grid grid-cols-1 gap-2 px-4 py-6 lg:py-8 sm:grid-cols-2 md:grid-cols-3 ">
            <div class="w-full lg:col-span-1 lg:-mt-12">
              <img src={white_logo_maninder} className="" alt="" />

              <p className="mt-8">
                Real estate is a term that refers to property consisting of land
                and the buildings on it, along with its natural resources such
                as crops, minerals, or water; immovable property of this nature.
                Real estate is typically bought and sold either through a
                licensed real estate agent or directly by the owner.{" "}
              </p>
            </div>

            <div className="col-span-1 sm:ml-10 lg:ml-28">
              <div className="flex  gap-6 lg:gap-16  ">
                <div>
                  <h2 class="mb-8 text-2xl font-semibold">Navigation</h2>
                  <nav class="list-none  capitalize space-y-3 cursor-pointer ">
                    <li>
                      <a href="/">home</a>
                    </li>
                    <li>
                      <a href="/about-us">about</a>
                    </li>
                    <li>
                      <a href="/contact">contact </a>
                    </li>
                    <li>
                      <a href="/blog">blogs</a>
                    </li>
                    <li>
                      <a href="/testimonial">Testimonial</a>
                    </li>
                  </nav>
                </div>
                <div>
                  <h2 class="mb-8 text-2xl font-semibold">Pages</h2>
                  <nav class="list-none  capitalize space-y-3 cursor-pointer ">
                    <li>
                      <a href="/feature">property</a>
                    </li>
                    <li>
                      <a href="/buyer-guide">selling</a>
                    </li>
                    <li>
                      <a href="/seller-guide">buying </a>
                    </li>
                    <li>
                      <a href="/login">Login </a>
                    </li>
                    <li>
                      <a href="/sign-up">Register</a>
                    </li>
                  </nav>
                </div>
              </div>
            </div>

            <div className="col-span-1 lg:mx-auto">
              <div>
                <h2 class="mb-8 text-2xl font-semibold">Address</h2>

                <div className="">
                  <p>Maninder Singh</p>
                  <p>3033 immel st #360 abbotsford</p>
                  <p>Abbotsford, BC, V2S 6S2</p>
                  <p>Canada</p>
                  <p>Email: maninder.realtor@gmail.com </p>
                  <p>Phone: +1 (604) 715-2996</p>
                </div>

                <div className="flex gap-3  items-center mt-2">
                  <div
                    className=" cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
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
                    className=" flex cursor-pointer items-center 
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
                    className=" flex items-center  cursor-pointer
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
