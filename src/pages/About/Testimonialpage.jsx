import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MessageBox from "../../components/MessageBox";
import { useMyContext } from "../../store/ContextApi";

const Testimonialpage = () => {

  const {showMessageBox,handleClose } = useMyContext()

  const [testimonials, setTestimonials] = useState([]);



  useEffect(() => {
    fetchTestimonials();
  }, [])



  const fetchTestimonials = async () => {
    try {
      const response = await fetch(
        "https://backend.artechworld.tech/api/testimonials/all"
      );
      const data = await response.json();
      if (data.success) {
        setTestimonials(data.data);
      } else {
        console.error("Failed to fetch testimonials");
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`mr-1 ${i <= rating ? "text-yellow-400" : "text-gray-400"
            }`}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <Header />
      <div
        className="bg-black flex justify-center items-center text-white w-full bg-cover bg-no-repeat h-56"
        style={{ backgroundImage: `url("/asset/bg-lines-svg.svg")` }}
      >
        <div>
          <h1 className="text-2xl lg:text-6xl font-[400] mb-4 text-center text-[#C5B351] ">
            WHAT CLIENTS ARE SAYING...
          </h1>
          <p className="text-white lg:text-xl text-center font-normal font-prata tracking-tight">
            TESTIMONIALS
          </p>
        </div>
      </div>
      <section className="container mx-auto py-6 lg:pt-20 lg:pb:14 px-4 lg:px-10">
        <div className="space-y-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="px-5 py-6 lg:py-16 lg:px-20 bg-[#abb8c3]/10"
            >
              <p className="text-lg leading-relaxed mb-2">
                {testimonial.message}
              </p>
              <div className="flex items-center">
                <div className="mr-2">{renderStars(testimonial.rating)}</div>
                <span>{testimonial.rating}</span>
              </div>
              <p className="text-xl italic mt-2">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
      {showMessageBox && <MessageBox onClose={handleClose} />}
      <Footer />
    </>
  );
};

export default Testimonialpage;
