import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Detail() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState({});

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4001/api/blogs/single-blog/${id}`,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setBlogs(data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to load blog.");
      }
    };
    fetchBlogs();
  }, [id]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto p-4">
        {blogs && (
          <section>
            {/* Category Section */}
            <div
              data-aos="fade-up"
              className="text-blue-500 uppercase text-xs font-bold mb-4"
            >
              {blogs?.category}
            </div>

            {/* Blog Title */}
            <h1
              data-aos="fade-up"
              className="text-4xl font-extrabold text-blue-700 mb-6 text-center hover:text-blue-600 transition duration-300"
            >
              {blogs?.title}
            </h1>

            {/* Author Section */}
            <div
              data-aos="fade-up"
              className="flex items-center justify-center mb-6"
            >
              <img
                src={blogs?.adminPhoto}
                alt="author_avatar"
                className="w-12 h-12 rounded-full mr-4 border-2 border-gray-300"
              />
              <p className="text-lg font-semibold text-gray-800">{blogs?.adminName}</p>
            </div>

            {/* Image and Content Section */}
            <div className="flex flex-col md:flex-row" data-aos="fade-left">
              {/* Blog Image */}
              {blogs?.blogImage && (
                <img
                  src={blogs?.blogImage?.url}
                  alt="mainblogImg"
                  className="md:w-1/2 w-full h-[500px] mb-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              )}

              {/* Blog Description */}
              <div className="md:w-1/2 w-full md:pl-6">
                <p className="text-lg mb-6 text-gray-700">{blogs?.about}</p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Detail;
