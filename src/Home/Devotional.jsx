import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Devotional() {
  const { blogs } = useAuth();
  const sportsBlogs = blogs?.filter((blog) => blog.category === "Entertainment");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <div className="container mx-auto my-12 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Entertainment Category</h1>
      <p className="text-center mb-8 text-lg text-gray-600">
        The concept of Entertainment varies widely across different cultures and perspectives.
      </p>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        transitionDuration={500}
        className="mb-8"
      >
        {sportsBlogs && sportsBlogs.length > 0 ? (
          sportsBlogs.map((blog, index) => (
            <Link
              to={`/blog/${blog._id}`}
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <img
                src={blog?.blogImage?.url}
                alt={blog?.title}
                className="w-full h-56 sm:h-64 object-cover rounded-lg transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white z-10">
                <h2 className="text-xl font-semibold">{blog?.title}</h2>
                <p className="text-sm">{blog?.category}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="flex h-screen items-center justify-center text-gray-600">Loading....</div>
        )}
      </Carousel>
    </div>
  );
}

export default Devotional;
