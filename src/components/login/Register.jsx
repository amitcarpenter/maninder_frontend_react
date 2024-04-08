import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
const Register = () => {

    const [Name, setName] = useState("")
    const [Mobile, setMobile] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")



    const HandleForm = (e) => {
        e.preventDefault();

        const payload = {
            name: Name,
            email: Email,
            phone: Mobile,
            password: Password
        };

        axios.post('https://backend.artechworld.tech/api/register', payload)
            .then(response => {
                
                // console.log('Response:', response.data);
                toast.success(response.data, { autoClose: 2000 });
            })
            .catch(error => {
                
                console.error('Error:', error);
                toast.error(error.response.data.message)
            });
    };



    return (
        <div className='bg-[#abb8c3]/10 h-full sm:h-screen flex justify-center items-center'>
            <div className='sm:mt-0 '>
                <img
                    className='h-24 sm:h-36 mb-2 mx-auto '
                    src="./asset/Black logo - no background.png" alt="" />

                <form
                    onSubmit={HandleForm}
                    className="w-full   border border-gray-100 bg-white shadow-lg  px-8 py-4 ">
                    <h6 className='text-center text-gray-600 text-xl  font-medium mb-4'>Sign Up to start your session</h6>

                    <div className='flex flex-wrap gap-5 mb-4'>

                        <div className="">
                            <label htmlFor="first" className="block mb-2 text-sm text-gray-700  font-semibold">Your Name</label>
                            <input
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                                type="text" 
                                className="  lg:w-72 rounded-mdborder border text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
                        </div>
                        <div className="">
                            <label
                                htmlFor="sername" className="block mb-2 text-sm text-gray-700  font-semibold">Mobile </label>
                            <input
                                value={Mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                type="number" 
                                className="  lg:w-72 rounded-mdborder border text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
                        </div>

                    </div>

                    <div className='flex flex-wrap  gap-5 mb-4'>

                        <div className="">
                            <label htmlFor="email" className="block mb-2 text-sm text-gray-700  font-semibold">E-Mail Address</label>
                            <input
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email" 
                                className="  lg:w-72 rounded-mdborder border text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
                        </div>
                        <div className="">
                            <label htmlFor="password" className="block mb-2 text-sm text-gray-700  font-semibold"> Password</label>
                            <input
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password" 
                                className="  lg:w-72 rounded-mdborder border text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
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
