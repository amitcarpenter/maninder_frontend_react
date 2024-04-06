import React from "react";

import { MdAddCall } from "react-icons/md";
import { Link } from "react-router-dom";
export const FeaturCard = () => {
  return (
    <>
      <div className="max-w-sm mb-4">
        <p className=" font-semibold mb-2 pl-1">
          31591 TOWNSHIPLINE Avenue in Mission: Mission BC House for sale :
          MLS®# R2849124
        </p>

        <div className=" border p-2 relative h-[185px] overflow-hidden">
          <img
            className="transform transition-transform duration-3000 hover:scale-125"
            src="/asset/card-img.jpg"
            alt=""
          />
          <div className="p-2 absolute top-2 right-2 bg-black/70 rounded-md">
            <MdAddCall className="text-white   " />
          </div>
          <div className=" w-full flex justify-between absolute bottom-2 ">
            <button className="px-4 py-2 bg-gray-50 text-red-500">
              TOWNSHIPLINE
            </button>
            <button className="px-4 py-2 bg-pink-200 text-red-500">
              $ 6660
            </button>
          </div>
        </div>
        <div className="py-2">
          <div className="relative ">
            <table className="w-full text-sm text-left rtl:text-right  ">
              <thead className="text-xs text-gray-700 uppercase">
                <tr className="border">
                  <th scope="col" className="px-4 border py-1.5">
                    Color
                  </th>
                  <th scope="col" className="px-4 border   py-1.5">
                    Color
                  </th>
                  <th scope="col" className="px-4 border   py-1.5">
                    Category
                  </th>
                  <th scope="col" className="px-4 border   py-1.5">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border">
                  <td className="px-4 border  py-1.5">Silver</td>
                  <td className="px-4 border  py-1.5">Silver</td>
                  <td className="px-4 border  py-1.5">Laptop</td>
                  <td className="px-4 border  py-1.5">$2999</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-xs pl-1">
          Welcome to luxury living at its finest! Introducing a captivating
          retreat with exceptional finishes and vaulted
        </p>
        <p className="text-xs py-2 pl-1">
          Listed by 3033 IMMEL ST #360 ABBOTSFORD
        </p>

        <div className="flex justify-between">
          <Link
            to="/featurelist"
            className="text-white  shadow-xl text-sm transition duration-150 ease-out hover:ease-in  bg-[#C5B351] hover:bg-black uppercase px-8 py-2"
          >
            View
          </Link>
          <Link
            to="/featurelist"
            className="text-white  shadow-xl  text-sm transition duration-150 ease-out hover:ease-in  bg-black  hover:bg-[#C5B351] uppercase px-8 py-2"
          >
            more
          </Link>
        </div>
      </div>
    </>
  );
};
