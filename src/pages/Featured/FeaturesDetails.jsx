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
import { toast } from "react-toastify";

const FeaturesDetails = () => {
  const data = [1, 2, 3, 4];

  const { showMessageBox, handleClose } = useMyContext();
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
          `https://api.maninderrealestate.com/api/property/${id}`
        );
        setPropertyImages(response.data[0].image_urls);
        setProperty(response.data[0]);
      } catch (error) {
        setError(error);
      }
    };
    fetchPropertyData();
  }, [id]);

  //Contact Form Api
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
      {/* <div
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
      </div> */}

      <div className="bg-[#fffcfc]">
        <div className="container mx-auto py-6 lg:py-16px-4 lg:px-10">
          <div className="flex justify-between items-center">
            <div className="mb-6 px-4">
              {/* <h1 className="text-2xl lg:text-4xl font-[400] mb-1  ">
                {property?.["listing-item-entry-title"]}
              </h1> */}
              <p className="text-base py-2">{property?.address}</p>
              {/* <p className="text-xs">{property?.["alt-subarea"]}</p> */}
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
            {propertyImages.map((image_urls, index) => (
              <div
                key={index}
                className="bg-cover py-40 md:py-48  bg-no-repeat shadow overflow-hidden relative"
                style={{
                  backgroundImage: `url("${image_urls}")`,
                }}
              >
                <div className=""></div>
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
              <p className="leading-relaxed mb-4">{property?.description}</p>

              {/* <p className="leading-relaxed">
                {property?.["additional_info"]["Legal Description:"]}
              </p> */}

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
                            {property?.additional_details.Property_Type}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-wrap font-bold">
                            Building Type:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property?.additional_details.Building_Type}
                          </td>
                        </tr>

                        <tr className="bg-gray-50">
                          <td className="px-6 py-2 whitespace-wrap font-bold">
                            Square Footage:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {/* {property.additional_details.Square_Footage
                              ? property.additional_details.Square_Footage
                              : "Not available"} */}
                            {property?.additional_details.Square_Footage}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-wrap font-bold">
                            Title:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property && property.additional_details.Title
                              ? property.additional_details.Title
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-2 whitespace-wrap font-bold">
                            Land_Size:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property && property.additional_details.Land_Size
                              ? property.additional_details.Land_Size
                              : "Not available"}
                          </td>
                        </tr>

                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-wrap font-bold">
                            Built_in:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property && property.additional_details.Built_in
                              ? property.additional_details.Built_in
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Annual_Property_Taxes:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                            property.additional_details.Annual_Property_Taxes
                              ? property.additional_details
                                  .Annual_Property_Taxes
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Parking_Type:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                            property.additional_details.Parking_Type
                              ? property.additional_details.Parking_Type
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Total_Parking_Spaces:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                            property.additional_details.Total_Parking_Spaces
                              ? property.additional_details.Total_Parking_Spaces
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Appliances_Included:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                            property.additional_details.Appliances_Included
                              ? property.additional_details.Appliances_Included
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Fixtures_Included:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                            property.additional_details.Fixtures_Included
                              ? property.additional_details.Fixtures_Included
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Style:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property && property.additional_details.Style
                              ? property.additional_details.Style
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Fire_Protection:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                            property.additional_details.Fire_Protection
                              ? property.additional_details.Fire_Protection
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Building_Amenities:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                            property.additional_details.Building_Amenities
                              ? property.additional_details.Building_Amenities
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Storage:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property && property.additional_details.Storage
                              ? property.additional_details.Storage
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Fireplace:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property && property.additional_details.Fireplace
                              ? property.additional_details.Fireplace
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Heating_Type:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                            property.additional_details.Heating_Type
                              ? property.additional_details.Heating_Type
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Utility_Type:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                            property.additional_details.Utility_Type
                              ? property.additional_details.Utility_Type
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Water:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property && property.additional_details.Water
                              ? property.additional_details.Water
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Community_Features:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                            property.additional_details.Community_Features
                              ? property.additional_details.Community_Features
                              : "Not available"}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-2 whitespace-nowrap font-bold">
                            Maintenance_Fees:
                          </td>
                          <td className="px-6 py-2 whitespace-wrap">
                            {property &&
                            property.additional_details.Maintenance_Fees
                              ? property.additional_details.Maintenance_Fees
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
                          {property?.price}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          MLS®:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property?.mls_number}
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Style:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property && property.additional_details.Style
                            ? property.additional_details.Style
                            : "Not available"}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Bedrooms:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property?.bedrooms}
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Bathrooms:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property?.bathrooms}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Area:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property && property.area
                            ? property.area
                            : "Not available"}
                        </td>
                      </tr>
                      {/* <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-nowrap font-bold">
                          Floor Space:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property?.["Floor Area:"]}
                        </td>
                      </tr> */}
                      <tr className="bg-gray-50">
                        <td className="px-6 py-2 whitespace-nowrap font-bold">
                          Maintenance_Fees:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property &&
                          property.additional_details.Maintenance_Fees
                            ? property.additional_details.Maintenance_Fees
                            : "Not available"}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Annual_Property_Taxes:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property &&
                          property.additional_details.Annual_Property_Taxes
                            ? property.additional_details.Annual_Property_Taxes
                            : "Not available"}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Features:
                        </td>
                        <td className="px-6 py-2 ">
                          {property?.additional_details.Features}
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Landscape_Features:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property?.additional_details.Amenities}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Address:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          {property?.address}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="py-6">
                  <form
                    class=" w-full bg-white shadow-lg text-[#464646] lg:mt-8 p-8"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex gap-4 mb-4">
                      <div>
                        <img
                          className="w-20"
                          src="https://crm.maninderrealestate.com/images/faces/facemaninder.png"
                          alt=""
                        />
                      </div>
                      <div className="mt-3">
                        <p>
                          Maninder Singh <br />
                          <span className="text-NewYello">Realtor</span>
                        </p>
                      </div>
                    </div>

                    <div className="mb-3">
                      <input
                        class=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5 placeholder-[#464646] "
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
                        placeholder="Your Email"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        class=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5 placeholder-[#464646] "
                        placeholder="Your Phone Number "
                        type="text"
                        name="phone"
                        value={formData.email}
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
                        rows="5"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="text-white  shadow-xl text-sm transition duration-150 ease-out hover:ease-in  bg-[#C5B351] hover:bg-black    focus:outline-none block w-full p-2.5 "
                      >
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
