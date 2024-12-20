import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

function Header() {

  const navigation = useNavigate();
  const [dropdown, setDropdown] = useState("");

  const handleNavigation = () => {
    navigation("/Login");
  }
  const toggleDropdown = (name) => {
    setDropdown(dropdown === name ? "" : name);
  };

  return (
    <>
      <header>
        <nav className='bg-white pt-4 px-8 shadow-xl py-2 sticky top-0 z-50'>
          <div className='flex items-center justify-between'>

            {/* Logo Section */}

            {/* Navigation Links */}
            <div className='hidden md:flex space-x-10 text-black'>
              <ul className='flex items-center space-x-8 text-md font-semibold'>
                <li className='relative group'>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) => isActive ? 'text-blue-800' : 'text-gray-700'}>
                    Home
                  </NavLink>
                  <div className='absolute left-0 bottom-0 w-full h-0.5 bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
                </li>
                <li className='relative group'>
                  <NavLink
                    to="/Institutes"
                    className={({ isActive }) => isActive ? 'text-blue-800' : 'text-gray-700'}>
                    Institutes
                  </NavLink>
                  <div className='absolute left-0 bottom-0 w-full h-0.5 bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
                </li>

                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("category")}
                    className="text-gray-700 hover:text-purple-700"
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
              </ul>
            </div>
            {/* Search bar */}
            <div className="hidden md:flex items-center flex-grow mx-4">
              <input
                type="text"
                placeholder="Search for anything"
                className="w-full border rounded-full py-2 px-4 focus:outline-none"
              />
            </div>

            {/* Login Button */}
            <div className='flex items-center'>
              <button className='border border-blue-900 rounded-lg shadow-lg text-lg text-black px-6 py-1 hover:bg-blue-950 hover:text-white transition-all duration-300 ease-in-out' onClick={handleNavigation}>
                Login
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className='md:hidden mt-4 flex justify-center'>
            <ul className='flex flex-col space-y-4 text-lg font-semibold'>
              <li className='hover:text-blue-800'>
                <NavLink to="/" end className={({ isActive }) => isActive ? 'text-blue-800' : 'text-gray-700'}>Home</NavLink>
              </li>
              <li className='hover:text-blue-800'>
                <NavLink to="/About" className={({ isActive }) => isActive ? 'text-blue-800' : 'text-gray-700'}>About Us</NavLink>
              </li>
              <li className='hover:text-blue-800'>
                <NavLink to="/Institutes" className={({ isActive }) => isActive ? 'text-blue-800' : 'text-gray-700'}>Institutes</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;