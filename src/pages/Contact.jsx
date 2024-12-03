import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      access_key: "YOUR_VALID_ACCESS_KEY", // Replace with your Web3Forms access key
      name: data.username.trim(),
      email: data.email.trim(),
      message: data.message.trim(),
    };

    console.log("Payload being sent:", userInfo);

    try {
      const response = await axios.post("https://api.web3forms.com/submit", userInfo, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Response from Web3Forms:", response.data);
      toast.success("Message sent successfully");
    } catch (error) {
      console.error("Error from Web3Forms:", error.response?.data || error.message);
      const errorMessage = error.response?.data?.message || "An error occurred. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-5">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden animate-fadeInUp">
          <div className="flex flex-wrap">
            {/* Form Section */}
            <div className="w-full md:w-1/2 p-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-1">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-white text-black rounded-lg shadow focus:ring-2 focus:ring-yellow-400"
                    {...register("username", { required: "Name is required" })}
                  />
                  {errors.username && (
                    <span className="text-sm text-yellow-300">{errors.username.message}</span>
                  )}
                </div>
                <div className="space-y-1">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 bg-white text-black rounded-lg shadow focus:ring-2 focus:ring-yellow-400"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-sm text-yellow-300">{errors.email.message}</span>
                  )}
                </div>
                <div className="space-y-1">
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-2 bg-white text-black rounded-lg shadow focus:ring-2 focus:ring-yellow-400"
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && (
                    <span className="text-sm text-yellow-300">{errors.message.message}</span>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 shadow-lg transition transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
            {/* Contact Info Section */}
            <div className="w-full md:w-1/2 bg-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <FaPhone className="text-indigo-600 text-xl" />
                  <span className="text-gray-700">+91 9876543210</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaEnvelope className="text-purple-600 text-xl" />
                  <span className="text-gray-700">bloghive@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-green-600 text-xl" />
                  <span className="text-gray-700">Mumbai, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
