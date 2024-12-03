import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Creator() {
  const [admin, setAdmin] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const { data } = await axios.get(
          "https://blogapplicationbackend-1.onrender.com/api/users/admins",
          {
            withCredentials: true,
          }
        );
        if (data && data.admins) {
          setAdmin(data.admins);
        } else {
          setError("No admin data found");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch admins");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAdmins();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6 text-center">Popular Creators</h1>
      {isLoading ? (
        <p className="text-center">Loading creators...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : admin.length > 0 ? (
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
          {admin.map((element) => (
            <div key={element._id} className="text-center p-4">
              <div className="w-32 h-32 mx-auto mb-4">
                <img
                  src={element.photo?.url || "/placeholder-image.jpg"} // Fallback for missing image
                  alt={element.name || "Creator"}
                  className="w-full h-full object-cover border-2 border-gray-300 rounded-full"
                />
              </div>
              <p className="font-medium text-sm">{element.name}</p>
              <p className="text-xs text-gray-500">{element.role}</p>
            </div>
          ))}
        </Carousel>
      ) : (
        <p className="text-center">No creators found.</p>
      )}
    </div>
  );
}

export default Creator;
