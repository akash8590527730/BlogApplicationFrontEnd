import React from "react";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-6 md:p-10 lg:p-16">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center text-white text-center py-20 px-4"
        style={{
          backgroundImage:
            "url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1')",
        }}
      >
        <h1 className="text-4xl font-bold md:text-5xl">About Us</h1>
        <p className="mt-4 text-lg md:text-xl">
          Discover the story behind our platform and our commitment to sharing
          insightful content.
        </p>
      </div>

      {/* About Section */}
      <div className="bg-white shadow-lg rounded-lg -mt-16 relative z-10 p-6 md:p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-gray-600 leading-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s. It was popularized with desktop publishing
          software like Aldus PageMaker and remains a standard in content
          creation today.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Our Mission
        </h3>
        <p className="text-gray-600 leading-7">
          At MaxBlog, our goal is to empower creators and readers alike. We
          strive to provide a platform where ideas, stories, and knowledge
          converge to inspire meaningful conversations and connections.
        </p>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Why Choose MaxBlog?
          </h2>
          <p className="text-gray-600 mt-4">
            Writing and sharing has never been easier. Explore the features
            that set us apart.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <img
                src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
                alt="Powered by ChatGPT"
                className="mx-auto h-12 w-12"
              />
              <h3 className="text-lg font-semibold mt-4">Powered by ChatGPT</h3>
              <p className="text-gray-600 mt-2">
                Leverage cutting-edge AI to craft engaging, creative, and
                optimized content effortlessly.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <img
                src="https://www.svgrepo.com/show/530442/port-detection.svg"
                alt="Easy to Use"
                className="mx-auto h-12 w-12"
              />
              <h3 className="text-lg font-semibold mt-4">Easy to Use</h3>
              <p className="text-gray-600 mt-2">
                Simplified tools and user-friendly interfaces for writers and
                readers alike.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <img
                src="https://www.svgrepo.com/show/530444/availability.svg"
                alt="Customizable Settings"
                className="mx-auto h-12 w-12"
              />
              <h3 className="text-lg font-semibold mt-4">Custom Settings</h3>
              <p className="text-gray-600 mt-2">
                Personalize your reading and writing experience with advanced
                customization options.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Trusted by Thousands
        </h2>
        <div className="flex justify-center items-center space-x-3">
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200"
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt=""
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200"
            src="https://randomuser.me/api/portraits/women/4.jpg"
            alt=""
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200"
            src="https://randomuser.me/api/portraits/men/34.jpg"
            alt=""
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200"
            src="https://randomuser.me/api/portraits/women/6.jpg"
            alt=""
          />
        </div>
        <p className="mt-4 text-gray-600">
          Join 5,000+ creators and readers who trust us for their blogging
          journey.
        </p>
      </div>
    </div>
  );
};

export default About;
