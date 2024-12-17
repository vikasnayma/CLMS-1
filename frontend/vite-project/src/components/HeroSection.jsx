import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-white h-screen flex items-center justify-center text-gray-800">
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Get the Career you deserve. Faster.
        </h1>
        <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
          Discover top institutes, explore popular courses, and connect with renowned educators
          to accelerate your learning journey.
        </p>

        {/* Explore Button */}
        <button
          className="bg-blue-600 text-white hover:bg-blue-700 font-medium text-lg py-3 px-8 rounded shadow-md transition duration-300"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default HeroSection;