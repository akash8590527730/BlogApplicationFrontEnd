import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { FaHive } from "react-icons/fa"; // Importing the FontAwesome Hive icon

function Register() {
  const { isAuthenticated, setIsAuthenticated, setProfile } = useAuth();
  const navigateTo = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [education, setEducation] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");

  const changePhotoHandler = (e) => {
    console.log(e);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPhotoPreview(reader.result);
      setPhoto(file);
    };
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("education", education);
    formData.append("photo", photo);
    try {
      const { data } = await axios.post(
        "https://blogapplicationbackend-1.onrender.com/api/users/register",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      localStorage.setItem("jwt", data.token); // storing token in localStorage so that if user refreshed the page it will not redirect again in login
      toast.success(data.message || "User registered successfully");
      setProfile(data);
      setIsAuthenticated(true);
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRole("");
      setEducation("");
      setPhoto("");
      setPhotoPreview("");
  
      // Redirect to login page after successful registration
      navigateTo("/login");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response.data.message || "Please fill the required fields"
      );
    }
  };
  

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleRegister}>
            <div className="font-semibold text-3xl flex justify-center items-center text-center text-gray-800">
              <FaHive className="mr-2 text-yellow-500" /> BLOG HIVE
            </div>
            <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
              Register
            </h1>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 mb-4 border rounded-md bg-gray-100 text-gray-700"
            >
              <option value="">Select Role</option>
              {/* <option value="user">user</option> */}
              <option value="admin">admin</option>
            </select>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded-md bg-gray-100 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-md bg-gray-100 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border rounded-md bg-gray-100 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-md bg-gray-100 text-gray-700"
              />
            </div>
            <select
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full p-2 mb-4 border rounded-md bg-gray-100 text-gray-700"
            >
              <option value="">Select Your Education</option>
              <option value="BCA">Primary Education</option>
              <option value="MCA">Upper Secondary Education</option>
              <option value="MBA">Bachelor's or Equivalent Level</option>
              <option value="BBA">Master's or Equivalent Level</option>
            </select>
            <div className="flex items-center mb-4">
              <div className="w-20 h-20 mr-4 border border-gray-300 rounded-full overflow-hidden">
                <img
                  src={photoPreview || "https://via.placeholder.com/150"}
                  alt="profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <input
                type="file"
                onChange={changePhotoHandler}
                className="w-full p-2 border rounded-md bg-gray-100 text-gray-700"
              />
            </div>
            <p className="text-center mb-4 text-gray-700">
              Already registered?{" "}
              <Link to={"/login"} className="text-blue-600">
                Login Now
              </Link>
            </p>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 hover:bg-blue-700 duration-300 rounded-md text-white font-semibold"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
