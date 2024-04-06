import React from 'react';

const Testimonial = () => {

    
    return (
        <>
            <div className='bg-black text-white lg:px-20 px-4 py-6 lg:py-20 '>
                <div className='text-center '>
                    <p className='text-xl italic'>what they say</p>
                    <h1 className='text-3xl lg:text-5xl font-[400] text-[#C5B351]   capitalize py-2'>client testimonials</h1>
                </div>

                <div id="default-carousel" className="relative mx-auto container  " data-carousel="slide">
                    {/* Carousel wrapper */}
                    <div className="relative max-w-4xl mx-auto flex justify-center items-center  overflow-hidden -lg lg:h-96">
                        {/* Item 1 */}
                        <div className=" duration-700 ease-in-out" data-carousel-item>
                            <div className='grid grid-col-1 lg:grid-cols-[auto_60%] gap-10'>
                                <div>
                                    <img src="https://media.istockphoto.com/id/1410798175/photo/smiling-indian-woman-formal-corporate-office-employee-at-workplace-looking-at-the-camera.jpg?s=1024x1024&w=is&k=20&c=dJ2TopBFTQpLDMGBV7gElL12hpnoy5-f9UZgKiWHnA0="
                                        className='w-full md:[21rem] lg:h-44'
                                        alt="" />
                                </div>
                                <div>


                                    <p className='text-base italic'>" Edison bulb retro cloud bread echo park, helvetica
                                        stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                                        Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking
                                        vinegar cronut adaptogen squid fanny pack vaporware. Man bun next
                                        level coloring book skateboard four loko knausgaard. Kitsch keffiyeh
                                        they sold out gentrify plaid gastropub normcore XOXO 90's "</p>

                                    <div className='py-6'>
                                        <p className='text-xl font-medium'>Mr. Maninder Singh | Morgen Creek</p>
                                        <span>Seller</span>
                                    </div>
                                    <button className=' hover:text-white  hover:bg-[#C5B351] uppercase border border-[#C5B351]  px-4 py-2 lg:px-12 lg:py-3.5'>more testimonial</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Slider indicators */}
                    <div className="absolute z-30 hidden sm:flex  -translate-x-1/2 bottom-[-20px] left-1/2 space-x-3 rtl:space-x-reverse ">
                        <button type="button" className="w-3 h-3 border border-white  rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full border border-white " aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="w-3 h-3 rounded-full border border-white " aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                    </div>
                    {/* Slider controls */}
                    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 -full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute  sm: top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 -full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>

            </div>
        </>
    );
}

export default Testimonial;
