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

  const { showMessageBox, handleClose } = useMyContext();
  useEffect(() => {
    fetch("https://backend.artechworld.tech/api/admin/property/list/all")
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
          <form className=" mx-auto w-full px-4 lg:w-1/2">
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
      </div>

      <div className="container px-4 lg:px-10 py-6 mx-auto">
        {/* Content for displaying properties */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {currentProperties.map((property, index) => (
            <div key={index} className=" mb-4">
              {/* <p className="font-semibold mb-1 md:h-20 overflow-hidden">
                {property.additional_details}
              </p> */}
              <div className="border p-2 relative h-[185px] overflow-hidden">
                <img
                  className=" w-full transform transition-transform duration-3000 hover:scale-125"
                  src={property.image_urls[0]}
                  alt=""
                />
                <div className="p-2 absolute top-2 right-2 bg-black/70 rounded-md">
                  <MdAddCall className="text-white" />
                </div>
                <div className="w-full flex justify-between absolute bottom-2">
                  <button className="px-4 py-2 bg-gray-50 text-red-500">
                    <p>{property.additional_details.Property_Type}</p>
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
                          <td className="px-2 border py-1.5">
                            Active
                          </td>
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
