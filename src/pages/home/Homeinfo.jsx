import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaEnvelope, FaVoicemail } from "react-icons/fa6";
import { toast } from "react-toastify";

const Homeinfo = () => {
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
        console.log(response)
        toast.success("Email Sent SuccessFully", { autoClose: 2000 });
        // alert("Form submitted successfully!");
        // Optionally, you can reset the form fields here
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          description: "",
        });
      } else {
        toast.error("Email Failed ", { autoClose: 2000 });
        // throw new Error(errorData.message || "Something went wrong");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className=" py-5 lg:py-20 bg-[#abb8c3]/10 ">
      <div className="container lg:px-10 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-[auto_60%] ">
          <div className="px-4 ">
            <img
              className="w-60 h-60 rounded-md"
              src="./asset/Webp_w.jpg"
              alt=""
            />

            <div>
              <div className="py-3">
                <h2 className=" text-xl lg:text-3xl font-medium">
                  Maninder Singh
                </h2>
                <p className="">Fraser Valley Realtor</p>
              </div>

              <p className="text-xl font-normal mt-2">Surrey | Abbotsford</p>
              <p className="m">#287-8128 128 Street Surrey</p>
              <p className="m">BC V3W 1R1</p>
              <div className="py-3">
                {/* <p className="flex items-center gap-3">
                  {" "}
                  <FaWhatsapp className="h-5 w-5 text-[#C5B351] " />{" "}
                  <span>+1 (604) 715-2996</span>
                </p> */}
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
              </div>
            </div>
          </div>

          <div className="px-4 lg:px-0">
            <div className="mb-5">
              <h2 className="text-3xl lg:text-5xl font-[400] text-[#C5B351] mb-3">
                Contact Us
              </h2>
              <p className=" ">Relax, we're here to help.</p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="p-6 lg:p-12 bg-white text-black"
            >
              <div className="">
                <div className="flex flex-wrap">
                  <div className="p-1 w-full">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm font-medium"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-[#C5B351] focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-1 w-full sm:w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm font-medium"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-[#C5B351] focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-1 w-full sm:w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="phone"
                        className="leading-7 text-sm font-medium"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-[#C5B351] focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-1 w-full">
                    <div className="relative">
                      <label
                        htmlFor="subject"
                        className="leading-7 text-sm font-medium"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-[#C5B351] focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-1 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-[#C5B351] focus:ring-2 h-24 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-1 w-full">
                    <button
                      type="submit"
                      className="w-full text-white bg-[#C5B351] border-0 py-2 px-8 focus:outline-none hover:bg-black"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeinfo;
