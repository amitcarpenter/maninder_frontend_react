import React, { useState, useEffect, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import Color_logo from "../../assets/Color_logo.png";

import { RxCross2 } from "react-icons/rx";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [propertiesOpen, setPropertiesOpen] = useState(false);
  const [buyingOpen, setBuyingOpen] = useState(false);
  const [sellingOpen, setSellingOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const [isSideMenuOpen, setMenu] = useState(false);
  const asideRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        asideRef.current &&
        !asideRef.current.contains(event.target) &&
        isSideMenuOpen
      ) {
        setMenu(false);
      }
    }

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isSideMenuOpen]);

  const handleMenuToggle = (event) => {
    event.stopPropagation();
    setMenu((prevState) => !prevState);
  };

  // console.log(isSideMenuOpen, "---")

  return (
    <main className=" bg-[#152B47] h-[100px] font-prata leading-5 lg:leading-[100px] text-white ">
      <nav className="container mx-auto h-full flex justify-between lg:px-10 px-2 items-center">
        <div className="flex items-center gap-8 ">
          <section className="flex items-center gap-4">
            <FiMenu
              onClick={handleMenuToggle}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <Link to={"/"} className="text-4xl ">
              <img src={Color_logo} alt="" className="w-full h-[100px]" />
            </Link>
          </section>
        </div>

        {/* sidebar mobile menu */}

        <aside
          id="logo-sidebar"
          ref={asideRef}
          className={clsx(
            "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <div className="h-full py-4 overflow-y-auto bg-black text-white ">
            <div className="flex justify-end ">
              <span>
                <RxCross2
                  onClick={handleMenuToggle}
                  className="text-NewYello w-6 h-6"
                />
              </span>
            </div>

            <a href="#" className="flex items-center ps-2.5 mb-5">
              {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 me-3 sm:h-7" alt="Flowbite Logo" /> */}
              <span className="self-center text-xl font-semibold whitespace-nowrap "></span>
            </a>
            <ul className=" font-medium">
              <li>
                <a
                  href="#"
                  className="flex border-b items-center py-3   hover:bg-gray-100 dark:hover:bg-NewYello  group"
                >
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center border-b  py-3   hover:bg-gray-100 dark:hover:bg-NewYello group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center border-b  py-3   hover:bg-gray-100 dark:hover:bg-NewYello group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Contact Us
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="flex items-center border-b  py-3   hover:bg-gray-100 dark:hover:bg-NewYello group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="flex items-center border-b  py-3   hover:bg-gray-100 dark:hover:bg-NewYello group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Blog</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <section>
          <ul className="text-lg font-normal uppercase hidden lg:flex leading-[100px]">
            <li className=" px-2 xl:px-4 hover:bg-[rgba(255,255,255,0.1)] hover:text-[#C8B568]">
              <Link to="/" className="">
                Home
              </Link>
            </li>

            <li className=" px-2 xl:px-4 hover:bg-[rgba(255,255,255,0.1)] hover:text-[#C8B568]">
              <Link to="/feature" className="">
                {" "}
                PROPERTIES
              </Link>
            </li>

            <li className=" px-2 xl:px-4 hover:bg-[rgba(255,255,255,0.1)] hover:text-[#C8B568]">
              <Link to="/buyer-guide" className="">
                {" "}
                BUYING{" "}
              </Link>
            </li>
            <li className=" px-2 xl:px-4 hover:bg-[rgba(255,255,255,0.1)] hover:text-[#C8B568]">
              <Link to="/seller-guide" className="">
                {" "}
                SELLING{" "}
              </Link>
            </li>

            <li className=" px-2 xl:px-4 hover:bg-[rgba(255,255,255,0.1)] hover:text-[#C8B568]">
              <Link to="/blog" className="">
                blog
              </Link>
            </li>
            {/* Add similar logic for other dropdowns */}

            <li
              className="  px-2 xl:px-4 hover:bg-[rgba(255,255,255,0.1)] hover:text-[#C5B351] "
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <div className="relative inline-block text-left">
                <button
                  className="inline-flex justify-center w-full"
                  aria-haspopup="true"
                  aria-expanded={aboutOpen}
                >
                  ABOUT
                  <svg
                    className="-mr-1 mt-10 ml-1 w-5 text-[#C5B351] h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12.586L4.707 7.293a1 1 0 011.414-1.414L10 10.758l4.879-4.879a1 1 0 111.414 1.414L10 12.586z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {aboutOpen && (
                  <div
                    className="absolute right-0 z-10 w-56 mt-0 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 -md shadow-lg outline-none"
                    role="menu"
                  >
                    <div className="py-1">
                      <Link
                        to="/about-us"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        About Us
                      </Link>
                      <Link
                        to="/contact"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Contact Us
                      </Link>
                      <Link
                        to="/testimonial"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Testimonial
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li className=" px-2 xl:px-4 hover:bg-[rgba(255,255,255,0.1)] hover:text-[#C8B568]">
              <Link to="/login" className="">
                Sign In
              </Link>
            </li>

            <li className=" px-2 xl:px-4 hover:bg-[rgba(255,255,255,0.1)] hover:text-[#C8B568]">
              <Link to="/register" className="">
                Sign Up
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </main>
  );
}
