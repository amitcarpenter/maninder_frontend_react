import React, { useState, useEffect } from 'react'
import Header from "../../components/header/Header"
import { FaCalendarAlt } from "react-icons/fa";
import { CiStickyNote } from "react-icons/ci";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import BlogCard from "../../components/BlogCard"
import SearchForm from '../../components/SearchForm';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import MessageBox from '../../components/MessageBox';
import { useMyContext } from '../../store/ContextApi';
const Singleblogpage = () => {
    const { showMessageBox, handleClose } = useMyContext()
    const data = [1, 2, 3, 4, 5]
    const [blogs, setBlogs] = useState([]);
    const [Singleblogs, setSingleblogs] = useState({});

    const [formattedDate, setFormattedDate] = useState("");

    const { id } = useParams()

    const fetchBlogs = async () => {
        try {
            const response = await fetch('https://backend.artechworld.tech/api/blogs');
            const data = await response.json();
            if (data.status) {
                const parsedBlogs = data.data
                setBlogs(parsedBlogs);
            } else {
                console.error('Failed to fetch blogs');
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };


    useEffect(() => {
        fetchBlogs();
    }, []);




    useEffect(() => {
        fetchSingleBlogs();
    }, [id]);


    const formatDate = (date) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const fetchSingleBlogs = async () => {
        try {
            const response = await fetch(`https://backend.artechworld.tech/api/blog/${id}`);
            const data = await response.json();
            if (data.status) {
                const parsedBlogs = data.data


                setSingleblogs(parsedBlogs);


                const date = new Date(data.data.created_at);


                const formattedDate = formatDate(date);

                setFormattedDate(formattedDate);


            } else {
                console.error('Failed to fetch blogs');
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };
    return (
        <>
            <Header />

            <div className='bg-[#fffcfc]'>
                <div className=' container px-4 lg:px-10 py-6 lg:py-16  mx-auto'>


                    <div className='grid grid-cols-1 lg:grid-cols-[68%_auto] gap-14 '>
                        {/*blog section  */}
                        <div className='flex-1 overflow-auto  h-auto'>


                            <div className='   bg-white shadow-lg  overflow-hidden rounded p-2  md:p-7 text-[#464646] '>
                                <h1 className=' text-black text-2xl lg:text-4xl font-[400] mb-4  '> {Singleblogs.title}</h1>
                                <div className='mb-5 flex flex-col sm:flex-row  gap-5 '>
                                    <p className='flex items-center'>
                                        <FaCalendarAlt className='w-4 h-4 mr-2' />  Posted by {Singleblogs.author} on {formattedDate}
                                    </p>
                                    <p className='flex items-center'>
                                        <CiStickyNote className='w-4 h-4 mr-2' />   Buying Properties, Location, Price, Real Estate
                                    </p>
                                </div>
                                <img
                                    class='w-full object-cover'
                                    src={`https://backend.artechworld.tech/uploads/blogs/tImages/${Singleblogs?.mainImage}`} alt='' />



                                <div className='my-5'>
                                    <p>New York County as a whole covers a total area of 33.77 square miles (87.5 km2), of which 22.96 square miles (59.5 km2) are land and 10.81 square miles (28.0 km2) are water.</p>
                                </div>
                                <div class="py-2 border-l border-NewYello">
                                    <p className='italic pl-4'>A modern redrawing of the 1807 version of the Commissioner’s Grid plan for Manhattan, a few years before it was adopted in 1811. Central Park is absent.</p>
                                </div>
                                <div className='my-5'>
                                    <p>Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer
                                        tristique elit lobortis purus bibendum, quis dictum metus mattis.</p>

                                </div>

                                <div>
                                    <h1 className=' text-black text-2xl lg:text-3xl font-[400] mb-4'>What you must know about the Seatlle market</h1>

                                    <p className='mb-4'>Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa, at interdum mauris sollicitudin et. Mauris risus lectus, tristique at nisl at, pharetra tristique enim.</p>
                                    <p className='mb-4'>Nullam this is a link nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Nulla elit mauris, volutpat eu varius malesuada, pulvinar eu ligula. Ut et adipiscing erat. Curabitur adipiscing erat vel libero tempus congue. Nam pharetra interdum vestibulum. Aenean gravida mi non aliquet porttitor.
                                        Praesent dapibus, nisi a faucibus tincidunt, quam dolor condimentum metus, in convallis libero ligula ut eros.</p>

                                    <li className='list-disc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                    <li className='list-disc'>Aliquam tincidunt mauris eu risus.</li>

                                    <div className='pl-5'>
                                        <li className="list-decimal">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                        <li className="list-decimal">Vestibulum auctor dapibus neque.</li>
                                    </div>


                                </div>


                                <div className='flex gap-3  items-center mt-5'>
                                    <div className=' flex items-center 
                                    justify-center w-10 h-10  rounded-full border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
                                    -full'>
                                        <FaLinkedinIn />
                                    </div>
                                    <div className=' flex items-center 
                                    justify-center w-10 h-10 rounded-full  border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
                                    -full'>
                                        <FaInstagram />
                                    </div>
                                    <div className=' flex items-center 
                                    justify-center w-10 h-10  rounded-full border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
                                    -full'>
                                        <FaFacebookF />
                                    </div>
                                </div>
                            </div>

                            {/* related form*/}
                            <div className='   bg-white shadow-lg  overflow-hidden rounded p-2  md:p-7 text-[#464646] my-5'>
                                <h1 className=' text-black text-2xl lg:text-3xl font-[400] mb-2  '> Leave a Reply</h1>
                                <p>Your email address will not be published</p>
                                <form className='py-3'>
                                    <textarea
                                        className='border w-full rounded-lg px-4 focus:outline-none border-gray-300 py-2'
                                        placeholder='comment '
                                        cols="20" rows="6">

                                    </textarea>

                                    <div className='flex flex-col sm:flex-row gap-3'>
                                        <input type="text" className='focus:outline-none border-gray-300 border rounded-lg px-4 py-2  w-full' placeholder='Name' />
                                        <input type="text" className='focus:outline-none border-gray-300 border rounded-lg px-4 py-2 w-full' placeholder='Email' />
                                        <input type="text" className='focus:outline-none border-gray-300 border rounded-lg px-4 py-2 w-full' placeholder='Website' />
                                    </div>

                                    <div class="flex items-center py-2">
                                        <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300 rounded  focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="link-checkbox" class="ms-2 text-sm font-medium">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
                                    </div>

                                    <button className='px-5  bg-NewYello text-white rounded py-1.5  '>Post Comment</button>
                                </form>

                            </div>


                            {/* related blogs */}
                            <div className='py-6'>

                                <h1 className=' text-black text-2xl lg:text-3xl font-[400] mb-4 '>Related Posts</h1>
                                <div className='flex flex-wrap  gap-8  '>
                                    {
                                        blogs.map((item) => {
                                            return (
                                                <BlogCard blog={item} />

                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>


                        {/* side bloge sect */}
                        <div className="relative">
                            <div className="sticky top-0 ">
                                <div className='p-6  rounded-lg shadow-lg bg-white mb-5'>
                                    <SearchForm />
                                </div>
                                <div className='p-6 rounded-lg shadow-lg bg-white'>
                                    <h4 className='text-2xl font-medium mb-4'>Latest Listings</h4>

                                    <div className='py-3'>
                                        <div className='flex flex-col space-y-3'>
                                            {
                                                data.map((item) => {
                                                    return (
                                                        <>
                                                            <div className='flex justify-between items-center'>
                                                                <img
                                                                    className=' w-28 rounded-xl object-cover'
                                                                    src="https://sanjose-wpresidence.b-cdn.net/wp-content/uploads/2014/05/9.6-525x328.webp" alt=""
                                                                />


                                                                <div className='pl-3'>
                                                                    <p>Villa with panoramic view</p>
                                                                    <p className='text-NewYello'>$ 5,500,000</p>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >

            {showMessageBox && <MessageBox onClose={handleClose} />}
            <Footer />

        </>
    )
}

export default Singleblogpage