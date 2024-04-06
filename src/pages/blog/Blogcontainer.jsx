import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SearchForm from "../../components/SearchForm";
import BlogCard from "../../components/BlogCard";
import { useMyContext } from "../../store/ContextApi";
import MessageBox from "../../components/MessageBox";

const Blogcontainer = () => {
  const { showMessageBox, handleClose } = useMyContext();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "https://backend.artechworld.tech/api/blogs"
      );
      const data = await response.json();
      if (data.status) {
        // Map through the data and parse the Summernote content
        const parsedBlogs = data.data;
        setBlogs(parsedBlogs);
      } else {
        console.error("Failed to fetch blogs");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return (
    <>
      <Header />
      <div
        className="bg-black flex justify-center items-center text-white w-full bg-cover bg-no-repeat h-56"
        style={{ backgroundImage: `url("/asset/bg-lines-svg.svg")` }}
      >
        <div>
          <h1 className="text-2xl lg:text-6xl font-[400] mb-4 text-[#C5B351] ">
            Real Estate Blog
          </h1>
          <p className="text-white text-xl text-center font-normal font-prata tracking-tight">
            Read about the latest industry news
          </p>
        </div>
      </div>
      <div className="bg-[#fffcfc]">
        <div className="container px-4 lg:px-10 py-6 mx-auto">
          <h1 className="text-2xl lg:text-4xl font-[400] mb-4">Blog List</h1>
          <div className="grid grid-cols-1 lg:grid-cols-[68%_auto] gap-14">
            {/*blog section  */}
            <div className="flex-1 overflow-auto h-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {blogs.map((blog) => (
                  <BlogCard blog={blog} />
                ))}
              </div>
            </div>
            {/* side blog section */}
            <div className="relative">
              <div className="sticky top-0">
                <div className="p-6 rounded-lg shadow-lg bg-white mb-5">
                  <SearchForm />
                </div>
                <div className="p-6 rounded-lg shadow-lg bg-white">
                  <h4 className="text-2xl font-medium mb-4">Latest Listings</h4>
                  <div className="py-3">
                    <div className="flex flex-col space-y-3">
                      {/* Latest listings here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showMessageBox && <MessageBox onClose={handleClose} />}
      <div className="mt-6">
        <Footer />
      </div>
    </>
  );
};

export default Blogcontainer;
