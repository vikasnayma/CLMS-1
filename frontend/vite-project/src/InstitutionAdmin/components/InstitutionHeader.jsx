import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const InstitutionHeader = () => {
  const navigate = useNavigate();

    const [dropdown, setDropdown] = useState("");

  const toggleDropdown = (name) => {
    setDropdown(dropdown === name ? "" : name);
  };

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
      
      {/* Menu Items */}
      <div className="hidden md:flex space-x-6 items-center">
        <div className="relative">
          <button
            onClick={() => navigate("/Institutiondashboard")}
            className="hover:text-purple-700"
          >
            Dashboard
          </button>
        </div>

        <NavLink to="/Courses" className={linkStyle}>
          Courses
        </NavLink>
        <NavLink to="/Collaboration" className={linkStyle}>
          Collaboration
        </NavLink>
        <NavLink to="/Transactions" className={linkStyle}>
          Transactions
        </NavLink>
        <NavLink to="/Instructors" className={linkStyle}>
          Instructors
        </NavLink>
        <NavLink to="/Students" className={linkStyle}>
          Students
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
            <div className="absolute bg-white shadow-md mt-2 py-2 w-30 rounded-md">
              <NavLink to="/profile/dashboard" className="block px-4 py-2 hover:bg-gray-100">
                Edit Profile
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
            <NavLink to="/Institutiondashboard" className="block px-4 py-2 hover:bg-gray-100">
              Dashboard
            </NavLink>
            <NavLink to="/Courses" className="block px-4 py-2 hover:bg-gray-100">
              Courses
            </NavLink>
            <NavLink to="/Instructors" className="block px-4 py-2 hover:bg-gray-100">
            Instructors
            </NavLink>
            <NavLink to="/Transactions" className="block px-4 py-2 hover:bg-gray-100">
            Transactions
            </NavLink>
            <NavLink to="/Students" className="block px-4 py-2 hover:bg-gray-100">
            Students
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



export default InstitutionHeader;
