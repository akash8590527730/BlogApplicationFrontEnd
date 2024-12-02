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
      access_key: "be7f1a7b-ec68-47fc-be64-b31df8f8dd25",
      name: data.username,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://api.web3forms.com/submit", userInfo);
      toast.success("Message sent successfully");
    } catch (error) {
      toast.error("An error occurred");
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
                    name="username"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-white text-black rounded-lg shadow focus:ring-2 focus:ring-yellow-400"
                    {...register("username", { required: true })}
                  />
                  {errors.username && (
                    <span className="text-sm text-yellow-300">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 bg-white text-black rounded-lg shadow focus:ring-2 focus:ring-yellow-400"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-sm text-yellow-300">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-2 bg-white text-black rounded-lg shadow focus:ring-2 focus:ring-yellow-400"
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <span className="text-sm text-yellow-300">
                      This field is required
                    </span>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contact Information
              </h2>
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
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <div className="h-10 w-10 bg-indigo-600 rounded-full flex items-center justify-center shadow-md transform transition hover:scale-110">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div className="h-10 w-10 bg-purple-600 rounded-full flex items-center justify-center shadow-md transform transition hover:scale-110">
                    <FaPhone className="text-white" />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
