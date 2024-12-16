import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(formData);
      
      const response = await axios.post("http://localhost:8003/user/login", formData);
      //console.log(response.data);
      
      const { token } = response.data;
      Cookies.set("token", token , { expires: 1 });
      
      // Redirect to a protected route or dashboard
    } catch (error) {
      setError("Failed to Login");
    }
  };

  return (
    
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-md">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </form>
          <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?
                  <Link to="/Signup" className="ml-2 text-[#a78059] hover:underline focus:outline-none font-semibold">
                    Sign Up
                  </Link>
                </p>
              </div>
        </div>
      </div>
    );
}

export default Login;