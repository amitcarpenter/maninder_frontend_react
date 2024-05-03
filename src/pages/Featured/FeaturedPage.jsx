import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdAddCall } from "react-icons/md";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathroom } from "react-icons/md";
import { useMyContext } from "../../store/ContextApi";
import MessageBox from "../../components/MessageBox";
import { IoIosArrowDown } from "react-icons/io";

const FeaturedPage = () => {
  const [Searchtogglemenu, setSearchtogglemenu] = useState(false);
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage] = useState(9);
  const [searchQuery, setSearchQuery] = useState("");

  const { showMessageBox, handleClose } = useMyContext();

  const [filters, setFilters] = useState({});

  const handleSubmit = async () => {
    try {
      const queryParams = new URLSearchParams(filters).toString();
     
      const response = await fetch(
        `https://api.maninderrealestate.com/api/property/filter?${queryParams}`
      );
      if (response.ok) {
        const data = await response.json();
        setProperties(data.data);
  
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  useEffect(() => {
    handleSubmit(); // Call handleSubmit after updating the state
    console.log(filters);
  }, [filters]); // Run this effect whenever the filters state changes

  useEffect(() => {
    fetch("https://api.maninderrealestate.com/api/admin/property/list/all")
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.data) {
          setProperties(data.data);
          console.log(data.data);
        } else {
          console.error("Failed to fetch properties:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });
  }, []);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://api.maninderrealestate.com/api/property/search?location=${searchQuery}`
      );
      const data = await response.json();

      if (data.status) {
        setProperties(data.data);
      } else {
        // Handle error response
        console.error("Error fetching properties:", data.message);
      }
    } catch (error) {
      // Handle network or server errors
      console.error("Error fetching properties:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Logic for pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const TogglSearch = () => {
    setSearchtogglemenu(!Searchtogglemenu);
  };

  return (
    <>
      <Header />
      <div
        className="bg-black flex justify-center items-center text-white  w-full bg-cover bg-no-repeat h-auto py-16"
        style={{ backgroundImage: `url("/asset/bg-lines-svg.svg")` }}
      >
        <div className=" w-full px-4 lg:px-10">
          <form
            className="mx-auto w-full px-4 lg:w-1/2"
            onSubmit={handleSearchSubmit}
          >
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
                placeholder="Enter a location or MLS® number"
                required
                value={searchQuery}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-NewYello hover:bg-NewYello  focus:outline-none  font-medium rounded-full text-sm px-5 py-2"
              >
                Search
              </button>
            </div>
          </form>
          {Searchtogglemenu && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
              <div class="max-w-sm">
                <select
                  id="PropertyType"
                  value={filters.PropertyType}
                  onChange={(event) =>
                    handleChange("PropertyType", event.target.value)
                  }
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                >
                  <option selected value="">
                    Choose Property Type
                  </option>
                  <option value="Single Family">Single Family</option>
                  <option value="Vacant Land">Vacant Land</option>
                  <option value="Multi-family">Multi-family</option>
                </select>
              </div>
              <div class="max-w-sm ">
                <select
                  id="priceRange"
                  value={filters.priceRange}
                  onChange={(event) =>
                    handleChange("priceRange", event.target.value)
                  }
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                >
                  <option selected value="">
                    Choose a price range
                  </option>
                  <option value="0-100000">$0 - $100,000</option>
                  <option value="100000-200000">$100,000 - $200,000</option>
                  <option value="200000-300000">$200,000 - $300,000</option>
                  <option value="300000-400000">$300,000 - $400,000</option>
                  <option value="400000-500000">$400,000 - $500,000</option>
                  <option value="500000-600000">$500,000 - $600,000</option>
                  <option value="600000-700000">$600,000 - $700,000</option>
                  <option value="700000-800000">$700,000 - $800,000</option>
                  <option value="800000-900000">$800,000 - $900,000</option>
                  <option value="900000+">$900,000+</option>
                </select>
              </div>
              <div class="max-w-sm ">
                <select
                  id="beds"
                  value={filters.beds}
                  onChange={(event) => handleChange("beds", event.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                >
                  <option data-v-b892bd7a="" value="">
                    Beds
                  </option>
                  <option data-v-b892bd7a="" value="1">
                    1+
                  </option>
                  <option data-v-b892bd7a="" value="2">
                    2+
                  </option>
                  <option data-v-b892bd7a="" value="3">
                    3+
                  </option>
                  <option data-v-b892bd7a="" value="4">
                    4+
                  </option>
                  <option data-v-b892bd7a="" value="5">
                    5+
                  </option>
                  <option data-v-b892bd7a="" value="6">
                    6+
                  </option>
                </select>
              </div>
              <div class="max-w-sm ">
                <select
                  id="baths"
                  value={filters.baths}
                  onChange={(event) =>
                    handleChange("baths", event.target.value)
                  }
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                >
                  <option selected value="">
                    Baths
                  </option>
                  <option data-v-b892bd7a="" value="1">
                    1+
                  </option>
                  <option data-v-b892bd7a="" value="2">
                    2+
                  </option>
                  <option data-v-b892bd7a="" value="3">
                    3+
                  </option>
                  <option data-v-b892bd7a="" value="4">
                    4+
                  </option>
                  <option data-v-b892bd7a="" value="5">
                    5+
                  </option>
                  <option data-v-b892bd7a="" value="6">
                    6+
                  </option>
                </select>
              </div>
              <div class="max-w-sm ">
                <select
                  id="buildingStyle"
                  value={filters.buildingStyle}
                  onChange={(event) =>
                    handleChange("buildingStyle", event.target.value)
                  }
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                >
                  <option data-v-b892bd7a="" value="">
                    Building Type
                  </option>
                  <option data-v-b892bd7a="" value="Apartment">
                    Apartment
                  </option>
                  <option data-v-b892bd7a="" value="House">
                    House
                  </option>
                  <option data-v-b892bd7a="" value="Duplex">
                    Duplex
                  </option>
                  <option data-v-b892bd7a="" value="Townhouse">
                    Townhouse
                  </option>
                </select>
              </div>
              <div class="max-w-sm ">
                <select
                  id="squareFeet"
                  value={filters.squareFeet}
                  onChange={(event) =>
                    handleChange("squareFeet", event.target.value)
                  }
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                >
                  <option data-v-b892bd7a="" value="" selected="selected">
                    Square Feet
                  </option>
                  <option data-v-b892bd7a="" value="500">
                    500+ sqft
                  </option>
                  <option data-v-b892bd7a="" value="750">
                    750+ sqft
                  </option>
                  <option data-v-b892bd7a="" value="1000">
                    1000+ sqft
                  </option>
                  <option data-v-b892bd7a="" value="1250">
                    1250+ sqft
                  </option>
                  <option data-v-b892bd7a="" value="1500">
                    1500+ sqft
                  </option>
                  <option data-v-b892bd7a="" value="1750">
                    1750+ sqft
                  </option>
                  <option data-v-b892bd7a="" value="2000">
                    2000+ sqft
                  </option>
                  <option data-v-b892bd7a="" value="2250">
                    2250+ sqft
                  </option>
                  <option data-v-b892bd7a="" value="2500">
                    2500+ sqft
                  </option>
                  <option data-v-b892bd7a="" value="2750">
                    2750+ sqft
                  </option>
                  <option data-v-b892bd7a="" value="3000">
                    3000+ sqft
                  </option>
                  <option data-v-b892bd7a="" value="3250">
                    3250+ sqft
                  </option>
                  <option data-v-b892bd7a="" value="3500">
                    3500+ sqft
                  </option>
                </select>
              </div>
            </div>
          )}

          <div className="mt-8 text-center mx-auto">
            <span
              onClick={TogglSearch}
              className="text-lg font-normal text-NewYello cursor-pointer inline-flex   "
            >
              Advanced Search
              <IoIosArrowDown className="w-5 h-5 ml-3" />
            </span>
          </div>
        </div>
      </div>

      <div className="container px-4 lg:px-10 py-6 mx-auto">
        {/* Content for displaying properties */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {currentProperties.map((property, index) => (
            <div key={index} className=" mb-4">
              <p className="font-semibold mb-1 md:h-20 overflow-hidden">
                {property.address}
              </p>
              <div className="border p-2 relative h-[185px] overflow-hidden">
                <img
                  className="w-full h-[15rem]"
                  src={
                    property.image_urls.length > 0
                      ? property.image_urls[0]
                      : "https://www.realtor.ca/images/common/listingplaceholder-medres.jpg"
                  }
                  alt=""
                />
                <div className="p-2 absolute top-2 right-2 bg-black/70 rounded-md">
                  <MdAddCall className="text-white" />
                </div>
                <div className="w-full flex justify-between absolute bottom-2">
                  <button className="px-4 py-2 bg-gray-50 text-red-500">
                    {property.additional_details &&
                    property.additional_details.Property_Type ? (
                      <p>{property.additional_details.Property_Type}</p>
                    ) : (
                      <p>Not available</p>
                    )}
                  </button>

                  <button className="px-4 py-2 bg-gray-50 text-red-500">
                    <p>{property.price}</p>
                  </button>
                </div>
              </div>
              <div className="py-2">
                <div className="relative">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right">
                      <thead className="text-xs text-gray-700 uppercase">
                        <tr className="border">
                          <th scope="col" className="px-2 border py-1.5">
                            Status
                          </th>
                          <th scope="col" className="px-2 border py-1.5">
                            MLS®#
                          </th>
                          <th scope="col" className="px-2 border py-1.5">
                            <IoBedOutline className="w-5 h-5" />
                          </th>
                          <th scope="col" className="px-2 border py-1.5">
                            <MdOutlineBathroom className="w-5 h-5" />
                          </th>
                          <th scope="col" className="px-2 border py-1.5">
                            Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border">
                          <td className="px-2 border py-1.5">Active</td>
                          <td className="px-2 border py-1.5">
                            {property.mls_number}
                          </td>
                          <td className="px-2 border py-1.5">
                            {property.bedrooms}
                          </td>
                          <td className="px-2 border py-1.5">
                            {property.bathrooms}
                          </td>
                          <td className="px-2 border py-1.5">
                            {property.price}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <p className="text-sm pl-1">
                {property.description
                  ? property.description.split(" ").slice(0, 20).join(" ")
                  : ""}
              </p>
              <p className="text-xs py-2 pl-1">Listed on {property.listedBy}</p>
              <div className="flex justify-between">
                <Link
                  to={`/property/${property._id}`}
                  className="text-white shadow-xl text-sm transition duration-150 ease-out hover:ease-in bg-[#C5B351] hover:bg-black uppercase px-8 py-2"
                >
                  Detials
                </Link>
                {/* <Link
                  to={`/property/${property.id}`}
                  className="text-white shadow-xl text-sm transition duration-150 ease-out hover:ease-in bg-black hover:bg-[#C5B351] uppercase px-8 py-2"
                >
                  More
                </Link> */}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <nav className="inline-flex">
            {/* Previous button */}
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l-md"
            >
              Previous
            </button>

            {/* Current page and neighbors */}
            {[currentPage - 1, currentPage, currentPage + 1].map(
              (pageNumber) =>
                pageNumber > 0 &&
                pageNumber <=
                  Math.ceil(properties.length / propertiesPerPage) && (
                  <button
                    key={pageNumber}
                    onClick={() => paginate(pageNumber)}
                    className={`px-4 py-2 ${
                      currentPage === pageNumber
                        ? "bg-NewYello text-white"
                        : "bg-gray-200 hover:text-white hover:bg-black"
                    } `}
                  >
                    {pageNumber}
                  </button>
                )
            )}

            {/* Next button */}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(properties.length / propertiesPerPage)
              }
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-md"
            >
              Next
            </button>
          </nav>
        </div>
      </div>
      {showMessageBox && <MessageBox onClose={handleClose} />}
      <Footer />
    </>
  );
};

export default FeaturedPage;
