import React from "react";

const InstitutionCard = ({ image, name, description }) => {
  return (
    <div className="max-w-80 bg-white border border-gray-300 rounded shadow-md overflow-hidden">
      {/* Image */}
      <img
        className="w-full h-44 object-cover"
        src={image}
        alt={name}
      />

      {/* Content */}
      <div className="p-2 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-gray-700 mb-2 text-sm leading-relaxed">
          {description}
        </p>
        <button
          className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
        >
          Explore Info
        </button>
      </div>
    </div>
  );
};

export default InstitutionCard;
