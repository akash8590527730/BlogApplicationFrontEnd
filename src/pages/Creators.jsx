import axios from "axios";
import React, { useEffect, useState } from "react";

function Creators() {
  const [creators, setCreators] = useState([]);
  console.log(creators);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4001/api/users/admins",
          {
            withCredentials: true,
          }
        );
        setCreators(data.admins);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCreators();
  }, []);

  return (
    <div className="py-16 bg-gradient-to-r from-indigo-100 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {creators.map((creator) => (
            <div
              key={creator._id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-xl hover:bg-blue-50 transition duration-300 ease-in-out"
            >
              <div className="relative">
                <img
                  src={creator.photo.url}
                  alt="avatar"
                  className="w-full h-48 object-cover rounded-t-xl transition-transform duration-500 ease-in-out transform hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
                  <img
                    src={creator.photo.url}
                    alt="avatar"
                    className="w-24 h-24 rounded-full mx-auto border-4 border-white transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                </div>
              </div>
              <div className="px-6 py-4 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition duration-300 ease-in-out">
                  {creator.name}
                </h2>
                <p className="text-gray-500 text-sm italic mb-2">{creator.role}</p>
                <div className="mt-4 text-gray-600">
                  <p className="text-sm">Email: {creator.email}</p>
                  <p className="text-sm">Phone: {creator.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Creators;
