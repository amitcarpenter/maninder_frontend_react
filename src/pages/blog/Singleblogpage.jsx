import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import { FaCalendarAlt } from "react-icons/fa";
import { CiStickyNote } from "react-icons/ci";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import BlogCard from "../../components/BlogCard";
import SearchForm from "../../components/SearchForm";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import MessageBox from "../../components/MessageBox";
import { useMyContext } from "../../store/ContextApi";
import { Link } from "react-router-dom";
import { Parser } from "html-to-react";
import LatestblogCard from "../../components/LatestblogCard";

const Singleblogpage = () => {


  const { showMessageBox, handleClose,properties } = useMyContext();
  const data = [1, 2, 3, 4, 5];
  const [blogs, setBlogs] = useState([]);
  const [Singleblogs, setSingleblogs] = useState({});

  const [formattedDate, setFormattedDate] = useState("");
  const parser = new Parser();
  const { id } = useParams();

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "https://backend.artechworld.tech/api/blogs"
      );
      const data = await response.json();
      if (data.status) {
        const parsedBlogs = data.data.slice(0, 2); // Extract only the first two blogs
        setBlogs(parsedBlogs);
      } else {
        console.error("Failed to fetch blogs");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    fetchSingleBlogs();
  }, [id]);

  const formatDate = (date) => {
    const options = { month: "long", day: "numeric", year: "numeric" };

    return date.toLocaleDateString("en-US", options);
  };

  const fetchSingleBlogs = async () => {
    try {
      const response = await fetch(
        `https://backend.artechworld.tech/api/blog/${id}`
      );
      const data = await response.json();
      if (data.status) {
        const parsedBlogs = data.data;
        console.log(parsedBlogs, "___sigg");

        setSingleblogs(parsedBlogs);

        const date = new Date(data.data.created_at);

        const formattedDate = formatDate(date);

        setFormattedDate(formattedDate);
      } else {
        console.error("Failed to fetch blogs");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  return (
    <>
      <Header />

      <div className="bg-[#fffcfc]">
        <div className=" container px-4 lg:px-10 py-6 lg:py-16  mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[68%_auto] gap-14 ">
            {/*blog section  */}
            <div className="flex-1 overflow-auto  h-auto">
              <div className="   bg-white shadow-lg  overflow-hidden rounded p-2  md:p-7 text-[#464646] ">
                <h1 className=" text-black text-2xl lg:text-4xl font-[400] mb-4  ">
                  {" "}
                  {Singleblogs.title}
                </h1>
                <div className="mb-5 flex flex-col sm:flex-row  gap-5 ">
                  <p className="flex items-center">
                    <FaCalendarAlt className="w-4 h-4 mr-2" /> Posted by{" "}
                    {Singleblogs.author} on {formattedDate}
                  </p>
                  <p className="flex items-center">
                    <CiStickyNote className="w-4 h-4 mr-2" /> Buying Properties,
                    Location, Price, Real Estate
                  </p>
                </div>
                <img
                  class="w-full object-cover"
                  src={`https://backend.artechworld.tech/uploads/blogs/tImages/${Singleblogs?.mainImage}`}
                  alt=""
                />

                <div className="my-5">
                  {/* <p>New York County as a whole covers a total area of 33.77 square miles (87.5 
                                        km2), of which 22.96 square miles (59.5 km2) are
                                         land and 10.81 square miles (28.0 km2) are water.</p> */}
                  <p>{parser.parse(Singleblogs.content)}</p>
                </div>
                <div class="py-2 border-l border-NewYello">
                  <p className="italic pl-4">
                    Are you considering buying a home? Here are some essential
                    tips to help guide you through the process, from setting
                    your budget to closing the deal.
                  </p>
                </div>
                <div className="my-5">
                  <p>
                    Ready to sell your home? Use our comprehensive checklist to
                    ensure you're prepared every step of the way, from staging
                    your home to negotiating offers.
                  </p>
                </div>

                <div className="flex gap-3  items-center mt-5 ">
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
              </div>

              {/* related form*/}
              {/* <div className="   bg-white shadow-lg  overflow-hidden rounded p-2  md:p-7 text-[#464646] my-5">
                <h1 className=" text-black text-2xl lg:text-3xl font-[400] mb-2  ">
                  {" "}
                  Leave a Reply
                </h1>
                <p>Your email address will not be published</p>
                <form className="py-3">
                  <textarea
                    className="border w-full rounded-lg px-4 focus:outline-none border-gray-300 py-2"
                    placeholder="comment "
                    cols="20"
                    rows="6"
                  ></textarea>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      className="focus:outline-none border-gray-300 border rounded-lg px-4 py-2  w-full"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      className="focus:outline-none border-gray-300 border rounded-lg px-4 py-2 w-full"
                      placeholder="Email"
                    />
                    <input
                      type="text"
                      className="focus:outline-none border-gray-300 border rounded-lg px-4 py-2 w-full"
                      placeholder="Website"
                    />
                  </div>

                  <div class="flex items-center py-2">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4  bg-gray-100 border-gray-300 rounded  focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="link-checkbox" class="ms-2 text-sm font-medium">
                      I agree with the{" "}
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        terms and conditions
                      </a>
                      .
                    </label>
                  </div>

                  <button className="px-5  bg-NewYello text-white rounded py-1.5  ">
                    Post Comment
                  </button>
                </form>
              </div> */}

              {/* related blogs */}
              <div className="py-6">
                <h1 className=" text-black text-2xl lg:text-3xl font-[400] mb-4 ">
                  Related Posts
                </h1>
                <div className="flex flex-wrap  gap-8  ">
                  {blogs.map((item) => {
                    return <BlogCard blog={item} />;
                  })}
                </div>
              </div>
            </div>

            {/* side bloge sect */}
            <div className="relative">
              <div className="sticky top-0 ">
                {/* <div className="p-6  rounded-lg shadow-lg bg-white mb-5">
                   <SearchForm /> 
                </div> */}
                <div className="p-6 rounded-lg shadow-lg bg-white">
                  <h4 className="text-2xl font-medium mb-4">Latest Listings</h4>

                  <div className="py-3">
                    <div className="flex flex-col space-y-3">
                    {properties.slice(6, 10).map((property, index) => {
                        return (
                          <>
                            <LatestblogCard property={property} key={index} />
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showMessageBox && <MessageBox onClose={handleClose} />}
      <Footer />
    </>
  );
};

export default Singleblogpage;
