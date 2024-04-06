import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  function truncateHtml(html, limit) {
    if (!html) return "";

    // Match HTML tags
    const tagRegex = /(<([^>]+)>)/gi;
    let text = html.replace(tagRegex, "");

    let words = text.split(" ");

    if (words.length > limit) {
      words = words.slice(0, limit);
      return `${words.join(" ")}...`;
    }
    return html;
  }

  return (
    <>
      <div className="lg:max-w-sm relative p-1 bg-white shadow-lg  overflow-hidden rounded-lg border-[1px] border-[#f1f8ff] text-[#464646] ">
        <img
          className=" w-full rounded-[10px] transition-transform duration-300 transform hover:scale-110 object-cover"
          src={`https://backend.artechworld.tech/uploads/blogs/tImages/${blog?.mainImage}`}
          alt=""
        />
        <div className="p-4">
          <h4 className="text-xl cursor-pointer hover:text-NewYello font-semibold py-1">
            {blog?.title}
          </h4>
          <p>{new Date(blog?.created_at).toLocaleDateString()}</p>
          {/* Render HTML content using dangerouslySetInnerHTML */}
          <p
            className="mb-6"
            dangerouslySetInnerHTML={{
              __html: truncateHtml(blog?.content, 30),
            }}
          ></p>
          <div className="absolute left-4 bottom-5">
            <Link
              to={`/singleblog/${blog?._id}`}
              className="flex cursor-pointer text-sm font-bold hover:text-NewYello justify-center items-center mt-2"
            >
              Continue reading <span className="pl-1">&#10132;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
