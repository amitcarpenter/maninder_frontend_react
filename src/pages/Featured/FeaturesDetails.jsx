import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../../components/footer/Footer";
import BlogCard from "../../components/BlogCard";
import { FeaturCard } from "../../components/FeaturCard";
import { useParams } from "react-router-dom";
import axios from "axios";

import { useMyContext } from "../../store/ContextApi";
import MessageBox from "../../components/MessageBox";
const FeaturesDetails = () => {
  const data = [1, 2, 3, 4];
  
  const { showMessageBox, handleClose } = useMyContext()
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [propertyImages, setPropertyImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        const response = await axios.get(
          `https://backend.artechworld.tech/api/property/${id}`
        );
        setPropertyImages(response.data[0].image_urls);
        setProperty(response.data[0]);
      } catch (error) {
        setError(error);
      }
    };
    fetchPropertyData();
  }, [id]);

  return (
    <>
      <Header />
      <div
        className="bg-black flex justify-center items-center text-white  w-full bg-cover bg-no-repeat h-56"
        style={{ backgroundImage: `url("/asset/bg-lines-svg.svg")` }}
      >
        <form className=" w-full px-4 lg:w-1/2">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border  focus:outline-none  rounded-full bg-gray-50 "
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-NewYello hover:bg-NewYello  focus:outline-none  font-medium rounded-full text-sm px-5 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="bg-[#fffcfc]">
        <div className="container mx-auto py-6 lg:py-16px-4 lg:px-10">
          <div className="flex justify-between items-center">
            <div className="mb-6">
              <h1 className="text-2xl lg:text-4xl font-[400] mb-1  ">
                {property?.["listing-item-entry-title"]}
              </h1>
              <p className="text-base py-2">{property?.["alt-addr"]}</p>
              <p className="text-xs">{property?.["alt-subarea"]}</p>
            </div>

            <div></div>
          </div>

          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {propertyImages.map((imageUrl, index) => (
              <div
                key={index}
                className="bg-cover bg-no-repeat shadow overflow-hidden relative"
                style={{
                  backgroundImage: `url("${imageUrl}")`,
                }}
              >
                <div className="py-40 md:py-48"></div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="container mx-auto py-6 lg:py-10 px-4 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_auto] gap-5">
            <div>
              <h6 className="text-2xl  font-[400] mb-6 underline underline-offset-8 ">
                ABOUT{" "}
              </h6>
              <p className="leading-relaxed mb-4">
                {property?.["description"]}
              </p>

              <p className="leading-relaxed">
                {property?.["additional_info"]["Legal Description:"]}
              </p>

              <div className="py-5">
                <div>
                  <h6 className="text-2xl  font-[400] mb-6 underline underline-offset-8 ">
                    Additional Info:
                  </h6>

                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-wrap font-bold">
                            Property Type:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property?.["summary-property-type"]}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-wrap font-bold">
                            Dwelling Type:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-4"] &&
                              property.property_info["info-section-REA-4"][
                              "Dwelling Type:"
                              ]
                              ? property.property_info["info-section-REA-4"][
                              "Dwelling Type:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>

                        <tr className="bg-gray-50">
                          <td className="px-6 py-2 whitespace-wrap font-bold">
                            Heating:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-5"] &&
                              property.property_info["info-section-REA-5"][
                              "Heating:"
                              ]
                              ? property.property_info["info-section-REA-5"][
                              "Heating:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-wrap font-bold">
                            Construction:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-5"] &&
                              property.property_info["info-section-REA-5"][
                              "Construction:"
                              ]
                              ? property.property_info["info-section-REA-5"][
                              "Construction:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-2 whitespace-wrap font-bold">
                            Foundation:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-5"] &&
                              property.property_info["info-section-REA-5"][
                              "Foundation:"
                              ]
                              ? property.property_info["info-section-REA-5"][
                              "Foundation:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>

                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-wrap font-bold">
                            Basement:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-5"] &&
                              property.property_info["info-section-REA-5"][
                              "Basement:"
                              ]
                              ? property.property_info["info-section-REA-5"][
                              "Basement:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Roof:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-5"] &&
                              property.property_info["info-section-REA-5"][
                              "Roof:"
                              ]
                              ? property.property_info["info-section-REA-5"][
                              "Roof:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Floor Finish:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-5"] &&
                              property.property_info["info-section-REA-5"][
                              "Floor Finish:"
                              ]
                              ? property.property_info["info-section-REA-5"][
                              "Floor Finish:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Parking:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-5"] &&
                              property.property_info["info-section-REA-5"][
                              "Parking:"
                              ]
                              ? property.property_info["info-section-REA-5"][
                              "Parking:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Parking Total/Covered:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-5"] &&
                              property.property_info["info-section-REA-5"][
                              "Parking Total/Covered:"
                              ]
                              ? property.property_info["info-section-REA-5"][
                              "Parking Total/Covered:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Parking Access:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-5"] &&
                              property.property_info["info-section-REA-5"][
                              "Parking Access:"
                              ]
                              ? property.property_info["info-section-REA-5"][
                              "Parking Access:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Exterior Finish:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-5"] &&
                              property.property_info["info-section-REA-5"][
                              "Exterior Finish:"
                              ]
                              ? property.property_info["info-section-REA-5"][
                              "Exterior Finish:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Title to Land:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-5"] &&
                              property.property_info["info-section-REA-5"][
                              "Title to Land:"
                              ]
                              ? property.property_info["info-section-REA-5"][
                              "Title to Land:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Suite:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-5"] &&
                              property.property_info["info-section-REA-5"][
                              "Suite:"
                              ]
                              ? property.property_info["info-section-REA-5"][
                              "Suite:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Property Disclosure:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-7"] &&
                              property.property_info["info-section-REA-7"][
                              "Property Disclosure:"
                              ]
                              ? property.property_info["info-section-REA-7"][
                              "Property Disclosure:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Fixtures Leased:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-7"] &&
                              property.property_info["info-section-REA-7"][
                              "Fixtures Leased:"
                              ]
                              ? property.property_info["info-section-REA-7"][
                              "Fixtures Leased:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Fixtures Removed:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-7"] &&
                              property.property_info["info-section-REA-7"][
                              "Fixtures Removed:"
                              ]
                              ? property.property_info["info-section-REA-7"][
                              "Fixtures Removed:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Cats:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-7"] &&
                              property.property_info["info-section-REA-7"][
                              "Cats:"
                              ]
                              ? property.property_info["info-section-REA-7"][
                              "Cats:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Dogs:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-7"] &&
                              property.property_info["info-section-REA-7"][
                              "Dogs:"
                              ]
                              ? property.property_info["info-section-REA-7"][
                              "Dogs:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Reno / Year:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-7"] &&
                              property.property_info["info-section-REA-7"][
                              "Reno / Year:"
                              ]
                              ? property.property_info["info-section-REA-7"][
                              "Reno / Year:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Services Connected:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                              property.property_info &&
                              property.property_info["info-section-REA-7"] &&
                              property.property_info["info-section-REA-7"][
                              "Services Connected:"
                              ]
                              ? property.property_info["info-section-REA-7"][
                              "Services Connected:"
                              ]
                              : "Not available"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* side section */}
            <div className="lg:pl-10">
              <div>
                <h6 className="text-2xl  font-[400] mb-6 underline underline-offset-8 ">
                  DETAILS{" "}
                </h6>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="bg-gray-50">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          List Price:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap text-2xl text-NewYello">
                          {property?.["mrp-listing-price-container"]}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          MLS®:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property?.["MLS® Num:"]}
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Style:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property &&
                            property.property_info &&
                            property.property_info["info-section-REA-4"] &&
                            property.property_info["info-section-REA-4"][
                            "Home Style:"
                            ]
                            ? property.property_info["info-section-REA-4"][
                            "Home Style:"
                            ]
                            : "Not available"}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Bedrooms:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property?.["Bedrooms:"]}
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Bathrooms:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property?.["Bathrooms:"]}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Year Built:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property &&
                            property.property_info &&
                            property.property_info["info-section-REA-4"] &&
                            property.property_info["info-section-REA-4"][
                            "Year built:"
                            ]
                            ? property.property_info["info-section-REA-4"][
                            "Year built:"
                            ]
                            : "Not available"}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-nowrap font-bold">
                          Floor Space:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property?.["Floor Area:"]}
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-2 whitespace-nowrap font-bold">
                          Condo Fees:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property &&
                            property["additional_info"] &&
                            property["additional_info"]["Maint. Fees:"]
                            ? property["additional_info"]["Maint. Fees:"]
                            : "Not available"}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Taxes:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property &&
                            property.property_info &&
                            property.property_info["info-section-REA-4"] &&
                            property.property_info["info-section-REA-4"]["Taxes:"]
                            ? property.property_info["info-section-REA-4"][
                            "Taxes:"
                            ]
                            : "Not available"}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Features:
                        </td>
                        <td className="px-6 py-2 ">
                          {property?.["additional_info"]["Features Included:"]}
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Amenities:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property?.["additional_info"]["Amenities:"]}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Address:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property?.["alt-addr"]}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="py-6">
                  <form class=" w-full bg-white shadow-lg text-[#464646] lg:mt-8 p-8">
                    <div className="flex gap-4 mb-4">
                      <div>
                        <img
                          className="w-28"
                          src="https://seattle.b-cdn.net/wp-content/uploads/2014/05/agent_profile-500x328.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <p>
                          Maninder Singh <br />
                          <span className="text-NewYello">
                            SE DRE# 12567897
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="mb-3">
                      <input
                        class=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5 placeholder-[#464646] "
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
                        rows="5"
                      ></textarea>
                    </div>
                    <div className="mt-6">
                      <button className="text-white  shadow-xl text-sm transition duration-150 ease-out hover:ease-in  bg-[#C5B351] hover:bg-black    focus:outline-none block w-full p-2.5 ">
                        Send Email
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-[60%_auto] xl:grid-cols-[70%_auto] gap-4">
            <div className="py-6">
              <h1 className=" text-black text-2xl inline-block lg:text-3xl font-[400] mb-6 ">
                Similar Listings
              </h1>
              <div className="inline-flex flex-wrap  gap-5  ">
                {data.map((item) => {
                  return <FeaturCard />;
                })}
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {showMessageBox && <MessageBox onClose={handleClose} />}

      <Footer />
    </>
  );
};

export default FeaturesDetails;
