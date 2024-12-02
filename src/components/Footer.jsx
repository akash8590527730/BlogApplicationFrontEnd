import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebook, FaGithub, FaHive } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-8 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 text-white w-full p-10 font-sans">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className="space-y-4 w-full md:w-1/4">
          <div className="font-semibold text-3xl flex items-center text-yellow-300 animate-bounce">
            <FaHive className="mr-2" /> BlogHive
          </div>
          <p className="text-gray-200 text-sm">
            BlogHive is a modern platform designed to inspire and connect people through blogs. 
            Built with passion and creativity, powered by the latest web technologies.
          </p>
          <p className="text-gray-300 text-sm">Code licensed under MaxBlog. Docs CC BY 3.0.</p>
          <p className="text-gray-300 text-sm">Currently v5.3.2</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col space-y-3">
          <h5 className="text-xl font-semibold text-gray-100">Links</h5>
          <Link
            to="/"
            className="text-white hover:text-yellow-300 transition-transform duration-300 transform hover:translate-x-1"
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="text-white hover:text-yellow-300 transition-transform duration-300 transform hover:translate-x-1"
          >
            Blogs
          </Link>
          <Link
            to="/creator"
            className="text-white hover:text-yellow-300 transition-transform duration-300 transform hover:translate-x-1"
          >
            Creator
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-yellow-300 transition-transform duration-300 transform hover:translate-x-1"
          >
            Contact
          </Link>
        </div>

        {/* Resources Section */}
        <div className="flex flex-col space-y-3">
          <h5 className="text-xl font-semibold text-gray-100">Resources</h5>
          <a
            href="https://react.dev/"
            className="text-white hover:text-yellow-300 transition-transform duration-300 transform hover:translate-x-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <a
            href="https://react-bootstrap.github.io/"
            className="text-white hover:text-yellow-300 transition-transform duration-300 transform hover:translate-x-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Bootstrap
          </a>
          <a
            href="https://reactrouter.com/en/main"
            className="text-white hover:text-yellow-300 transition-transform duration-300 transform hover:translate-x-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Router
          </a>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="icons flex justify-center space-x-6 mt-8">
        <a
          href="#"
          className="text-white hover:text-yellow-300 hover:scale-110 transition-transform duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="#"
          className="text-white hover:text-yellow-300 hover:scale-110 transition-transform duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="#"
          className="text-white hover:text-yellow-300 hover:scale-110 transition-transform duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="#"
          className="text-white hover:text-yellow-300 hover:scale-110 transition-transform duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
      </div>

      {/* Copyright Section */}
      <p className="text-center text-gray-300 mt-8 text-sm">
        Copyright &copy; {new Date().getFullYear()} BlogHive. Built with React and Tailwind CSS.
      </p>
    </div>
  );
};

export default Footer;
