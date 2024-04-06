import React from 'react';

const Header = () => {
    return (
        <nav className="bg-gray-900  h-[90px] fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:bg-gray-900 dark:border-gray-600">
        <div className="container h-full text-white flex flex-wrap items-center justify-between mx-auto px-12 py-3">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span>
          </a>
        

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col text-[15px] uppercase p-4 md:p-0 mt-4 font-medium border border-gray-100 -lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-4    md:bg-transparent  md:p-0 ">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4   hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Contact</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Contact</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Contact</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Contact</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    );
}

export default Header;
