import React, { useEffect, useState } from "react";
import { IoBedOutline, IoCarSportOutline } from "react-icons/io5";
import { LuTriangleRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const CardList = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://backend.artechworld.tech/api/admin/property/list/all")
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.data) {
          const firstSixProperties = data.data.slice(0, 6);
          setProperties(firstSixProperties);
          console.log(firstSixProperties);
        } else {
          console.error("Failed to fetch properties:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });
  }, []);

  // return (
  //   <div className="py-5 lg:py-20 bg-[#abb8c3]/10 ">
  //     <div className="container px-4 lg:px-10 mx-auto items-center ">
  //       <div className="mb-6">
  //         <h2 className="text-3xl lg:text-5xl font-[400]  text-center text-[#C5B351]    capitalize mb-3">
  //           FEATURED LISTINGS
  //         </h2>
  //       </div>
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-4 lg:gap-10 mx-auto">
  //         {properties.map((property, index) => {
  //           return (
  //             <Link to={`/property/${property._id}`}>
  //               <div key={index} className="w-full shadow bg-white mb-4">
  //                 <a href="#">
  //                   <img
  //                     className="w-full"
  //                     src={property["mrp-listing-main-image src"]}
  //                     alt=""
  //                   />
  //                 </a>
  //                 <div className="p-6 py-5">
  //                   <a href="#">
  //                     <h5 className="mb-2 text-xl text-center font-medium tracking-tight">
  //                       {property["summary-property-type"]}
  //                     </h5>
  //                   </a>
  //                   <div className="my-2">
  //                     <p className="text-center font-normal text-lg text-black">
  //                       {property["mrp-listing-price-container"]}
  //                     </p>
  //                     <p className="mb-4 text-center text-sm font-normal uppercase text-gray-400">
  //                       {property["Status:"]}
  //                     </p>
  //                   </div>
  //                   <div>
  //                     <div className="flex justify-center items-center gap-3">
  //                       <span className="flex items-center gap-2">
  //                         <IoBedOutline className="w-5 h-5" />{" "}
  //                         {property["Bedrooms:"]}
  //                       </span>
  //                       <span className="flex items-center gap-2">
  //                         <IoCarSportOutline className="w-5 h-5" />{" "}
  //                         {property &&
  //                         property.property_info &&
  //                         property.property_info["info-section-REA-5"] &&
  //                         property.property_info["info-section-REA-5"][
  //                           "Parking Total/Covered:"
  //                         ]
  //                           ? property.property_info["info-section-REA-5"][
  //                               "Parking Total/Covered:"
  //                             ]
  //                           : "?"}
  //                       </span>

  //                       <span className="flex items-center gap-2">
  //                         <IoBedOutline className="w-5 h-5" />{" "}
  //                         {property["Bathrooms:"]}
  //                       </span>
  //                       <span className="flex items-center gap-2">
  //                         <LuTriangleRight className="w-5 h-5" />
  //                         {property?.["Floor Area:"]}
  //                       </span>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </Link>
  //           );
  //         })}
  //       </div>

  //       <div className="text-center pt-8">
  //         <Link
  //           to="/feature"
  //           className="text-white transition duration-150 ease-out hover:ease-in  bg-[#C5B351] hover:bg-black uppercase px-8 py-3"
  //         >
  //           more
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="py-5 lg:py-20 bg-[#abb8c3]/10 ">
      <div className="container px-4 lg:px-10 mx-auto items-center ">
        <div className="mb-6">
          <h2 className="text-3xl lg:text-5xl font-[400]  text-center text-[#C5B351]    capitalize mb-3">
            FEATURED LISTINGS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-4 lg:gap-10 mx-auto">
          {properties.map((property, index) => {
            return (
              <Link
                to={`/property/${property._id}`}
                key={index}
                className="w-full"
              >
                <div className="shadow bg-white mb-4">
                  <img
                    className="w-full"
                    src={property["mrp-listing-main-image src"]}
                    alt=""
                  />
                  <div className="p-6 py-5">
                    <h5 className="mb-2 text-xl text-center font-medium tracking-tight">
                      {property["summary-property-type"]}
                    </h5>
                    <div className="my-2">
                      <p className="text-center font-normal text-lg text-black">
                        {property["mrp-listing-price-container"]}
                      </p>
                      <p className="mb-4 text-center text-sm font-normal uppercase text-gray-400">
                        {property["Status:"]}
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-center items-center gap-3">
                        <span className="flex items-center gap-2">
                          <IoBedOutline className="w-5 h-5" />{" "}
                          {property["Bedrooms:"]}
                        </span>
                        <span className="flex items-center gap-2">
                          <IoCarSportOutline className="w-5 h-5" />{" "}
                          {property &&
                          property.property_info &&
                          property.property_info["info-section-REA-5"] &&
                          property.property_info["info-section-REA-5"][
                            "Parking Total/Covered:"
                          ]
                            ? property.property_info["info-section-REA-5"][
                                "Parking Total/Covered:"
                              ]
                            : "?"}
                        </span>

                        <span className="flex items-center gap-2">
                          <IoBedOutline className="w-5 h-5" />{" "}
                          {property["Bathrooms:"]}
                        </span>
                        <span className="flex items-center gap-2">
                          <LuTriangleRight className="w-5 h-5" />
                          {property?.["Floor Area:"]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center pt-8">
          <Link
            to="/feature"
            className="text-white transition duration-150 ease-out hover:ease-in  bg-[#C5B351] hover:bg-black uppercase px-8 py-3"
          >
            more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardList;
