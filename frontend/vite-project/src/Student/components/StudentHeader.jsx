import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const StudentHeader = () => {
  const [dropdown, setDropdown] = useState("");
  const navigate = useNavigate();

  // Toggle dropdown menus
  const toggleDropdown = (name) => {
    setDropdown(dropdown === name ? "" : name);
  };

  // Logout logic
  const handleLogout = () => {
    Cookies.remove("token"); // Remove token from cookies
    navigate("/"); // Redirect to login page
  };

  const linkStyle = ({ isActive }) =>
    isActive ? "text-purple-700 font-bold" : "hover:text-purple-700";

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <NavLink to="/" className="text-2xl font-bold text-purple-700">
        LMS
      </NavLink>

      {/* Search bar */}
      <div className="hidden md:flex items-center flex-grow mx-4">
        <input
          type="text"
          placeholder="Search for anything"
          className="w-full border rounded-full py-2 px-4 focus:outline-none"
        />
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex space-x-6 items-center">
        {/* Institutions Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("institution")}
            className="hover:text-purple-700"
          >
            Institution
          </button>
          {dropdown === "institution" && (
            <div className="absolute bg-white shadow-md mt-2 py-2 w-40 rounded-md">
              <NavLink to="/institution/1" className="block px-4 py-2 hover:bg-gray-100">
                Institution 1
              </NavLink>
              <NavLink to="/institution/2" className="block px-4 py-2 hover:bg-gray-100">
                Institution 2
              </NavLink>
              <NavLink to="/institution/3" className="block px-4 py-2 hover:bg-gray-100">
                Institution 3
              </NavLink>
            </div>
          )}
        </div>

        {/* Categories Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("category")}
            className="hover:text-purple-700"
          >
            Category
          </button>
          {dropdown === "category" && (
            <div className="absolute bg-white shadow-md mt-2 py-2 w-40 rounded-md">
              <NavLink to="/category/development" className="block px-4 py-2 hover:bg-gray-100">
                Development
              </NavLink>
              <NavLink to="/category/design" className="block px-4 py-2 hover:bg-gray-100">
                Design
              </NavLink>
              <NavLink to="/category/business" className="block px-4 py-2 hover:bg-gray-100">
                Business
              </NavLink>
            </div>
          )}
        </div>

        {/* Wishlist */}
        <NavLink to="/wishlist" className={linkStyle}>
          Wishlist
        </NavLink>

        {/* My Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("profile")}
            className="hover:text-purple-700"
          >
            My Profile
          </button>
          {dropdown === "profile" && (
            <div className="absolute bg-white shadow-md mt-2 py-2 w-40 rounded-md">
              <NavLink to="/profile/dashboard" className="block px-4 py-2 hover:bg-gray-100">
                Dashboard
              </NavLink>
              <NavLink to="/profile/settings" className="block px-4 py-2 hover:bg-gray-100">
                Settings
              </NavLink>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Responsive Menu */}
      <div className="md:hidden">
        <button onClick={() => toggleDropdown("menu")}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {dropdown === "menu" && (
          <div className="absolute top-14 right-4 bg-white shadow-md rounded-md w-48">
            <NavLink to="/institution" className="block px-4 py-2 hover:bg-gray-100">
              Institution
            </NavLink>
            <NavLink to="/category" className="block px-4 py-2 hover:bg-gray-100">
              Category
            </NavLink>
            <NavLink to="/wishlist" className="block px-4 py-2 hover:bg-gray-100">
              Wishlist
            </NavLink>
            <NavLink to="/profile" className="block px-4 py-2 hover:bg-gray-100">
              My Profile
            </NavLink>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};



export default StudentHeader;
