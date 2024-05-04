import React, { useState } from "react";
import { toast } from "react-toastify";

const Modelform = () => {
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
      <div className="">
        <form
          class=" w-full bg-white shadow-lg text-[#464646] px-8 pb-5"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-4 mb-4">
            <div>
              <img
                className="w-20 mt-[-26px]"
                src="https://crm.maninderrealestate.com/images/faces/facemaninder.png"
                alt=""
              />
            </div>
            <div>
              <p>
                Maninder Singh <br />
                <span className="text-NewYello">Realtor</span>
              </p>
            </div>
          </div>

          <div className="mb-3">
            <input
              class=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5 placeholder-[#464646]"
              placeholder=" Your Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              class=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5 placeholder-[#464646] "
              placeholder="Your Email "
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              class=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5 placeholder-[#464646] "
              placeholder="Your Phone "
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              class=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5 placeholder-[#464646] "
              placeholder="Subject "
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <textarea
              className=" my-3 border w-full rounded-lg px-4 focus:outline-none border-gray-300 py-2"
              placeholder="Message"
              cols="6"
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="text-white  shadow-xl text-sm transition duration-150 ease-out hover:ease-in  bg-[#C5B351] hover:bg-black    focus:outline-none block w-full p-2.5 "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modelform;
