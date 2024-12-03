import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Blogs() {
  const [blogs, setBlogs] = useState([]); // State for blogs
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Function to fetch blogs by category
  const fetchBlogsByCategory = async (category) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://blogapplicationbackend-1.onrender.com/api/blogs/search`, {
        params: { category },
      });
      setBlogs(response.data); // Update blogs state with fetched data
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError("Failed to fetch blogs.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch blogs whenever the search term changes
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchBlogsByCategory(searchTerm);
    }, 500); // Add a debounce delay to avoid excessive API calls

    return () => clearTimeout(timer); // Clear timeout on cleanup
  }, [searchTerm]);

  return (
    <div>
      <div className="container mx-auto my-12 p-4">
        <h1 className="text-2xl font-bold mb-6">All Blogs</h1>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by category..."
            className="w-full sm:w-1/3 px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : blogs && blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {blogs.map((blog, index) => (
              <Link
                to={`/blog/${blog._id}`}
                key={index}
                className="relative rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-lg font-semibold">{blog?.title}</h2>
                  <p className="text-sm">{blog?.category}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No blogs found.
          </div>
        )}
      </div>
    </div>
  );
}

export default Blogs;
