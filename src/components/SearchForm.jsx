import React from "react";

const SearchForm = () => {
  return (
    <>
      <form class=" w-full  text-[#464646]">
        <div>
          <h2 className="text-2xl text-black font-normal mb-4">
            Advanced Search
          </h2>
        </div>
        <div className="mb-3">
          <input
            class=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5 placeholder-[#464646] "
            placeholder="Enter an address, state, city, area or zip code "
            type="text"
          />
        </div>
        <div className="mb-3">
          <select
            id="countries"
            class=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5   "
          >
            <option selected>Property category</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="mb-3">
          <select
            id="countries"
            class=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5"
          >
            <option selected>Property status</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="mb-3">
          <select
            id="countries"
            class=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5 "
          >
            <option selected>Stories No</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="mb-3">
          <input
            class=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5 placeholder-[#464646] "
            placeholder="Price "
            type="text"
          />
        </div>
        <div className="mt-6">
          <button class=" border text-white bg-NewYello border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5 ">
            Search Properties
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
