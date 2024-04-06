import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-[#abb8c3]/10 h-screen flex justify-center items-center'>
            <div className=''>
                <img
                    className='h-32 mb-2'
                    src="./asset/Black logo - no background.png" alt="" />

                <form className="w-[18rem] sm:w-96 mx-auto border border-gray-100 bg-white shadow-lg px-8 py-4 ">
                    <h6 className='text-center text-gray-600 text-lg  font-medium mb-4'>Sign in to start your session</h6>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-700  font-semibold">E-Mail Address</label>
                        <input type="email" id="email" className="rounded-mdborder border text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 text-sm text-gray-700  font-semibold"> Password</label>
                        <input type="password" id="password" className="rounded-mdborder border text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
                    </div>
                    <div className="flex items-center justify-between mb-5">
                        <button type="submit" className="text-white bg-NewYello hover:bg-NewYello focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm  sm:w-auto px-4 py-2 text-center">Login</button>
                        <Link to="#" className="ms-2 text-sm font-medium text-blue-500 hover:underline">Forgot password ? </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
