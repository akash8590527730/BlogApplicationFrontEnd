import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { FaHive } from "react-icons/fa"; // Import FaHive icon from react-icons

function Login() {
  const { isAuthenticated, setIsAuthenticated, setProfile } = useAuth();
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://blogapplicationbackend-1.onrender.com/api/users/login",
        { email, password, role },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      // Store the token in localStorage
      localStorage.setItem("jwt", data.token); // storing token in localStorage
      toast.success(data.message || "User Logined successfully", {
        duration: 3000,
      });
      setProfile(data);
      setIsAuthenticated(true);
      setEmail("");
      setPassword("");
      setRole("");
      navigateTo("/");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Please fill the required fields",
        {
          duration: 3000,
        }
      );
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-lg p-8">
          {/* FaHive Icon with animation */}
          <div className="flex justify-center mb-6">
            <FaHive className="text-5xl text-yellow-500 animate-spin-slow" />
          </div>

          <form onSubmit={handleLogin}>
            <div className="font-semibold text-3xl text-center text-gray-800 mb-6">
              BLOG HIVE
            </div>
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Login</h1>

            {/* Role Selection */}
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 mb-6 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Select Role</option>
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>

            {/* Email Input */}
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Register Link */}
            <p className="text-center mb-6 text-gray-600">
              New User?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register Now
              </Link>
            </p>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 hover:bg-blue-700 duration-300 rounded-md text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
