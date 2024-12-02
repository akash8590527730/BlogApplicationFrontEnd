import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Trending() {
  const { blogs } = useAuth();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Trending Blogs
      </h1>
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        transitionDuration={800}
        containerClass="carousel-container"
        itemClass="px-3"
        dotListClass="custom-dot-list"
        draggable
        showDots
        renderDotsOutside
      >
        {blogs && blogs.length > 0 ? (
          blogs.slice(0, 6).map((element) => (
            <div
              key={element._id}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <Link
                to={`/blog/${element._id}`}
                className="block border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-gray-100 via-white to-gray-100 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-400 transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={element.blogImage.url}
                    alt="Blog"
                    className="w-full h-56 object-cover"
                  />
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm shadow-md text-white transition-all duration-300 ${
                      element.category === "Technology"
                        ? "bg-blue-500 hover:bg-blue-700"
                        : element.category === "Sports"
                        ? "bg-green-500 hover:bg-green-700"
                        : element.category === "Politics"
                        ? "bg-red-500 hover:bg-red-700"
                        : element.category === "Entertainment"
                        ? "bg-purple-500 hover:bg-purple-700"
                        : "bg-yellow-500 hover:bg-yellow-700"
                    }`}
                  >
                    {element.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  <h1
                    className="text-lg font-semibold text-gray-800 mb-2 truncate"
                    title={element.title}
                  >
                    {element.title}
                  </h1>
                  <div className="flex items-center">
                    <img
                      src={element.adminPhoto}
                      alt="Author Avatar"
                      className="w-10 h-10 rounded-full shadow-md"
                    />
                    <p className="ml-3 text-gray-500 text-sm">
                      {element.adminName}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="flex h-40 items-center justify-center text-gray-500">
            Loading...
          </div>
        )}
      </Carousel>
    </div>
  );
}

export default Trending;
