import React, { useState } from "react";
import Header from "../../components/header/Header";
import { FaCalendarAlt } from "react-icons/fa";
import { CiStickyNote } from "react-icons/ci";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

// import BlogCard from "../../components/BlogCard";
// import SearchForm from "../../components/SearchForm";
import Footer from "../../components/footer/Footer";

import { useMyContext } from "../../store/ContextApi";
import MessageBox from "../../components/MessageBox";

import { Link } from "react-router-dom";
import LatestblogCard from "../../components/LatestblogCard";
import { toast } from "react-toastify";

const Contactpage = () => {
  const { showMessageBox, handleClose, properties } = useMyContext();



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "https://api.maninderrealestate.com/api/contact";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // alert("Form submitted successfully!");
        toast.success("Email Sent SuccessFully", { autoClose: 2000 });
        // Optionally, you can reset the form fields here
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          description: "",
        });
      } else {
        // const errorData = await response.json();
        // throw new Error(errorData.message || "Something went wrong");
        toast.error("Email Failed ", { autoClose: 2000 });
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };




  return (
    <>
      <Header />

      <div
        className="bg-black flex justify-center items-center text-white  w-full bg-cover bg-no-repeat h-56"
        style={{ backgroundImage: `url("/asset/bg-lines-svg.svg")` }}
      >
        <div>
          <h1 className="text-2xl lg:text-6xl font-[400] mb-4 text-[#C5B351] ">
            How to contact me
          </h1>
          <p className="text-white text-xl text-center font-normal font-prata  tracking-tight">
            Call or send an email through our form
          </p>
        </div>
      </div>
      <div className="bg-[#fffcfc]">
        <div className=" container px-4 lg:px-10 py-6 lg:py-16  mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[68%_auto] gap-14 ">
            {/*blog section  */}
            <div className="flex-1 overflow-auto  h-auto">
              <div className="   bg-white shadow-lg  overflow-hidden rounded p-2  md:p-7 text-[#464646] ">
                <h1 className=" text-black text-2xl lg:text-4xl font-[400] mb-4  ">
                  {" "}
                  Maninder Singh Realty
                </h1>
                <div className="flex gap-3  items-center mt-5">
                  <div
                    className=" flex items-center 
                                    justify-center w-8 h-8  rounded-full border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
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
                                    justify-center w-8 h-8 rounded-full  border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
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
                                    justify-center w-8 h-8  rounded-full border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
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

                <div className="py-6">
                  <p className="mb-1">
                    <strong>Phone:</strong>{" "}
                    <span className="pl-3">+1 (604) 715-2996</span>
                  </p>
                  <p className="mb-1">
                    <strong>Mobile:</strong>{" "}
                    <span className="pl-3">+1 (604) 715-2996</span>
                  </p>
                  <p className="mb-1">
                    <strong>Email:</strong>{" "}
                    <span className="pl-3">maninder.realtor@gmail.com</span>
                  </p>
                  <p className="mb-1">
                    <strong>Address:</strong>{" "}
                    <span className="pl-3">
                      #287-8128 128 Street Surrey, BC V3W 1R1
                    </span>{" "}
                  </p>
                </div>

                <div className="mb-5">
                  <p>
                    In addition to his technical skills, Maninder is also known
                    for his friendly and personable approach. He takes the time
                    to get to know each client and understand their unique
                    needs, preferences, and budget. This allows him to provide
                    customized recommendations and tailored support throughout
                    the buying or selling process. At Maninder Singh Real
                    Estate, our goal is to make your real estate experience as
                    stress-free and enjoyable as possible. Whether you are
                    buying, selling, or simply exploring your options, we are
                    here to help you every step of the way. Contact us today to
                    schedule a consultation with Maninder and start your journey
                    towards your dream home."
                  </p>
                </div>
                <img
                  class=" object-cover rounded-lg"
                  src="./asset/Webp_w.jpg"
                  alt=""
                />
              </div>

              {/* related form*/}
              <div className="   bg-white shadow-lg  overflow-hidden rounded p-2  md:p-7 text-[#464646] my-5">
                <h1 className=" text-black text-2xl lg:text-3xl font-[400] mb-2  ">
                  {" "}
                  Contact
                </h1>
                <form className="py-3" onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      className="focus:outline-none border-gray-300 border rounded-lg px-4 py-2  w-full"
                      placeholder="Name"
                      name="name"
                      onChange={handleChange}
                      value={formData.name}
                    />
                    <input
                      type="text"
                      className="focus:outline-none border-gray-300 border rounded-lg px-4 py-2 w-full"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                    />
                    <input
                      type="text"
                      className="focus:outline-none border-gray-300 border rounded-lg px-4 py-2 w-full"
                      placeholder="Phone"
                      name="phone"
                      onChange={handleChange}
                      value={formData.phone}
                    />
                  </div>
                  <input
                      type="text"
                      className="focus:outline-none border-gray-300 border rounded-lg px-4 py-2 w-full mt-2"
                      placeholder="Subject"
                      name="subject"
                      onChange={handleChange}
                      value={formData.subject}
                    />

                  <textarea
                    className=" my-3 border w-full rounded-lg px-4 focus:outline-none border-gray-300 py-2"
                    placeholder="Message"
                    cols="20"
                    rows="6"
                    name="description"
                    onChange={handleChange}
                    value={formData.description}
                  ></textarea>

                  <button type="submit" className="px-5  bg-NewYello text-white rounded py-1.5  ">
                    Submit
                  </button>
                </form>
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
                </div>{" "}
                *
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

export default Contactpage;
