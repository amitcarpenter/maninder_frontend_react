import React from "react";

const Modelform = () => {
  return (
    <>
      <div className="">
        <form class=" w-full bg-white shadow-lg text-[#464646] px-8 pb-5">
          <div className="flex gap-4 mb-4">
            <div>
              <img
                className="w-20 mt-[-26px]"
                src="https://crm.artechworld.tech/images/faces/facemaninder.png"
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
            />
          </div>
          <div className="mb-3">
            <input
              class=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5 placeholder-[#464646] "
              placeholder="Your Email "
              type="text"
            />
          </div>
          <div className="mb-3">
            <input
              class=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5 placeholder-[#464646] "
              placeholder="Your Mobile "
              type="text"
            />
          </div>

          <div className="mb-3">
            <textarea
              className=" my-3 border w-full rounded-lg px-4 focus:outline-none border-gray-300 py-2"
              placeholder="Im interested in  Gorgeous studio for rent  "
              cols="6"
              rows="4"
            ></textarea>
          </div>
          <div className="mt-4">
            <button className="text-white  shadow-xl text-sm transition duration-150 ease-out hover:ease-in  bg-[#C5B351] hover:bg-black    focus:outline-none block w-full p-2.5 ">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modelform;
