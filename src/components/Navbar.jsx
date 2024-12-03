import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { FaHive } from "react-icons/fa";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

function Navbar() {
  const [show, setShow] = useState(false);
  const { profile, isAuthenticated, setIsAuthenticated } = useAuth();
  const navigateTo = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "https://blogapplicationbackend-1.onrender.com/api/users/logout",
        { withCredentials: true }
      );
      localStorage.removeItem("jwt");
      toast.success(data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  return (
    <>
      <nav className="shadow-lg px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="flex items-center justify-between container mx-auto">
          <div className="flex items-center font-semibold text-2xl text-white space-x-2">
            <FaHive className="text-yellow-300" />
            <span>BlogHive</span>
          </div>
          {/* Desktop */}
          <div className="mx-6">
            <ul className="hidden md:flex space-x-6 text-lg font-medium text-white">
              <Link to="/" className="hover:text-yellow-300">
                HOME
              </Link>
              <Link to="/blogs" className="hover:text-yellow-300">
                BLOGS
              </Link>
              <Link to="/creators" className="hover:text-yellow-300">
                CREATORS
              </Link>
              <Link to="/about" className="hover:text-yellow-300">
                ABOUT
              </Link>
              <Link to="/contact" className="hover:text-yellow-300">
                CONTACT
              </Link>
            </ul>
            <div className="md:hidden" onClick={() => setShow(!show)}>
              {show ? <IoCloseSharp size={28} className="text-white" /> : <AiOutlineMenu size={28} className="text-white" />}
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            {isAuthenticated && profile?.user?.role === "admin" ? (
              <Link
                to="/dashboard"
                className="bg-yellow-300 text-purple-800 font-semibold hover:bg-yellow-400 duration-300 px-4 py-2 rounded"
              >
                DASHBOARD
              </Link>
            ) : null}

            {!isAuthenticated ? (
              <Link
                to="/login"
                className="bg-yellow-300 text-purple-800 font-semibold hover:bg-yellow-400 duration-300 px-4 py-2 rounded"
              >
                LOGIN
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
              >
                LOGOUT
              </button>
            )}
          </div>
        </div>
        {/* Mobile navbar */}
        {show && (
          <div className="bg-white text-gray-800">
            <ul className="flex flex-col h-screen items-center justify-center space-y-6 text-xl">
              <Link
                to="/"
                onClick={() => setShow(!show)}
                className="hover:text-blue-500"
              >
                HOME
              </Link>
              <Link
                to="/blogs"
                onClick={() => setShow(!show)}
                className="hover:text-blue-500"
              >
                BLOGS
              </Link>
              <Link
                to="/creators"
                onClick={() => setShow(!show)}
                className="hover:text-blue-500"
              >
                CREATORS
              </Link>
              <Link
                to="/about"
                onClick={() => setShow(!show)}
                className="hover:text-blue-500"
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                onClick={() => setShow(!show)}
                className="hover:text-blue-500"
              >
                CONTACT
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
