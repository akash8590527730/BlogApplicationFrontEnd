import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CiMenuBurger } from "react-icons/ci";
import { BiSolidLeftArrowAlt } from "react-icons/bi";
import { FaHive } from "react-icons/fa"; // Import Hive icon from react-icons
import toast from "react-hot-toast";

function Sidebar({ setComponent }) {
  const { profile, setIsAuthenticated } = useAuth();
  const navigateTo = useNavigate();
  const [show, setShow] = useState(false);
  const [activeItem, setActiveItem] = useState("My Blogs");

  const handleComponents = (value) => {
    setComponent(value);
    setActiveItem(value); // Set active menu item
  };

  const gotoHome = () => {
    navigateTo("/");
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "https://blogapplicationbackend-1.onrender.com/api/users/logout",
        { withCredentials: true }
      );
      toast.success(data.message);
      localStorage.removeItem("jwt"); // deleting token in localStorage
      setIsAuthenticated(false);
      navigateTo("/");
    } catch (error) {
      console.log(error);
      toast.error(error.data.message || "Failed to logout");
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div
        className="sm:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-full"
        onClick={() => setShow(!show)}
      >
        <CiMenuBurger className="text-2xl" />
      </div>

      {/* Sidebar */}
      <div
        className={`w-64 h-full shadow-xl fixed top-0 left-0 bg-gray-800 text-white transition-transform duration-300 transform sm:translate-x-0 ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="sm:hidden absolute top-4 right-4 text-white text-xl cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <BiSolidLeftArrowAlt className="text-2xl" />
        </div>

        {/* User Info */}
        <div className="text-center pt-6 pb-4 border-b-2 border-gray-600">
          <p className="text-lg font-semibold text-gray-300 mt-2">{profile?.user?.name}</p>
          <p className="text-sm text-gray-500">{profile?.user?.role}</p>
        </div>

        {/* Sidebar Navigation */}
        <ul className="space-y-6 mx-4 mt-8">
          {/* My Blogs Button */}
          <button
            onClick={() => handleComponents("My Blogs")}
            className={`w-full px-4 py-2 rounded-lg text-white transition duration-300 ease-in-out ${
              activeItem === "My Blogs" ? "bg-green-700" : "bg-green-600"
            } hover:bg-green-800`}
          >
            MY BLOGS
          </button>

          {/* Create Blog Button */}
          <button
            onClick={() => handleComponents("Create Blog")}
            className={`w-full px-4 py-2 rounded-lg text-white transition duration-300 ease-in-out ${
              activeItem === "Create Blog" ? "bg-blue-700" : "bg-blue-600"
            } hover:bg-blue-800`}
          >
            CREATE BLOG
          </button>

          {/* Home Button */}
          <button
            onClick={gotoHome}
            className={`w-full px-4 py-2 rounded-lg text-white transition duration-300 ease-in-out ${
              activeItem === "Home" ? "bg-red-700" : "bg-red-600"
            } hover:bg-red-800`}
          >
            HOME
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 rounded-lg text-white bg-yellow-600 hover:bg-yellow-800 transition duration-300 ease-in-out"
          >
            LOGOUT
          </button>
        </ul>

        {/* Admin Dashboard: Include Hive Icon */}
        <div className="mt-4 flex justify-center items-center">
          <FaHive className="text-3xl text-yellow-500" /> {/* Display Hive icon */}
          <p className="text-center text-gray-300 mt-2">Admin Dashboard</p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
