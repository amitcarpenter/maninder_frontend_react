import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='bg-[#abb8c3]/10 h-screen flex justify-center items-center'>
            <div className=' '>
                <img
                    className='h-36 mb-2 mx-auto '
                    src="./asset/Black logo - no background.png" alt="" />

                <form className="w-full   border border-gray-100 bg-white shadow-lg px-8 py-4 ">
                    <h6 className='text-center text-gray-600 text-xl  font-medium mb-4'>Sign Up to start your session</h6>



                    <div className='flex flex-wrap gap-5 mb-4'>

                         <div className="">
                            <label htmlFor="first" className="block mb-2 text-sm text-gray-700  font-semibold">Your Name</label>
                            <input type="text" id="email"
                                className=" lg:w-72 rounded-mdborder border text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
                        </div>
                        <div className="">
                            <label htmlFor="sername" className="block mb-2 text-sm text-gray-700  font-semibold"> Your Sername</label>
                            <input type="text" id="password"
                                className=" lg:w-72 rounded-mdborder border text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
                        </div>

                    </div>

                    <div className='flex flex-wrap  gap-5 mb-4'>

                        <div className="">
                            <label htmlFor="email" className="block mb-2 text-sm text-gray-700  font-semibold">E-Mail Address</label>
                            <input type="email" id="email"
                                className=" lg:w-72 rounded-mdborder border text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
                        </div>
                        <div className="">
                            <label htmlFor="password" className="block mb-2 text-sm text-gray-700  font-semibold"> Password</label>
                            <input type="password" id="password"
                                className=" lg:w-72 rounded-mdborder border text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
                        </div>

                    </div>


                    <div className="flex items-center justify-between mb-5">
                        <button type="submit" className="text-white bg-NewYello hover:bg-NewYello focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm  sm:w-auto px-4 py-2 text-center">Register</button>
                        <Link to="#" 
                        className="ms-2 text-sm font-medium text-blue-500 hover:underline">Sign In </Link>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default Register;
